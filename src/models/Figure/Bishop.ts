import { FigureConstructorPayload } from "../../types/figures";
import { DiagonalMoveBehavior } from "./Behavior/DiagonalMoveBehavior";
import { IMoveBehavior } from "./Behavior/IMoveBehavior";
import { Figure } from "./Figure";

export class Bishop extends Figure {
  constructor(payload: FigureConstructorPayload) {
    super(payload);
  }

  get behaviors(): IMoveBehavior[] {
    return [
      new DiagonalMoveBehavior(),
    ]
  }
}
