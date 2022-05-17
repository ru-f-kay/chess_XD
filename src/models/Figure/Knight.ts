import { FigureConstructorPayload } from "../../types/figures";
import { HookMoveBehavior } from "./Behavior/HookMoveBehavior";
import { IMoveBehavior } from "./Behavior/IMoveBehavior";
import { Figure } from "./Figure";

export class Knight extends Figure {
  constructor(payload: FigureConstructorPayload) {
    super(payload);
  }

  get behaviors(): IMoveBehavior[] {
    return [
      new HookMoveBehavior(),
    ]
  }
}
