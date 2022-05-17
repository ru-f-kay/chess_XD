import { Position, TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { IMoveBehavior } from "./IMoveBehavior";

export class PawnMoveBehavior implements IMoveBehavior {
  getAvailableMoves = (position: Position, board: Board): TurnResult[] => {
    throw new Error('Not implemented');
  }
}
