import { Button } from "components/Button";
import { Actions, Container, Description } from "./styled";

type CardType = {
  description: string;
  disableForward?: boolean;
  disableRewind?: boolean;
  moveBack: () => void;
  moveForward: () => void;
};

export function Card(props: CardType) {
  const { description, disableRewind, disableForward, moveBack, moveForward } =
    props;

  const handleMoveBack = () => moveBack();

  const handleMoveForward = () => moveForward();

  return (
    <Container>
      <Actions>
        <Button
          color="red"
          icon
          title="Previous phase"
          disabled={disableRewind}
          onClick={handleMoveBack}
        >
          &lsaquo;
        </Button>
      </Actions>
      <Description>{description}</Description>
      <Actions>
        <Button
          color="green"
          icon
          title="Next phase"
          disabled={disableForward}
          onClick={handleMoveForward}
        >
          &rsaquo;
        </Button>
      </Actions>
    </Container>
  );
}
