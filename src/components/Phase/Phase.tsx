import { Card as CardComponent } from "components/Card";
import { Card as CardType } from "models/Card";
import { Container, Title } from "./styled";

type PhaseType = {
  title: string;
  isFirst?: boolean;
  isLast?: boolean;
  cards?: CardType[];
};

export function Phase(props: PhaseType) {
  const { cards, title, isFirst, isLast } = props;

  return (
    <Container>
      <Title>{title}</Title>
      {cards?.map((card) => (
        <CardComponent
          key={card.id}
          description={card.description}
          disableRewind={isFirst}
          disableForward={isLast}
        />
      ))}
    </Container>
  );
}
