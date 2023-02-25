import { WinnerStateType } from "../../model/interface";
import { JankenpoGameState } from "./JankenpoGameState";
import { JankenpoMoveType } from "./JankenpoMove";

export interface JankenpoHook {
    runTurn: (playerMove: JankenpoMoveType[]) => JankenpoGameState,
    winnerCheck: (gameState: JankenpoGameState) => WinnerStateType,
    init: () => JankenpoGameState
}