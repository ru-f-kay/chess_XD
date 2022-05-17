import { FigureConstructorPayload } from "../../types/figures";
import { DiagonalMoveBehavior } from "./Behavior/DiagonalMoveBehavior";
import { IMoveBehavior } from "./Behavior/IMoveBehavior";
import { StraightMoveBehavior } from "./Behavior/StraightMoveBehavior";
import { Figure } from "./Figure";

export class Queen extends Figure {
  constructor(payload: FigureConstructorPayload) {
    super(payload);
  }

  get behaviors(): IMoveBehavior[] {
    return [
      new DiagonalMoveBehavior(),
      new StraightMoveBehavior(),
    ]
  }
}
