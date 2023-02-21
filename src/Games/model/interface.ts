import { JankenpoHook } from "../jankenpo/model/JankenpoHook";
import { JankenpoMoveType } from "../jankenpo/model/JankenpoMove";

interface BaseGameHook {
    runTurn: (p1Move: GameMove, p2Move?: GameMove) => void,
}

export enum GameName {
    JANKENPO = "jankenpo"
};
export type GameMove = JankenpoMoveType;
export type GameHook = BaseGameHook & (JankenpoHook)