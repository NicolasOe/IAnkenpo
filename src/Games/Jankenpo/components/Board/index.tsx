import React, { useState, useCallback } from 'react'

import { JankenpoGameStateType } from '../../model/JankenpoGameState'
import { JankenpoMove } from '../../model/JankenpoMove'

import Option from '../Move'

import { Container } from './styles'

const Board: React.FC = () => {
    const [result, setResult] = useState<JankenpoGameStateType>();
    
    const onMoveClick = useCallback((jankenpoGameState: JankenpoGameStateType) => {
        setResult(jankenpoGameState);
    }, []
    )
    return (
        <div id="Main">
            <span>Result: {result}</span>
            <Container>
                <Option move={JankenpoMove.GU} onClick={onMoveClick} />
                <Option move={JankenpoMove.CHOKI} onClick={onMoveClick} />
                <Option move={JankenpoMove.PA} onClick={onMoveClick} />
            </Container>
        </div>
    )
}

export default Board