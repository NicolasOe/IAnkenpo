import React from 'react';
import './App.css';
import { GameName } from './games/model/interface';
import JankenpoBoard from './games/jankenpo/components/Board'
import useGame from './games/hooks/useGame';
function App() {
  const { initGame } = useGame();
  initGame(GameName.JANKENPO);
  return (
    <JankenpoBoard />
  );
}

export default App;
