import { TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { Figure } from "../Figure";
import { IMoveBehavior } from "./IMoveBehavior";

export class HookMoveBehavior implements IMoveBehavior {
  getAvailableMoves = (figure: Figure, board: Board): TurnResult[] => {
    throw new Error('Hook move: Not implemented');
  }
}
