import React, { useCallback } from 'react'
import { Text } from '@chakra-ui/react'

import { JankenpoMoveType } from '../../model/JankenpoMove'

import { Container, ClickableArea } from './styles'

import { moveImg } from '../../assets/JankenpoMoveImg'
import useJankenpo from '../../hooks/useJankenpo'

interface MoveProps {
    move: JankenpoMoveType
    isSelected: boolean
    onClick: (
        selectedMove: JankenpoMoveType
    ) => void
}

const Move: React.FC<MoveProps> = ({ move, isSelected, onClick }) => {
    const { runTurn } = useJankenpo();

    const handleClick = useCallback(() => {
        onClick(move)
    },[move, onClick, runTurn])

    return (
        <Container selected={isSelected}>
            <ClickableArea onClick={handleClick} h='100%' >
                <img src={moveImg[move]} alt={move} />
                <Text fontSize='2xl' color='black'>{move}</Text>
            </ClickableArea>
        </Container>
    )
}

export default Move
