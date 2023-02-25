import { JankenpoGameState } from "../../games/jankenpo/model/JankenpoGameState";
import { JankenpoMove, JankenpoMoveType } from "../../games/jankenpo/model/JankenpoMove";
import { WinnerState, WinnerStateType } from "../../games/model/interface";
import { IAnJankenpoHook } from "./ianJankenpoHook";

const useIAnJankenpo = (
    winnerCheck: (gameState: JankenpoGameState) => WinnerStateType
): IAnJankenpoHook => {
    const gameStateTrack: JankenpoGameState[] = [];
    const moveToWinAgainst = (move: JankenpoMoveType) => {
        let winnerMove: JankenpoMoveType = JankenpoMove.GU;
        Object.keys(JankenpoMove).forEach((moveCandidate) => {
            const typedMoveCandidate = moveCandidate as JankenpoMoveType;
            if (winnerCheck({ playerMove: [move, typedMoveCandidate] }) === WinnerState.P2WIN)  {
                winnerMove = typedMoveCandidate;
            }
        });
        return winnerMove;
    }
    // Temporary function, to insert IA
    const runIAnMove = () => {
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
    const informGameStateToIAn = (gameState: JankenpoGameState) => {
        gameStateTrack.push({
            playerMove: gameState.playerMove
        });
        console.log(gameStateTrack);
    }

    return { runIAnMove, informGameStateToIAn };
}
export default (useIAnJankenpo);