import { FigureConstructorPayload } from "../../types/figures";
import { IMoveBehavior } from "./Behavior/IMoveBehavior";
import { PawnMoveBehavior } from "./Behavior/PawnMoveBehavior";
import { Figure } from "./Figure";

export class Pawn extends Figure {
  constructor(payload: FigureConstructorPayload) {
    super(payload);
  }

  get behaviors(): IMoveBehavior[] {
    return [
      new PawnMoveBehavior(),
    ]
  }
}
