import { JankenpoGameStateEnum } from "../model/JankenpoGameStateEnum";
import { JankenpoHook } from "../model/JankenpoHook";
import { JankenpoMove } from "../model/JankenpoMove";

const playerMoves: JankenpoMove[] = [];

// Temporary function, to insert IA
const runIAnMove = (): JankenpoMove => {
    return JankenpoMove.CHOKI;
}

const useJankenpo = (): JankenpoHook  => {
    function validateWin(winnerCandidateMove: JankenpoMove, loserCandidateMove: JankenpoMove) {
        return (winnerCandidateMove + 1) % 3 === loserCandidateMove;
    }
    function winnerCheck(p1Move: JankenpoMove, p2Move: JankenpoMove): JankenpoGameStateEnum {
        if (validateWin(p1Move, p2Move)) {
            return JankenpoGameStateEnum.P1WIN
        }
        if (validateWin(p2Move, p1Move)) {
            return JankenpoGameStateEnum.P2WIN
        }
        return JankenpoGameStateEnum.DRAW
    }
    const imAlive = () => {
        console.log("Im Alive!");
    }
    const runTurn = (playerMove: JankenpoMove) => { 
        return winnerCheck(playerMove, runIAnMove());
    }

    return { runTurn, imAlive }
}

export default (useJankenpo);