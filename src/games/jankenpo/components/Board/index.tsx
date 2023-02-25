import React, { useState, useCallback } from 'react'
import { Button } from '@chakra-ui/react'
import useJankenpo from '../../hooks/useJankenpo'

import { JankenpoGameStateType } from '../../model/JankenpoGameState'
import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import Move from '../Move'
import Result from '../Result'

import { Container, Moves } from './styles'

const Board: React.FC = () => {
    const [gameState, setGameState] = useState<JankenpoGameStateType>({ playerMove:[JankenpoMove.NONE, JankenpoMove.NONE] });
    const { runTurn, winnerCheck } = useJankenpo();
    const handleMoveClick = useCallback((
        selectedMove: JankenpoMoveType
    ) => {
        const jankenpoGameState = runTurn(selectedMove);
        setGameState(jankenpoGameState);
    }, [runTurn]) 
        
    const handleReset = useCallback(() => {
        setGameState({ playerMove:[JankenpoMove.NONE, JankenpoMove.NONE] })
    }, []) 

    return (
        <Container>
            <Result result={winnerCheck(gameState)} playerMove={gameState.playerMove} />
            <Moves>
                <Move move={JankenpoMove.GU} onClick={handleMoveClick} isSelected={gameState.playerMove[0] === JankenpoMove.GU} />
                <Move move={JankenpoMove.CHOKI} onClick={handleMoveClick}  isSelected={gameState.playerMove[0] === JankenpoMove.CHOKI} />
                <Move move={JankenpoMove.PA} onClick={handleMoveClick}  isSelected={gameState.playerMove[0] === JankenpoMove.PA} />
            </Moves>
            <Button colorScheme='blue' onClick={handleReset}>Reset Game</Button>
        </Container>
    )
}

export default Board