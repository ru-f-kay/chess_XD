import { FigureConstructorPayload } from "../../types/figures";
import { IMoveBehavior } from "./Behavior/IMoveBehavior";
import { OneStepAroundMoveBehavior } from "./Behavior/OneStepAroundMoveBehavior";
import { Figure } from "./Figure";

export class King extends Figure {
  constructor(payload: FigureConstructorPayload) {
    super(payload);
  }

  get behaviors(): IMoveBehavior[] {
    return [
      new OneStepAroundMoveBehavior(),
    ]
  }
}
