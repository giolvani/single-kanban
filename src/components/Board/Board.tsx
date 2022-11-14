import { useMemo, useState } from "react";
import { Form } from "components/Form";
import { Phase as PhaseComponent } from "components/Phase";
import { Phase as PhaseType } from "models/Phase";
import { Container } from "./styled";
import { Phases as PhaseList } from "../../__fixtures__/phase";

export function Board() {
  const [phases] = useState<PhaseType[]>(PhaseList);

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

  return (
    <Container>
      <div className="phases">
        {phases.map((phase) => (
          <PhaseComponent
            key={phase.id}
            title={phase.title}
            cards={phase.cards}
            isFirst={isFirstPhase(phase)}
            isLast={isLastPhase(phase)}
          />
        ))}
      </div>
      <Form />
    </Container>
  );
}
