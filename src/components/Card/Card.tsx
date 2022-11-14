import { Button } from "components/Button";
import { Actions, Container, Description } from "./styled";

export function Card() {
  return (
    <Container>
      <Actions>
        <Button color="red" icon title="Previous phase">
          &lsaquo;
        </Button>
      </Actions>
      <Description>Card description</Description>
      <Actions>
        <Button color="green" icon title="Next phase">
          &rsaquo;
        </Button>
      </Actions>
    </Container>
  );
}
