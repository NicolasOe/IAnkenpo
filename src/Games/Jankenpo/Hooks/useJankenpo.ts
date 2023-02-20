import React from "react"

interface JankenpoReturn {
    runTurn: (playerMove: JankenpoMove) => void
}

enum JankenpoMove {
    GU = 0,
    CHOKI = 1,
    PA = 2
}

enum JankenpoGameStateEnum {
    P1WIN = "p1win",
    P2WIN = "p2win",
    DRAW = "draw"
}

// Temporary function, to insert IA
const runIAnMove = (): JankenpoMove => {
    return JankenpoMove.CHOKI;
}

const useJankenpo = (): JankenpoReturn  => {
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

    const runTurn = (playerMove: JankenpoMove) => { 
        return winnerCheck(playerMove, runIAnMove());
    }

    return { runTurn }
}

export default (useJankenpo);