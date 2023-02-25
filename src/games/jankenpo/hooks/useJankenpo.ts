import { WinnerState, WinnerStateType } from "../../model/interface";
import { JankenpoGameState } from "../model/JankenpoGameState";
import { JankenpoHook } from "../model/JankenpoHook";
import { JankenpoMove, JankenpoMoveType } from "../model/JankenpoMove";

const useJankenpo = (
): JankenpoHook  => {
    const points: number[][] = [[0, 0, 0]];
    const init = (): JankenpoGameState => {
        return {
            playerMove: [JankenpoMove.NONE, JankenpoMove.NONE]
        }
    }
    const computePoints = (gameState: JankenpoGameState) => {
        const result = winnerCheck(gameState);
        const updatedPoints = [...points[points.length - 1]];
        
        for (let i = 0; i < 2; i++) {
            (result as string).indexOf(`${i + 1}`) > 0 && updatedPoints[i]++;
        }
        if (result === WinnerState.DRAW) {
            updatedPoints[updatedPoints.length - 1]++;
        }
        points.push(updatedPoints);
        console.log(points);
    }
    const validateWin = (winnerCandidateMove: JankenpoMoveType, loserCandidateMove: JankenpoMoveType) => {
        return (winnerCandidateMove === JankenpoMove.CHOKI && loserCandidateMove === JankenpoMove.PA)
            || (winnerCandidateMove === JankenpoMove.PA && loserCandidateMove === JankenpoMove.GU)
            || (winnerCandidateMove === JankenpoMove.GU && loserCandidateMove === JankenpoMove.CHOKI);
    }

    const winnerCheck = (gameState: JankenpoGameState): WinnerStateType => {
        const { playerMove } = gameState;
        if (playerMove[0] === JankenpoMove.NONE || playerMove[1] === JankenpoMove.NONE) {
            return WinnerState.NONE;
        }
        if (validateWin(playerMove[0], playerMove[1])) {
            return WinnerState.P1WIN
        }
        if (validateWin(playerMove[1], playerMove[0])) {
            return WinnerState.P2WIN
        }
        return WinnerState.DRAW
    }
    
    const runTurn = (playerCurrentMove: JankenpoMoveType[]): JankenpoGameState => {
        const gameState: JankenpoGameState = {
            playerMove: playerCurrentMove
        };
        computePoints(gameState);
        return gameState;
    }

    return { runTurn, winnerCheck, init }
}

export default (useJankenpo);