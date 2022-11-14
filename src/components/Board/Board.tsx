import { Form } from "components/Form";
import { Phase } from "components/Phase";
import { Container } from "./styled";

export function Board() {
  return (
    <Container>
      <div className="phases">
        <Phase title="To Do" />
        <Phase title="In Progress" />
        <Phase title="Done" />
      </div>
      <Form />
    </Container>
  );
}
