import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectMutation } from "$/selectMutation";
import { getMutationByIdentifier, Mutation, MutationType } from "$/mutations";
import { fishType, getFishByIdentifier } from "$/fishes";
import { SelectFish } from "$/selectFishes";
import RangeInputSelect from "@/components/rangeInput";
import { getFischValue, getFishString } from "$/utils";

export const Route = createLazyFileRoute("/value")({
  component: RouteComponent,
});

function RouteComponent() {
  // state for the custom fish value
  const [customFishValue, setCustomFishValue] = useState<number>(0);
  const [customWeight, setCustomWeight] = useState<number>(0);
  const [customMutation, setCustomMutation] = useState<
    MutationType | undefined
  >();

  // state for the automatic fish value
  const [fish, setFish] = useState<fishType | undefined>();
  const [fishWeight, setFishWeight] = useState<number>(0);
  const [fishMutation, setFishMutation] = useState<MutationType | undefined>();
  const [shiny, setShiny] = useState<boolean>(false);
  const [sparkling, setSparkling] = useState<boolean>(false);

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
        <Card>
          <CardHeader>
            <CardTitle>Custom</CardTitle>
            <CardDescription>
              allows you to provide custom values{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <Label htmlFor="c:pk">C$ Per KG</Label>
              <Input
                id="c:pk"
                type="number"
                value={customFishValue}
                placeholder="Enter value"
                onChange={(v) => {
                  setCustomFishValue(parseInt(v.target.value));
                }}
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Label>Weight</Label>
              <Input
                id="c:w"
                type="number"
                value={customWeight}
                placeholder="Enter Weight"
                onChange={(v) => {
                  setCustomWeight(parseInt(v.target.value));
                }}
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Label>Mutation</Label>
              <SelectMutation onChange={setCustomMutation} />
            </div>
            <p>
              Fish Value:{" "}
              {customMutation != undefined
                ? customFishValue *
                  customWeight *
                  (getMutationByIdentifier(customMutation) as Mutation).value
                : 0}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Automatically</CardTitle>
            <CardDescription>
              Automatically calcualte the value of a fisch
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <Label>Fish</Label>
              <SelectFish onChange={setFish} />
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
                  />
                  <Label>Shiny</Label>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Input
                    className="h-6 w-min"
                    type="checkbox"
                    onChange={(e) => setSparkling(e.target.checked)}
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
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
