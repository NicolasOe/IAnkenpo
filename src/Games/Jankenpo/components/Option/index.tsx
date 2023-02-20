import React from 'react'
import { Text, Button } from '@chakra-ui/react'

import { Option as OptionName, OptionType } from '../../contants/options'

import { Container} from './styles'

import rockImg from '../assets/rock.png'
import paperImg from '../assets/paper.png'
import scissorsImg from '../assets/scissors.png'

const optionImg = {
    'gu': rockImg,
    'choki': scissorsImg,
    'pa': paperImg,
}

interface OptionProps {
    option: OptionType
}

const Option: React.FC<OptionProps> = ({ option }) => {
    return (
        <Container>
            <img src={optionImg[option]} alt='' />
            <Button mt={6} colorScheme='teal' size='lg'>{option}</Button>
        </Container>
    )
}

export default Option
