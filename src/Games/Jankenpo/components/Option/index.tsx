import React from 'react'
import { Text, Button } from '@chakra-ui/react'

import { OptionsType } from '../../contants/options'

import { Container} from './styles'

interface OptionProps {
    option: OptionsType
}

const Option: React.FC<OptionProps> = ({ option }) => {
    return <Container>
        <Text>{option}</Text>
        <Button>{option}</Button>

    </Container>
}

export default Option
