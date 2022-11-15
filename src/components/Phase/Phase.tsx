import { Card as CardComponent } from "components/Card";
import { useCardContext } from "components/Card/context";
import { Card as CardType } from "models/Card";
import { Container, Title } from "./styled";

type PhaseType = {
  id: number;
  title: string;
  isFirst?: boolean;
  isLast?: boolean;
  cards?: CardType[];
};

export function Phase(props: PhaseType) {
  const { id, cards, title, isFirst, isLast } = props;
  const { moveBack, moveForward } = useCardContext();

  const handleMoveBack = (card: CardType): void => {
    moveBack(card, id);
  };

  const handleMoveForward = (card: CardType): void => {
    moveForward(card, id);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {cards?.map((card) => (
        <CardComponent
          key={card.id}
          description={card.description}
          disableRewind={isFirst}
          disableForward={isLast}
          moveBack={() => handleMoveBack(card)}
          moveForward={() => handleMoveForward(card)}
        />
      ))}
    </Container>
  );
}
