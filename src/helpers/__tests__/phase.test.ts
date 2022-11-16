import { moveToNextPhase, moveToPreviousPhase } from "helpers/phase";
import { Phases as PhaseList, PhaseOne, PhaseThree } from "__fixtures__/phase";
import { CardOne, CardThree } from "__fixtures__/card";

describe("phase helper", () => {
  it("move fist card to second phase", () => {
    const phases = moveToNextPhase(PhaseList, PhaseOne.id, CardOne);
    expect(phases[0].cards).toHaveLength(0);
    expect(phases[1].cards).toHaveLength(2);
    expect(phases[2].cards).toHaveLength(1);
  });

  it("move third card to second phase", () => {
    const phases = moveToPreviousPhase(PhaseList, PhaseThree.id, CardThree);
    expect(phases[0].cards).toHaveLength(0);
    expect(phases[1].cards).toHaveLength(3);
    expect(phases[2].cards).toHaveLength(0);
  });
});
