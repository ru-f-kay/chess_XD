import { Position, TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { Figure } from "../Figure";

export interface IMoveBehavior {
  getAvailableMoves: (figure: Figure, board: Board) => TurnResult[];
}