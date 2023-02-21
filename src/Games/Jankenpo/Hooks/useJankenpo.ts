import { WinnerState, WinnerStateType } from "../../model/interface";
import { JankenpoGameStateType } from "../model/JankenpoGameState";
import { JankenpoHook } from "../model/JankenpoHook";
import { JankenpoMove, JankenpoMoveType } from "../model/JankenpoMove";

const playerMoves: JankenpoGameStateType[] = [];

const moveToWinAgainst = (move: JankenpoMoveType) => {
    let winnerMove: JankenpoMoveType = JankenpoMove.GU;
    Object.keys(JankenpoMove).forEach((moveCandidate) => {
        const typedMoveCandidate = moveCandidate as JankenpoMoveType;
        if (useJankenpo().winnerCheck({ p1Move: move, p2Move: typedMoveCandidate }) === WinnerState.P2WIN)  {
            winnerMove = typedMoveCandidate;
        }
    });
    return winnerMove;
}
// Temporary function, to insert IA
const runIAnMove = () => {
    let ianMove: JankenpoMoveType = JankenpoMove.CHOKI;
    let frequencyCount: Map<JankenpoMoveType, number> = new Map<JankenpoMoveType, number>();
    for (let i = 0; i < playerMoves.length - 1; i++) {
        if (JSON.stringify(playerMoves[i]) === JSON.stringify(playerMoves[playerMoves.length - 1])) {
            const playerNextMoveWouldBe = playerMoves[i + 1].p1Move;
            frequencyCount.set(playerNextMoveWouldBe, (frequencyCount.get(playerNextMoveWouldBe) || 0) + 1);
        }
    }
    let maxHit = 0;
   frequencyCount.forEach((playHit, key) => {
        if (maxHit < playHit) {
            maxHit = playHit;
            ianMove = moveToWinAgainst(key as JankenpoMoveType);
        }
    });
    return ianMove;
}
// Temporary function, to insert IA
const informGameStateToIAn = (gameState: JankenpoGameStateType) => {
    playerMoves.push({
        p1Move: gameState.p1Move,
        p2Move: gameState.p2Move
    });
    console.log(playerMoves);
}

const useJankenpo = (): JankenpoHook  => {
    const validateWin = (winnerCandidateMove: JankenpoMoveType, loserCandidateMove: JankenpoMoveType) => {
        return (winnerCandidateMove === JankenpoMove.CHOKI && loserCandidateMove === JankenpoMove.PA)
            || (winnerCandidateMove === JankenpoMove.PA && loserCandidateMove === JankenpoMove.GU)
            || (winnerCandidateMove === JankenpoMove.GU && loserCandidateMove === JankenpoMove.CHOKI);
    }

    const winnerCheck = (gameState: JankenpoGameStateType): WinnerStateType => {
        const { p1Move, p2Move } = gameState;
        if (p1Move === JankenpoMove.NONE || p2Move === JankenpoMove.NONE) {
            return WinnerState.NONE;
        }
        if (validateWin(p1Move, p2Move)) {
            return WinnerState.P1WIN
        }
        if (validateWin(p2Move, p1Move)) {
            return WinnerState.P2WIN
        }
        return WinnerState.DRAW
    }
    
    const runTurn = (playerMove: JankenpoMoveType): JankenpoGameStateType => {
        const gameState = {
            p1Move: playerMove,
            p2Move: runIAnMove()
        }
        informGameStateToIAn(gameState);
        return gameState;
    }

    return { runTurn, winnerCheck }
}

export default (useJankenpo);