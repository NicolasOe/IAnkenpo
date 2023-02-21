import { JankenpoGameStateType } from "./JankenpoGameState";
import { JankenpoMoveType } from "./JankenpoMove";

export interface JankenpoHook {
    runTurn: (playerMove: JankenpoMoveType) => JankenpoGameStateType,
}