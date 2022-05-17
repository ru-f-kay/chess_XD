export enum FigureType {
  King = "K",
  Queen = "Q",
  Rook = "R",
  Bishop = "B",
  Knight = "N",
  Pawn = "P",
}

export type FigureInfo = {
  name: string;
}

export enum PlayerColor {
  Black = 'b',
  White = 'w',
}

export enum CellType {
  Odd = 'odd',
  Even = 'even',
}

export type FigureData = {
  type: FigureType,
  color: PlayerColor,
}

export type CellData = {
  figure?: null | FigureData,
  selected?: boolean,
};

export type Coordinate = `${number}x${number}`;
