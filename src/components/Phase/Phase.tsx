import { Card } from "components/Card";
import { Container, Title } from "./styled";

type PhaseType = {
  title: string;
};

export function Phase(props: PhaseType) {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Card />
    </Container>
  );
}
