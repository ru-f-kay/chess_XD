import React from 'react';
import { CELL_COLORS } from '../const/colors';
import { CellType, FigureColor, FigureType } from '../types';
import { Figure } from './Figure';


type Props = {
  type: CellType,
  active?: boolean,
};

export const Cell = ({ type }: Props) => {
  return (
    <div style={{ width: 80, height: 80, background: CELL_COLORS[type] }}>
      <Figure color={FigureColor.Black} type={FigureType.Queen} isMine isMyTurn />
    </div>
  )
}