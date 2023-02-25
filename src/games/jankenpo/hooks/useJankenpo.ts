import { useState } from "react";
import { WinnerState, WinnerStateType } from "../../model/interface";
import { JankenpoGameStateType } from "../model/JankenpoGameState";
import { JankenpoHook } from "../model/JankenpoHook";
import { JankenpoMove, JankenpoMoveType } from "../model/JankenpoMove";

const gameStateTrack: JankenpoGameStateType[] = [];
let points: number[] = [0, 0, 0];

const moveToWinAgainst = (move: JankenpoMoveType) => {
    let winnerMove: JankenpoMoveType = JankenpoMove.GU;
    Object.keys(JankenpoMove).forEach((moveCandidate) => {
        const typedMoveCandidate = moveCandidate as JankenpoMoveType;
        if (useJankenpo().winnerCheck({ playerMove: [move, typedMoveCandidate] }) === WinnerState.P2WIN)  {
            winnerMove = typedMoveCandidate;
        }
    });
    return winnerMove;
}
// Temporary function, to insert IA
export const runIAnMove = () => {
    let ianMove: JankenpoMoveType = JankenpoMove.CHOKI;
    let frequencyCount: Map<JankenpoMoveType, number> = new Map<JankenpoMoveType, number>();
    for (let i = 0; i < gameStateTrack.length - 1; i++) {
        if (JSON.stringify(gameStateTrack[i]) === JSON.stringify(gameStateTrack[gameStateTrack.length - 1])) {
            const playerNextMoveWouldBe = gameStateTrack[i + 1].playerMove[0];
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
export const informGameStateToIAn = (gameState: JankenpoGameStateType) => {
    gameStateTrack.push({
        playerMove: gameState.playerMove
    });
    console.log(gameStateTrack);
}

const useJankenpo = (): JankenpoHook  => {
    
    const computePoints = (gameState: JankenpoGameStateType) => {
        const result = winnerCheck(gameState);
        const updatedPoints = points;
        
        for (let i = 0; i < 2; i++) {
            (result as string).indexOf(`${i + 1}`) > 0 && updatedPoints[i]++;
        }
        if (result === WinnerState.DRAW) {
            updatedPoints[updatedPoints.length - 1]++;
        }
        points = updatedPoints;
        console.log(points);
    }
    const validateWin = (winnerCandidateMove: JankenpoMoveType, loserCandidateMove: JankenpoMoveType) => {
        return (winnerCandidateMove === JankenpoMove.CHOKI && loserCandidateMove === JankenpoMove.PA)
            || (winnerCandidateMove === JankenpoMove.PA && loserCandidateMove === JankenpoMove.GU)
            || (winnerCandidateMove === JankenpoMove.GU && loserCandidateMove === JankenpoMove.CHOKI);
    }

    const winnerCheck = (gameState: JankenpoGameStateType): WinnerStateType => {
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
    
    const runTurn = (playerCurrentMove: JankenpoMoveType): JankenpoGameStateType => {
        const gameState: JankenpoGameStateType = {
            playerMove: [playerCurrentMove, runIAnMove()]
        };
        informGameStateToIAn(gameState);
        computePoints(gameState);
        return gameState;
    }

    return { runTurn, winnerCheck }
}

export default (useJankenpo);