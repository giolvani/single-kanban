import { Button } from "components/Button";
import { Actions, Container, Description } from "./styled";

type CardType = {
  disableForward?: boolean;
  disableRewind?: boolean;
};

export function Card(props: CardType) {
  const { disableRewind, disableForward } = props;

  return (
    <Container>
      <Actions>
        <Button
          color="red"
          icon
          title="Previous phase"
          disabled={disableRewind}
        >
          &lsaquo;
        </Button>
      </Actions>
      <Description>Card description</Description>
      <Actions>
        <Button color="green" icon title="Next phase" disabled={disableForward}>
          &rsaquo;
        </Button>
      </Actions>
    </Container>
  );
}
