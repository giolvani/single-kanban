import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Phase } from "../Phase";
import { CardOne } from "__fixtures__/card";
import { CardProvider } from "components/Card/context";

const phaseId = 123;
const phaseTitle = "To Do";
const addCard = jest.fn();
const moveForward = jest.fn();
const moveBack = jest.fn();

const setup = () => {
  render(
    <CardProvider value={{ addCard, moveForward, moveBack }}>
      <Phase id={phaseId} title={phaseTitle} cards={[CardOne]} />
    </CardProvider>
  );
};

describe("<Phase/>", () => {
  it("render properly", () => {
    setup();
    const title = screen.getByText(phaseTitle);
    expect(title).toBeInTheDocument();
  });

  it("call moveBack function when user click on the prev button", async () => {
    setup();
    const prevButton = screen.getByTitle("Previous phase");
    userEvent.click(prevButton);
    await waitFor(() => expect(moveBack).toHaveBeenCalledTimes(1));
  });

  it("call moveForward function when user click on the next button", async () => {
    setup();
    const nextButton = screen.getByTitle("Next phase");
    userEvent.click(nextButton);
    await waitFor(() => expect(moveForward).toHaveBeenCalledTimes(1));
  });
});
