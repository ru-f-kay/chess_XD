import { FigureType } from "../../types/figures";
import { GameColor, Position, TurnResult } from "../../types/game";
import { Board } from "../Board";
import { Bishop } from "./Bishop";
import { FigureConstructorPayload } from "../../types/figures";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { IMoveBehavior } from "./Behavior/IMoveBehavior";


export class Figure {
  private readonly initialPosition: Position;
  private readonly board: Board;
  private turnsMade = 0;

  readonly color: GameColor;
  position: Position;

  constructor({ board, position, color }: FigureConstructorPayload) {
    this.initialPosition = position;
    this.board = board;

    this.color = color;
    this.position = position;
  }

  get behaviors(): IMoveBehavior[] {
    throw new Error('Not implemented');
  }

  getAvailableMoves = (): TurnResult[] => {
    return this.behaviors.flatMap(
      (b) => b.getAvailableMoves(this.position, this.board)
    );
  }

  static readonly create = (type: FigureType, payload: FigureConstructorPayload): Figure => {
    switch (type) {
      case FigureType.King: return new King(payload);
      case FigureType.Queen: return new Queen(payload);
      case FigureType.Pawn: return new Pawn(payload);
      case FigureType.Bishop: return new Bishop(payload);
      case FigureType.Knight: return new Knight(payload);
      case FigureType.Rook: return new Rook(payload);
    }
  }
}