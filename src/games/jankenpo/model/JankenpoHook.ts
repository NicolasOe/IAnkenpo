import { WinnerStateType } from "../../model/interface";
import { JankenpoGameStateType } from "./JankenpoGameState";
import { JankenpoMoveType } from "./JankenpoMove";

export interface JankenpoHook {
    runTurn: (playerMove: JankenpoMoveType) => JankenpoGameStateType,
    winnerCheck: (gameState: JankenpoGameStateType) => WinnerStateType
}