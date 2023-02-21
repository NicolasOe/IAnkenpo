import React, { useCallback } from 'react'
import { Text } from '@chakra-ui/react'

import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import { Container, ClickableArea } from './styles'

import rockImg from '../../assets/rock.png'
import paperImg from '../../assets/paper.png'
import scissorsImg from '../../assets/scissors.png'
import useJankenpo from '../../hooks/useJankenpo'
import { JankenpoGameStateType } from '../../model/JankenpoGameState'

const moveImg = {
    [JankenpoMove.GU]: rockImg,
    [JankenpoMove.CHOKI]: scissorsImg,
    [JankenpoMove.PA]: paperImg,
}

interface MoveProps {
    move: JankenpoMoveType
    isSelected: boolean
    onClick: (
        jankenpoGameState: JankenpoGameStateType,
        selectedMove: JankenpoMoveType
    ) => void
}

const Move: React.FC<MoveProps> = ({ move, isSelected, onClick }) => {
    const { runTurn } = useJankenpo();

    const handleClick = useCallback(() => {
        const result = runTurn(JankenpoMove[move])
        onClick(result, move)
    },[move, onClick, runTurn])

    return (
        <Container selected={isSelected}>
            <ClickableArea onClick={handleClick} h='100%' >
                <img src={moveImg[move]} alt={move} />
                <Text mt={6} color='cyan.800'>{move}</Text>
            </ClickableArea>
        </Container>
    )
}

export default Move
