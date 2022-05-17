import React from 'react';
import { BOARD_SIZE } from '../../const/board';
import { Cell } from './Cell';


export const Board = () => {
  console.log('Board rerendered');

  return (
    <div style={{ height: 80*BOARD_SIZE.rows, display: 'flex', flexDirection: 'column' }}>
      {Array.from({ length: 8 }).map((_, row) => {
        return (
          <div key={row} style={{ display: 'flex', flexDirection: 'row' }}>
            {Array.from({ length: 8 }).map((_, col) => {
              return <Cell key={`${row}${col}`} row={row} col={col} />
            })}
          </div>
        )
      })}      
    </div>
  );
};
