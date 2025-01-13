import { Fish } from "./fishes";
import { Mutation } from "./mutations";
import "./rarities.css"
import * as React from 'react';

function insertItemBetween<T>(arr: T[], item: T): T[] {
  return arr.reduce((acc, curr, index) => {
      if (index > 0) acc.push(item);
      acc.push(curr);
      return acc;
  }, [] as T[]);
}

/**
 * Calculate the value of a fish.
 * @param fish Fish to calculate the value of.
 * @param mutation Mutation to apply to the fish.
 * @param weight Fish weight.
 * @param shiny Whether the fish is shiny.
 * @param sparkling whether the fish is sparkling.
 * @returns Final value of the fish.
 */
export function getFischValue(
  fish: Fish,
  weight: number,
  mutation?: Mutation,
  shiny?: boolean,
  sparkling?: boolean
): number {
  const baseValue = Math.ceil(fish.price * weight);
  return Math.ceil(
    baseValue *
      (mutation ? mutation.value : 1) *
      (shiny ? 1.85 : 1) *
      (sparkling ? 1.85 : 1)
  );
}

export function getFishString(
  fish: Fish,
  weight: number,
  mutation?: Mutation,
  shiny?: boolean,
  sparkling?: boolean
): string {
  const output = [];

  if (shiny) {
    output.push("Shiny");
  }

  if (sparkling) {
    output.push("Sparkling");
  }

  if (weight > fish.max && weight <= fish.max * 2) {
    output.push("Big");
  } else if (weight > fish.max * 2) {
    output.push("Giant");
  }

  if (mutation) {
    output.push(mutation.name);
  }

  output.push(`${weight}kg`);

  output.push(fish.name);

  return output.join(" ");
}


export function getFishJSX(
  fish: Fish,
  weight: number,
  mutation?: Mutation,
  shiny?: boolean,
  sparkling?: boolean,
  props?: React.HTMLAttributes<HTMLSpanElement> & React.ClassAttributes<HTMLElement>
) {

  const children: React.ReactNode[] = [];

  if (shiny) {
    children.push(<span className="shiny">Shiny</span>);
  }

  if (sparkling) {
    children.push(<span className="sparkling">Sparkling</span>)
  }

  if (weight > fish.max && weight <= fish.max * 2) {
    children.push(<span className="big">Big</span>);
  } else if (weight > fish.max * 2) {
    children.push(<span className="giant">Giant</span>);
  }

  if (mutation) {
    children.push(<span className={mutation.identifier}>{mutation.name}</span>)
  }

  children.push(`${weight}kg`);

  children.push(<span className={fish.rarity}>{fish.name}</span>)

  return React.createElement("span", props, insertItemBetween(children, " "));
}