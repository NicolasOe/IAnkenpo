import React from 'react'

import useJankenpo from '../../hooks/useJankenpo'
import { Option as OptionName } from '../../contants/options'

import Option from '../Option'

import { Container } from './styles'

const Board: React.FC = () => {
    const {  } = useJankenpo()

    return (
        <Container>
            <Option option={OptionName.GU} />
            <Option option={OptionName.CHOKI} />
            <Option option={OptionName.PA} />
        </Container>)
}

export default Board