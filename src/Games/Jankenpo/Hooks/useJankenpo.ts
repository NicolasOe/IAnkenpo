import { JankenpoGameState, JankenpoGameStateType } from "../model/JankenpoGameState";
import { JankenpoHook } from "../model/JankenpoHook";
import { JankenpoMove, JankenpoMoveType } from "../model/JankenpoMove";

const playerMoves: JankenpoMoveType[] = [];

// Temporary function, to insert IA
const runIAnMove = (): JankenpoMoveType => {
    return JankenpoMove.CHOKI;
}

const useJankenpo = (): JankenpoHook  => {
    function validateWin(winnerCandidateMove: JankenpoMoveType, loserCandidateMove: JankenpoMoveType): JankenpoGameStateType {
        if (winnerCandidateMove !== loserCandidateMove) {
            
        }
        return JankenpoGameState.DRAW
    }
    function winnerCheck(p1Move: JankenpoMoveType, p2Move: JankenpoMoveType): JankenpoGameStateType {
        if (validateWin(p1Move, p2Move)) {
            return JankenpoGameState.P1WIN
        }
        if (validateWin(p2Move, p1Move)) {
            return JankenpoGameState.P2WIN
        }
        return JankenpoGameState.DRAW
    }
    const imAlive = () => {
        console.log("Im Alive!");
    }
    const runTurn = (playerMove: JankenpoMoveType) => { 
        return winnerCheck(playerMove, runIAnMove());
    }

    return { runTurn, imAlive }
}

export default (useJankenpo);