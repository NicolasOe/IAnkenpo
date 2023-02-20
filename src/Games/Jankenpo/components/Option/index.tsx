import React from 'react'
import { Text, Button } from '@chakra-ui/react'

import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import { Container} from './styles'

import rockImg from '../assets/rock.png'
import paperImg from '../assets/paper.png'
import scissorsImg from '../assets/scissors.png'
import useJankenpo from '../../hooks/useJankenpo'
import { JankenpoGameStateType } from '../../model/JankenpoGameState'

const optionImg = {
    'GU': rockImg,
    'CHOKI': scissorsImg,
    'PA': paperImg,
}

interface OptionProps {
    option: JankenpoMoveType,
    onClickCallback: (jankenpoGameState: JankenpoGameStateType) => void
}

const Option: React.FC<OptionProps> = ({ option, onClickCallback }) => {
    const { runTurn } = useJankenpo();
    return (
        <Container>
            <img src={optionImg[option]} alt='' />
            <Button mt={6} colorScheme='teal' size='lg' onClick={() => { onClickCallback(runTurn(JankenpoMove[option])) }}>{option}</Button>
        </Container>
    )
}

export default Option
