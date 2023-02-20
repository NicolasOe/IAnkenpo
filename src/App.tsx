import React from 'react';
import './App.css';
import { GameName } from './games/interface';
import JankenpoBoard from './games/jankenpo/components/Board'
import useGame from './games/useGame';
function App() {
  const { initGame, runTurn } = useGame();
  initGame(GameName.JANKENPO);
  return (
    <JankenpoBoard />
  );
}

export default App;
