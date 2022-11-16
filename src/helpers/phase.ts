import { Card } from "components/Card/model";
import { Phase } from "components/Phase/model";

export const moveToNextPhase = (
  phases: Phase[],
  sourcePhaseId: Phase["id"],
  cardToHandle: Card
): Phase[] => {
  const phase = phases.find(
    (phase: Phase) => phase.id === sourcePhaseId
  ) as Phase;

  const phaseIndex = phases.indexOf(phase);

  phase.cards = phase.cards.filter(
    (currentCard: Card) => currentCard.id !== cardToHandle.id
  );

  const nextPhase = phases[phaseIndex + 1] as Phase;
  nextPhase.cards.push(cardToHandle);

  return phases;
};

export const moveToPreviousPhase = (
  phases: Phase[],
  sourcePhaseId: Phase["id"],
  cardToHandle: Card
): Phase[] => {
  const phase = phases.find(
    (phase: Phase) => phase.id === sourcePhaseId
  ) as Phase;

  const phaseIndex = phases.indexOf(phase);

  phase.cards = phase.cards.filter(
    (currentCard: Card) => currentCard.id !== cardToHandle.id
  );

  const previousPhase = phases[phaseIndex - 1] as Phase;
  previousPhase.cards.push(cardToHandle);

  return phases;
};
