import { render, screen } from "@testing-library/react";
import { CardProvider } from "components/Card/context";
import { Board } from "../Board";

const addCard = jest.fn();
const moveForward = jest.fn();
const moveBack = jest.fn();

const setup = () => {
  render(
    <CardProvider value={{ addCard, moveForward, moveBack }}>
      <Board />
    </CardProvider>
  );
};

describe("<Board/>", () => {
  it("render properly", () => {
    setup();
    const phaseItems = screen.getAllByTestId(/phase-container-[\d]/i);
    expect(phaseItems).toHaveLength(3);
  });

  it.todo("cover move next button");

  it.todo("cover move previous button");
});
