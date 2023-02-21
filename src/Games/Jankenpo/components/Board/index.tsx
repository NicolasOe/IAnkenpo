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
    const [move, setMove] = useState<JankenpoMoveType | null>();
    const { winnerCheck } = useJankenpo();
    const handleMoveClick = useCallback((
        jankenpoGameState: JankenpoGameStateType,
        selectedMove: JankenpoMoveType
    ) => {
        setGameState(jankenpoGameState);
        setMove(selectedMove)
    }, []) 
        
    const handleReset = useCallback(() => {
        setGameState({p1Move: JankenpoMove.NONE, p2Move: JankenpoMove.NONE})
        setMove(null)
    }, []) 

    return (
        <Container>
            <Result result={winnerCheck(gameState)} p1Move={move} p2Move={JankenpoMove.CHOKI}/>
            <Moves>
                <Move move={JankenpoMove.GU} onClick={handleMoveClick} isSelected={move === JankenpoMove.GU} />
                <Move move={JankenpoMove.CHOKI} onClick={handleMoveClick}  isSelected={move === JankenpoMove.CHOKI} />
                <Move move={JankenpoMove.PA} onClick={handleMoveClick}  isSelected={move === JankenpoMove.PA} />
            </Moves>
            <Button colorScheme='blue' onClick={handleReset}>Reset Game</Button>
        </Container>
    )
}

export default Board