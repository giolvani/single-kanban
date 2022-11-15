import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

const cardDescription = "My card description";
const moveBack = jest.fn();
const moveForward = jest.fn();

const setup = (
  disableForward: boolean = false,
  disableRewind: boolean = false
) => {
  render(
    <Card
      description={cardDescription}
      moveBack={moveBack}
      moveForward={moveForward}
      disableForward={disableForward}
      disableRewind={disableRewind}
    />
  );
};

describe("<Card/>", () => {
  it("render properly", () => {
    setup();
    const cardTitle = screen.getByText(cardDescription);
    expect(cardTitle).toBeInTheDocument();
  });

  it("prev button button should be disabled if `disableRewind` is true", async () => {
    setup(false, true);
    const prevButton = screen.getByTitle("Previous phase");
    expect(prevButton).toBeDisabled();
  });

  it("next button button should be disabled if `disableForward` is true", async () => {
    setup(true, false);
    const nextButton = screen.getByTitle("Next phase");
    expect(nextButton).toBeDisabled();
  });
});
