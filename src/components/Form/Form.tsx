import { ChangeEvent, useState } from "react";
import { useCardContext } from "components/Card/context";
import { Container, FormButton } from "./styled";

export function Form() {
  const { addCard } = useCardContext();
  const [description, setDescription] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    description && addCard(description);
    cleanForm();
  };

  const cleanForm = (): void => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setDescription("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="card description..."
          onChange={handleChange}
        />
        <FormButton type="submit" title="Add card" disabled={!description}>
          +
        </FormButton>
      </form>
    </Container>
  );
}
