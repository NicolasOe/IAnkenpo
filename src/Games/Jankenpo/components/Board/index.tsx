import React, { useState, useCallback } from 'react'
import { Button } from '@chakra-ui/react'
import useJankenpo from '../../hooks/useJankenpo'

import { JankenpoGameStateType } from '../../model/JankenpoGameState'
import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import Move from '../Move'
import Result from '../Result'

import { Container, Moves } from './styles'

const Board: React.FC = () => {
    const [gameState, setGameState] = useState<JankenpoGameStateType>({p1Move: JankenpoMove.NONE, p2Move: JankenpoMove.NONE});
    const { runTurn, winnerCheck } = useJankenpo();
    const handleMoveClick = useCallback((
        selectedMove: JankenpoMoveType
    ) => {
        const jankenpoGameState = runTurn(selectedMove);
        setGameState(jankenpoGameState);
    }, []) 
        
    const handleReset = useCallback(() => {
        setGameState({p1Move: JankenpoMove.NONE, p2Move: JankenpoMove.NONE})
    }, []) 

    return (
        <Container>
            <Result result={winnerCheck(gameState)} p1Move={gameState.p1Move} p2Move={gameState.p2Move}/>
            <Moves>
                <Move move={JankenpoMove.GU} onClick={handleMoveClick} isSelected={gameState.p1Move === JankenpoMove.GU} />
                <Move move={JankenpoMove.CHOKI} onClick={handleMoveClick}  isSelected={gameState.p1Move === JankenpoMove.CHOKI} />
                <Move move={JankenpoMove.PA} onClick={handleMoveClick}  isSelected={gameState.p1Move === JankenpoMove.PA} />
            </Moves>
            <Button colorScheme='blue' onClick={handleReset}>Reset Game</Button>
        </Container>
    )
}

export default Board