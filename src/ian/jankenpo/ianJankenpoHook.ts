import { JankenpoGameState } from "../../games/jankenpo/model/JankenpoGameState";
import { JankenpoMoveType } from "../../games/jankenpo/model/JankenpoMove";

export interface IAnJankenpoHook {
    runIAnMove: () => JankenpoMoveType,
    informGameStateToIAn: (gameState: JankenpoGameState) => void
}