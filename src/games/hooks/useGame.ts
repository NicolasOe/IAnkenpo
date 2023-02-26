import { IAnHook } from "../../ian/model/interface";
import { JankenpoGameState } from "../jankenpo/model/JankenpoGameState";
import { GameHook, GameMove, GameName, GameState, WinnerStateType } from "../model/interface"
let gameHook: GameHook;
let ianHook: IAnHook;
let gameState: GameState;

const useGame = ()  => {
    let gameHookImport: {
        default: () => GameHook;
    }
    let ianHookImport: {
        default: (winnerCheck: (gameState: JankenpoGameState) => WinnerStateType) => IAnHook;
    }
    const initGame = async (gameName: GameName) => {
        try {
            let casedGameName = gameName[0].toUpperCase() + gameName.slice(1, gameName.length);
            gameHookImport = await import(`../${gameName}/hooks/use${casedGameName}`);
            gameHook = gameHookImport.default();
            gameState = gameHook.init();
            ianHookImport = await import(`../../ian/${gameName}/useIAn${casedGameName}`);
            ianHook = ianHookImport.default(gameHook.winnerCheck);
        } catch (error) {
            let message = "Unknown error";
            if (error instanceof Error) {
                message = error.message
            } else if (typeof error === "string") {
                message = error;
            }
            throw new Error(`Error initializing game: ${message}`);
        }
    }

    const runTurn = (playerMove: GameMove[]) => {
        gameState = gameHook.runTurn([...playerMove, ianHook.runIAnMove()]);
        return gameState;
    }

    const informGameStateToIAn = (gameState: GameState) => {
        ianHook.informGameStateToIAn(gameState);
    }
    const getGameState = () => {
        return gameState;
    }
    const getWinner = (gameState: GameState) => {
        return gameHook.winnerCheck(gameState);
    }

    return { initGame, runTurn, informGameStateToIAn, getGameState, getWinner, points: gameHook?.points || [[0, 0, 0]] }
}

export default (useGame);