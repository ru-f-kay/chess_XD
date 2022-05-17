import React from 'react';
import { Board } from './components/Board/Board';
import { GamePanel } from './components/GamePanel/GamePanel';

function App() {
  return (
    <div>
      <header>
        <h2>Chess</h2>
        <GamePanel />
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
