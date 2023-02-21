import React, { useState, useCallback } from 'react'
import { Button } from '@chakra-ui/react'

import { JankenpoGameStateType } from '../../model/JankenpoGameState'
import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import Move from '../Move'
import Result from '../Result'

import { Container, Moves } from './styles'

const Board: React.FC = () => {
    const [result, setResult] = useState<JankenpoGameStateType | null>();
    const [move, setMove] = useState<JankenpoMoveType | null>();
    
    const handleMoveClick = useCallback((
        jankenpoGameState: JankenpoGameStateType,
        selectedMove: JankenpoMoveType
    ) => {
        setResult(jankenpoGameState);
        setMove(selectedMove)
    }, []) 
        
    const handleReset = useCallback(() => {
        setResult(null)
        setMove(null)
    }, []) 

    return (
        <Container>
            <Result result={result} p1Move={move} p2Move={JankenpoMove.CHOKI}/>
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