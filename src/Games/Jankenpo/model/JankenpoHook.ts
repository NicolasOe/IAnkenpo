import { JankenpoMove } from "./JankenpoMove";

export interface JankenpoHook {
    runTurn: (playerMove: JankenpoMove) => void,
    imAlive: () => void
}