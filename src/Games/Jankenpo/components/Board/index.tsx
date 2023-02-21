import React, { useState, useCallback } from 'react'

import { JankenpoGameStateType } from '../../model/JankenpoGameState'
import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import Option from '../Move'

import { Container } from './styles'

const Board: React.FC = () => {
    const [result, setResult] = useState<JankenpoGameStateType>();
    const [move, setMove] = useState<JankenpoMoveType>();
    
    const onMoveClick = useCallback((
        jankenpoGameState: JankenpoGameStateType,
        selectedMove: JankenpoMoveType
    ) => {
        setResult(jankenpoGameState);
        setMove(selectedMove)
    }, [])
    
    return (
        <div id="Main">
            <span>Result: {result}</span>
            <Container>
                <Option move={JankenpoMove.GU} onClick={onMoveClick} isSelected={move === JankenpoMove.GU} />
                <Option move={JankenpoMove.CHOKI} onClick={onMoveClick}  isSelected={move === JankenpoMove.CHOKI} />
                <Option move={JankenpoMove.PA} onClick={onMoveClick}  isSelected={move === JankenpoMove.PA} />
            </Container>
        </div>
    )
}

export default Board