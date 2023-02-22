import { JankenpoGameStateType } from "../jankenpo/model/JankenpoGameState";
import { JankenpoHook } from "../jankenpo/model/JankenpoHook";
import { JankenpoMoveType } from "../jankenpo/model/JankenpoMove";

interface BaseGameHook {
    runTurn: (p1Move: GameMove, p2Move?: GameMove) => GameState
}

export enum GameName {
    JANKENPO = "jankenpo"
};
export type GameState = JankenpoGameStateType;
export type GameMove = JankenpoMoveType;
export type GameHook = BaseGameHook & (JankenpoHook)


export const WinnerState = {
    P1WIN: "p1win",
    P2WIN: "p2win",
    DRAW: "draw",
    NONE: "none"
} as const
export type WinnerStateType = ConstantValues<typeof WinnerState>