import React from 'react'

import useJankenpo from '../../hooks/useJankenpo'
import { Options } from '../../contants/options'

import Option from '../Option'

import { Container } from './styles'

const Board: React.FC = () => {
    const { runTurn } = useJankenpo()

    return (
        <Container>
            <Option option={Options.GU} />
            <Option option={Options.CHOKI} />
            <Option option={Options.PA} />
        </Container>)
}

export default Board