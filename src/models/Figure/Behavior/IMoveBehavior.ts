import { Position, TurnResult } from "../../../types/game";
import { Board } from "../../Board";

export interface IMoveBehavior {
  getAvailableMoves: (position: Position, board: Board) => TurnResult[];
}