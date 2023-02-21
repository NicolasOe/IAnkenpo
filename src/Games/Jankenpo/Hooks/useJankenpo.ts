import { JankenpoGameState, JankenpoGameStateType } from "../model/JankenpoGameState";
import { JankenpoHook } from "../model/JankenpoHook";
import { JankenpoMove, JankenpoMoveType } from "../model/JankenpoMove";

const playerMoves: JankenpoMoveType[] = [];

// Temporary function, to insert IA
const runIAnMove = (): JankenpoMoveType => {
    return JankenpoMove.CHOKI;
}

const useJankenpo = (): JankenpoHook  => {
    const validateWin = (winnerCandidateMove: JankenpoMoveType, loserCandidateMove: JankenpoMoveType): boolean => {
        return (winnerCandidateMove === JankenpoMove.CHOKI && loserCandidateMove === JankenpoMove.PA)
            || (winnerCandidateMove === JankenpoMove.PA && loserCandidateMove === JankenpoMove.GU)
            || (winnerCandidateMove === JankenpoMove.GU && loserCandidateMove === JankenpoMove.CHOKI);
    }

    const winnerCheck = (p1Move: JankenpoMoveType, p2Move: JankenpoMoveType): JankenpoGameStateType => {
        if (validateWin(p1Move, p2Move)) {
            return JankenpoGameState.P1WIN
        }
        if (validateWin(p2Move, p1Move)) {
            return JankenpoGameState.P2WIN
        }
        return JankenpoGameState.DRAW
    }
    
    const runTurn = (playerMove: JankenpoMoveType): JankenpoGameStateType => { 
        return winnerCheck(playerMove, runIAnMove());
    }

    return { runTurn }
}

export default (useJankenpo);