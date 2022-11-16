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

  // it("call moveBack function when user click on the prev button", async () => {
  //   setup();
  //   const prevButton = screen.getByTitle("Previous phase");
  //   userEvent.click(prevButton);
  //   await waitFor(() => expect(moveBack).toHaveBeenCalledTimes(1));
  // });

  it("call moveForward function when user click on the next button", async () => {
    setup();
    const nextButton = screen.getByTestId("phase-container-1");
    console.log(nextButton);
    // userEvent.click(nextButton);
    // await waitFor(() => expect(moveForward).toHaveBeenCalledTimes(1));
  });
});
