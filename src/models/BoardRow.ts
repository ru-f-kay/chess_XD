import { FigureType } from "../types/figures";
import { GameColor } from "../types/game";
import { Board } from "./Board";
import { Figure } from "./Figure/Figure"

const initialFigures = [
  FigureType.Rook,
  FigureType.Knight,
  FigureType.Bishop,
  FigureType.Queen,
  FigureType.King,
  FigureType.Bishop,
  FigureType.Knight,
  FigureType.Rook,
]

type Cell = {
  figure: null | Figure;
}

type ConstructorPayload = {
  rowIndex: number;
  length: number;
  board: Board;
}

export class BoardRow {
  private readonly board: Board;
  
  readonly index: number;
  cells: Array<Cell>;

  constructor({ rowIndex, length, board }: ConstructorPayload) {
    this.board = board;

    this.index = rowIndex;
    this.cells = Array.from({ length }).map(() => ({ figure: null }));
  }

  getRelativeRow = (offset: number) => {
    const index = this.index + offset;
    
    if (index < 0 || index >= this.board.rows.length) {
      return null;
    }
    return this.board.rows[index];
  }

  getRowBelow = () => {
    if (this.index >= this.board.size.rows-1) {
      return null;
    }
    return this.board.rows[this.index+1];
  }

  getRowAbove = () => {
    if (this.index <= 0) {
      return null;
    }
    return this.board.rows[this.index-1];
  }

  getFigureAt = (col: number) => {
    if (col >= this.cells.length) {
      return null;
    }
    return this.cells[col].figure;
  }

  fillWithFigures = (color: GameColor) => {
    const { board } = this;
    const figures = color === GameColor.Black ? initialFigures.reverse() : initialFigures;

    this.cells = this.cells.map((_, i) => ({
      figure: Figure.create(figures[i], {
        color,
        board,
        row: this,
        position: {
          row: this.index,
          col: i,
        },
      }),
    }));
  }

  fillWithPawns = (color: GameColor) => {
    const { board } = this;

    this.cells = this.cells.map((_, i) => ({
      figure: Figure.create(FigureType.Pawn, {
        color,
        board,
        row: this,
        position: {
          row: this.index,
          col: i,
        }
      })
    }));
  }
}