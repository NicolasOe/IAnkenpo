import React from 'react'
import { Button } from '@chakra-ui/react'
import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import Move from '../Move'
import Result from '../Result'

import { Container, Moves } from './styles'
import { WinnerStateType } from '../../../model/interface'
import { JankenpoGameState } from '../../model/JankenpoGameState'

interface BoardProps {
    handleMoveClickCallback: (playerMove: JankenpoMoveType[]) => void,
    handleResetGame: () => void,
    result: WinnerStateType,
    gameState: JankenpoGameState
}
const Board: React.FC<BoardProps> = ({ handleMoveClickCallback, result, gameState, handleResetGame }) => {
    return (
        <Container>
            <Result result={result} playerMove={gameState.playerMove} />
            <Moves>
                { 
                    Object.keys(JankenpoMove).map((move) => {
                        const typedMove = move as JankenpoMoveType;
                        if (typedMove === JankenpoMove.NONE) {
                            return;
                        }
                        return(
                            <Move
                                move={JankenpoMove[typedMove]}
                                onClick={() => { handleMoveClickCallback([JankenpoMove[typedMove]]) }}
                                isSelected={gameState.playerMove[0] === JankenpoMove[typedMove]}
                            />
                        )
                    })
                }
            </Moves>
            <Button colorScheme='blue' onClick={handleResetGame}>Reset Game</Button>
        </Container>
    )
}

export default Board