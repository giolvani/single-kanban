import { Container, FormButton } from "./styled";

export function Form() {
  return (
    <Container>
      <input type="text" placeholder="card description..." />
      <FormButton title="Add card">+</FormButton>
    </Container>
  );
}
