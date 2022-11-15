import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "../Card";

const cardDescription = "My card description";
const moveBack = jest.fn();
const moveForward = jest.fn();

const setup = () => {
  render(
    <Card
      description={cardDescription}
      moveBack={moveBack}
      moveForward={moveForward}
    />
  );
};

describe("<Card/>", () => {
  it("render properly", () => {
    setup();
    const cardTitle = screen.getByText(cardDescription);
    expect(cardTitle).toBeInTheDocument();
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
