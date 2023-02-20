import React from 'react'
import { Text, Button } from '@chakra-ui/react'

import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import { Container} from './styles'

import rockImg from '../assets/rock.png'
import paperImg from '../assets/paper.png'
import scissorsImg from '../assets/scissors.png'
import useJankenpo from '../../hooks/useJankenpo'

const optionImg = {
    'GU': rockImg,
    'CHOKI': scissorsImg,
    'PA': paperImg,
}

interface OptionProps {
    option: JankenpoMoveType
}

const Option: React.FC<OptionProps> = ({ option }) => {
    const { runTurn } = useJankenpo();
    return (
        <Container>
            <img src={optionImg[option]} alt='' />
            <Button mt={6} colorScheme='teal' size='lg' onClick={() => { runTurn(JankenpoMove[option]) }}>{option}</Button>
        </Container>
    )
}

export default Option
