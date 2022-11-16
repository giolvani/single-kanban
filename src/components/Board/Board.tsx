import { useEffect, useMemo, useState } from "react";
import { CardProvider } from "components/Card/context";
import { Form } from "components/Form";
import { Phase as PhaseComponent } from "components/Phase";
import { Container } from "./styled";
import { Card as CardType } from "../Card/model";
import { Phase as PhaseType } from "../Phase/model";
import { Phases as PhaseList } from "../../__fixtures__/phase";
import { moveToNextPhase, moveToPreviousPhase } from "helpers/phase";

export function Board() {
  const [phases, setPhases] = useState<PhaseType[]>([]);

  useEffect(() => {
    setPhases(PhaseList);
  }, []);

  const isFirstPhase = useMemo(
    () =>
      (phase: PhaseType): boolean => {
        return JSON.stringify(phases[0]) === JSON.stringify(phase);
      },
    [phases]
  );

  const isLastPhase = useMemo(
    () =>
      (phase: PhaseType): boolean => {
        return (
          JSON.stringify(phases[phases.length - 1]) === JSON.stringify(phase)
        );
      },
    [phases]
  );

  const addCard = (cardDescription: string): void => {
    const currentPhases = JSON.parse(JSON.stringify(phases));

    currentPhases[0].cards.push({
      id: new Date().getTime(),
      description: cardDescription,
    } as CardType);

    setPhases(currentPhases);
  };

  const moveForward = (card: CardType, phaseId: PhaseType["id"]): void => {
    const phasesCopy = JSON.parse(JSON.stringify(phases));
    const newPhases = moveToNextPhase(phasesCopy, phaseId, card);
    setPhases(newPhases);
  };

  const moveBack = (card: CardType, phaseId: PhaseType["id"]): void => {
    const phasesCopy = JSON.parse(JSON.stringify(phases));
    const newPhases = moveToPreviousPhase(phasesCopy, phaseId, card);
    setPhases(newPhases);
  };

  return (
    <Container>
      <CardProvider value={{ addCard, moveForward, moveBack }}>
        <div className="phases">
          {phases.map((phase) => (
            <PhaseComponent
              key={phase.id}
              id={phase.id}
              title={phase.title}
              cards={phase.cards}
              isFirst={isFirstPhase(phase)}
              isLast={isLastPhase(phase)}
            />
          ))}
        </div>
        <Form />
      </CardProvider>
    </Container>
  );
}
