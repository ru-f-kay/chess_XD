import React from 'react';
import { CellType, FigureColor, FigureType } from '../types';
import { Cell } from './Cell';
import { Figure } from './Figure';


export const Board = () => {
  return (
    <div>
      <Figure color={FigureColor.Black} type={FigureType.Queen} />
      <Cell type={CellType.Even} />
      <Cell type={CellType.Odd} />
    </div>
  )
}