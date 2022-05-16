import React from 'react';
import { FigureColor, FigureType } from '../types';
import { Figure } from './Figure';


export const Board = () => {
  return (
    <div>
      Board
      <Figure color={FigureColor.Black} type={FigureType.Queen} />
    </div>
  )
}