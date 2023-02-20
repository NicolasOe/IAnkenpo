import React from "react"
import { GameMove, GameName } from "./interface"

interface GameReturn {
    runTurn: (playerMove: GameMove) => void
}

const useGame = ()  => {

    const initGame = async (gameName: GameName) => {
        await import(`./Hooks/use${gameName}`)
    }
    const runTurn = (p1Move: GameMove, p2?: GameMove) => { 
        
    }
    
    return { initGame, runTurn }
}

export default (useGame);