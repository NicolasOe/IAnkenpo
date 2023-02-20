import { JankenpoMoveType } from "./JankenpoMove";

export interface JankenpoHook {
    runTurn: (playerMove: JankenpoMoveType) => void,
    imAlive: () => void
}