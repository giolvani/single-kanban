import { Phase } from "components/Phase/model";
import { CardOne, CardTwo, CardThree } from "./card";

export const PhaseOne: Phase = {
  id: 1,
  title: "To Do",
  cards: [CardOne],
};

export const PhaseTwo: Phase = {
  id: 2,
  title: "In progress",
  cards: [CardTwo],
};

export const PhaseThree: Phase = {
  id: 3,
  title: "Done",
  cards: [CardThree],
};

export const Phases: Phase[] = [PhaseOne, PhaseTwo, PhaseThree];
