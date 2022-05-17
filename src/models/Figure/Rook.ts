import { FigureConstructorPayload } from "../../types/figures";
import { IMoveBehavior } from "./Behavior/IMoveBehavior";
import { StraightMoveBehavior } from "./Behavior/StraightMoveBehavior";
import { Figure } from "./Figure";

export class Rook extends Figure {
  constructor(payload: FigureConstructorPayload) {
    super(payload);
  }

  get behaviors(): IMoveBehavior[] {
    return [
      new StraightMoveBehavior(),
    ]
  }
}
