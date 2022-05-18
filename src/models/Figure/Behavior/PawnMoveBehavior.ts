import { TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { Figure } from "../Figure";
import { IMoveBehavior } from "./IMoveBehavior";

export class PawnMoveBehavior implements IMoveBehavior {
  getAvailableMoves = (figure: Figure, board: Board): TurnResult[] => {
    throw new Error('Pawn move: Not implemented');
  }
}
