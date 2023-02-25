import { useState } from 'react';
import './App.css';
import { GameName, GameState, WinnerState } from './games/model/interface';
import JankenpoBoard from './games/jankenpo/components/Board'
import useGame from './games/hooks/useGame';
import { JankenpoMove, JankenpoMoveType } from './games/jankenpo/model/JankenpoMove';
import { JankenpoGameState } from './games/jankenpo/model/JankenpoGameState';

const LoadingState = {
  NONE: 'NONE',
  LOADING: 'LOADING',
  LOADED: 'LOADED'
} as const;
type LoadingStateType = ConstantValues<typeof LoadingState>;

function App() {
  const { initGame, runTurn, informGameStateToIAn, getWinner } = useGame();
  const [loadingState, setLoadingState] = useState<LoadingStateType>(LoadingState.LOADING);
  const [gameState, setGameState] = useState<JankenpoGameState>({
    playerMove: [JankenpoMove.NONE, JankenpoMove.NONE]
  });

  const inputCallBack = (playerInput: JankenpoMoveType[]) => {
    setGameState(runTurn([...playerInput]));
    informGameStateToIAn(gameState);
  }

  loadingState === LoadingState.LOADING && initGame(GameName.JANKENPO).then(() => {
    setLoadingState(LoadingState.LOADED);
  });
  return (
    loadingState === LoadingState.LOADED ?
      <JankenpoBoard
        handleMoveClickCallback={inputCallBack}
        handleResetGame={() => {}}
        result={getWinner(gameState)}
        gameState={gameState}
      />
      : <span>LOADING</span>
  )
}

export default App;
