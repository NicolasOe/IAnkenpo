import React, { useState } from 'react'
import { Text } from '@chakra-ui/react'

import { JankenpoMoveType } from '../../model/JankenpoMove'

import { Container, Move } from './styles'

import { moveImg, MoveImgType } from '../../assets/JankenpoMoveImg'
import { WinnerState } from '../../../model/interface'

interface ResultProps {
    result?: string
    playerMove?: JankenpoMoveType[] | null
}

const Result: React.FC<ResultProps> = ({ result, playerMove }) => {
    const playImage: MoveImgType[] = [];
    for (let i = 0; i < 2; i++) {
        playImage[i] = playerMove && playerMove[i] ? moveImg[playerMove[i]] : moveImg.undefined;
    }
    return (
        <Container>
            {
                playerMove?.map((move, index) => {
                    return (
                        <>
                            <Move result={result || ''} player={`p${index + 1}win`}>
                                <img width='40%' src={playImage[index]} alt={move || `waiting for player ${index + 1}`} />
                                <Text fontSize='2xl' color='black'>Player 1</Text>
                            </Move>
                            { index === 0 && <Text fontSize='6xl' color='white'>vs</Text> }
                        </>
                    )

                })
            }
        </Container>
    )
}

export default Result
