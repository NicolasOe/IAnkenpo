import { GameHook, GameMove, GameName } from "../model/interface"

const useGame = ()  => {
    let gameHookImport: {
        default: () => GameHook;
    }
    let gameHook: GameHook;
    const initGame = async (gameName: GameName) => {
        try {
            let casedGameName = gameName[0].toUpperCase() + gameName.slice(1, gameName.length);
            gameHookImport = await import(`../${gameName}/hooks/use${casedGameName}`);
            gameHook = gameHookImport.default();
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

    const runTurn = (p1Move: GameMove, p2Move?: GameMove) => {
        gameHook.runTurn(p1Move, p2Move);
    }
    
    return { initGame, runTurn }
}

export default (useGame);