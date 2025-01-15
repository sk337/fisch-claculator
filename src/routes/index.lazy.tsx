import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { RodType } from "$/rods";
import { SelectRod } from "$/selectRod";
import { MutationType } from "$/mutations";
import { SelectMutation } from "$/selectMutation";
import { SeasonType } from "$/season";
import { SelectSeason } from "$/selectSeason";
import { BaitType } from "$/baits";
import { SelectBait } from "$/selectBait";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [selectedRod, setSelectedRod] = useState<RodType | undefined>();
  const [selectedMutation, setSelectedMutation] = useState<
    MutationType | undefined
  >();
  const [selectedSeason, setSelectedSeason] = useState<
    SeasonType | undefined
  >();
  const [selectedBait, setSelectedBait] = useState<BaitType | undefined>();

  return (
    <div className="p-2 flex flex-col gap-4">
      <span className="text-2xl font-bold">Fisch Odds Calculator</span>
      <p>
        A Work In Progress odds calculator for the game{" "}
        <a
          href="https://www.roblox.com/games/16732694052/Fisch"
          target="_blank"
          className="underline"
        >
          Fisch
        </a>
        . <br />
        My plan for this is to allow it to calculate profit over time for
        different fish, rod, location, and bait combinations. I also plan show
        the odds of catching any specified fish for bestiary. <br />
        I have only gotten some data and for now you can play with some
        components I have made for the project. <br />
        Oh yeah and this is all 100% <i>TypeSafe&trade;</i>. You can contact me
        on discord at <i>@sk337</i>. <br />
        source code can be found on{" "}
        <a
          href="https://github.com/sk337/fisch-claculator"
          className="underline"
          target="_blank"
        >
          GitHub
        </a>{" "}
        <br />
        last commit @{" "}
        {new Date(__GIT_LOG__.date).toLocaleString(undefined, {
          hour12: false,
        })}
      </p>
      <SelectRod onChange={setSelectedRod} value={selectedRod} />
      <SelectMutation onChange={setSelectedMutation} value={selectedMutation} />
      <SelectSeason onChange={setSelectedSeason} value={selectedSeason} />
      <SelectBait onChange={setSelectedBait} value={selectedBait} />
    </div>
  );
}
