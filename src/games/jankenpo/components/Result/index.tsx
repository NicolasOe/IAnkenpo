import React from 'react'
import { Text } from '@chakra-ui/react'

import { JankenpoMoveType } from '../../model/JankenpoMove'

import { Container, Move } from './styles'

import { moveImg } from '../../assets/JankenpoMoveImg'

interface ResultProps {
    result?: string
    p1Move?: JankenpoMoveType | null
    p2Move?: JankenpoMoveType | null
}

const Result: React.FC<ResultProps> = ({ result, p1Move, p2Move }) => {
    const imgP1 = p1Move ? moveImg[p1Move] : moveImg.undefined
    const imgP2 = p2Move ? moveImg[p2Move] : moveImg.undefined

    return (
        <Container>
            <Move result={result || ''} player='p1win'>
                <img width='40%' src={imgP1} alt={p1Move || 'waiting for player 1'} />
                <Text fontSize='2xl' color='black'>Player 1</Text>
            </Move>
                <Text fontSize='6xl' color='white'>vs</Text>
            <Move result={result || ''} player='p2win'>
                <img width='40%' src={imgP2} alt={p2Move || 'waiting for player 2'} />
                <Text fontSize='2xl' color='black'>Player 2</Text>
            </Move>
        </Container>
    )
}

export default Result
