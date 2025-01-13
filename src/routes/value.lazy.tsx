import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectMutation } from "$/selectMutation";
import { getMutationByIdentifier, MutationType } from "$/mutations";
import { fishType, getFishByIdentifier } from "$/fishes";
import { SelectFish } from "$/selectFishes";
import RangeInputSelect from "@/components/rangeInput";
import { getFischValue, getFishJSX, getFishString } from "$/utils";
import { useHash } from "@/hooks/useHash";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const Route = createLazyFileRoute("/value")({
  component: RouteComponent,
});

function RouteComponent() {
  const [customWeight, setCustomWeight] = useState<number>(0);
  const [customValue, setCustomValue] = useState<number>(0);
  const [customMutation, setCustomMutation] = useState<number>(0);
  // state for the automatic fish value
  const [fish, setFish] = useHash<fishType | undefined>("fish", undefined);
  const [fishWeight, setFishWeight] = useHash<number>("fishWeight", 0);
  const [fishMutation, setFishMutation] = useHash<MutationType | undefined>(
    "fishMutation",
    undefined
  );
  const [shiny, setShiny] = useHash<boolean>("isShiny", false);
  const [sparkling, setSparkling] = useHash<boolean>("isSparkling", false);

  const fishValue = getFishByIdentifier(fish);
  if (fishValue && fishWeight < fishValue.min) {
    setFishWeight(fishValue.min);
  }
  if (fishValue && fishWeight > fishValue.max * 2.5) {
    setFishWeight(fishValue.max * 2.5);
  }
  const mutationValue = getMutationByIdentifier(fishMutation);

  return (
    <div className="p-2 flex flex-col gap-4 w-full items-center">
      <p className="text-2xl font-bold">Value Calculator</p>

      <div className="flex flex-row">
        <Tabs defaultValue="auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="auto">Auto</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="auto">
            <Card>
              <CardHeader>
                <CardTitle>Automatically</CardTitle>
                <CardDescription>
                  Automatically calculate the value of a fish
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Label>Fish</Label>
                  <SelectFish onChange={setFish} value={fish} />
                </div>
                {fishValue != undefined && (
                  <>
                    <RangeInputSelect
                      min={fishValue.min}
                      max={fishValue.max * 2.5}
                      label="Weight"
                      step={0.01}
                      onChange={setFishWeight}
                      value={fishWeight}
                    />
                    <SelectMutation
                      onChange={setFishMutation}
                      value={fishMutation}
                      optional={true}
                    />
                    <div className="flex flex-row gap-2 items-center">
                      <Input
                        className="w-min h-6"
                        type="checkbox"
                        onChange={(e) => setShiny(e.target.checked)}
                        checked={shiny}
                      />
                      <Label>Shiny</Label>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <Input
                        className="h-6 w-min"
                        type="checkbox"
                        onChange={(e) => setSparkling(e.target.checked)}
                        checked={sparkling}
                      />
                      <Label>Sparkling</Label>
                    </div>
                  </>
                )}
                <p>
                  Fish Value:{" "}
                  {fishValue != undefined
                    ? getFischValue(
                        fishValue,
                        fishWeight,
                        mutationValue,
                        shiny,
                        sparkling
                      ).toLocaleString()
                    : 0}{" "}
                  C$
                  <br />
                  Label:{" "}
                  {fishValue &&
                    getFishString(
                      fishValue,
                      fishWeight,
                      mutationValue,
                      shiny,
                      sparkling
                    )}
                  <br/>
                  Fancy Label: {fishValue && getFishJSX(
                      fishValue,
                      fishWeight,
                      mutationValue,
                      shiny,
                      sparkling,
                    )}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="manual">
            <Card>
              <CardHeader>
                <CardTitle>Manually</CardTitle>
                <CardDescription>
                  Manually calculate the value of a fish
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <Label>C$ Per KG</Label>
                  <Input
                    type="number"
                    value={customValue}
                    onChange={(e) => {
                      if(parseFloat(e.target.value)){
                        setCustomValue(parseFloat(e.target.value));
                      }
                    }
                  }
                  />
                </div>
                <div className="flex items-center flex-row">
                  <Label>Weight</Label>
                  <Input
                    type="number"
                    value={customWeight}
                    onChange={(e) => {
                      if(parseFloat(e.target.value)){
                        setCustomWeight(parseFloat(e.target.value));
                      }
                    }}
                  />
                </div>
                <div className="flex items-center flex-row">
                  <Label>Mutation</Label>
                  <Input
                    type="number"
                    value={customMutation}
                    onChange={(e) => {
                      if (parseFloat(e.target.value)) {
                        setCustomMutation(parseFloat(e.target.value));
                      }
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
