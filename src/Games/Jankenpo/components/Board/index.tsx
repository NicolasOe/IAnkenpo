import React, { useEffect, useState } from 'react'

import useJankenpo from '../../hooks/useJankenpo'
import { JankenpoGameState, JankenpoGameStateType } from '../../model/JankenpoGameState'
import { JankenpoMove } from '../../model/JankenpoMove'

import Option from '../Option'

import { Container } from './styles'

const Board: React.FC = () => {
    const [result, setResult] = useState<JankenpoGameStateType>();
    const onOptionClickCallback = (jankenpoGameState: JankenpoGameStateType) => {
        setResult(jankenpoGameState);
    }
    return (
        <div id="Main">
            <span>Result: {result}</span>
            <Container>
                <Option option={JankenpoMove.GU} onClickCallback={onOptionClickCallback} />
                <Option option={JankenpoMove.CHOKI} onClickCallback={onOptionClickCallback} />
                <Option option={JankenpoMove.PA} onClickCallback={onOptionClickCallback} />
            </Container>
        </div>
    )
}

export default Board