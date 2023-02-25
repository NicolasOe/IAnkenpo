import { GameMove, GameName, GameState } from "../../games/model/interface"
import { IAnJankenpoHook } from "../jankenpo/ianJankenpoHook"


interface BaseIAnHook {
    runIAnMove: (gameState: GameState) => GameMove,
    informGameStateToIAn: (gameState: GameState) => void
}

export type IAnHook = BaseIAnHook & (IAnJankenpoHook)