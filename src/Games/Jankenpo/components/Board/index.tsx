import React from 'react'

import useJankenpo from '../../hooks/useJankenpo'
import { JankenpoMove } from '../../model/JankenpoMove'

import Option from '../Option'

import { Container } from './styles'

const Board: React.FC = () => {
    return (
        <Container>
            <Option option={JankenpoMove.GU} />
            <Option option={JankenpoMove.CHOKI} />
            <Option option={JankenpoMove.PA} />
        </Container>)
}

export default Board