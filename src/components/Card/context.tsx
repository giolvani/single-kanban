import { Phase } from "components/Phase/model";
import React, { ReactElement } from "react";
import { Card } from "./model";

type CardContextType = {
  addCard: (cardDescription: string) => void;
  moveForward: (card: Card, currentPhaseId: Phase["id"]) => void;
  moveBack: (card: Card, currentPhaseId: Phase["id"]) => void;
};

type CardProviderType = {
  children: React.ReactNode;
  value: CardContextType;
};

const Context = React.createContext<CardContextType>({} as CardContextType);

export const CardProvider = (props: CardProviderType): ReactElement => {
  const { children, value } = props;

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCardContext = (): CardContextType => {
  return React.useContext(Context);
};
