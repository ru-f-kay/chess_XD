import React from 'react';
import { usePlayer } from '../../store/player';


export const GamePanel = () => {
  const color = usePlayer(state => state.color);
  const isMyTurn = true; // TODO: make logic

  return (
    <div>
      <p>Your color: {color}</p>
      <p>{isMyTurn ? 
          <span style={{ fontWeight: 'bold' }}>Your turn</span>
          :
          'Opponents turn'
        }
      </p>
    </div>
  )
}
