import React, { useCallback } from 'react'
import { Button } from '@chakra-ui/react'

import { JankenpoMove, JankenpoMoveType } from '../../model/JankenpoMove'

import { Container} from './styles'

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
    move: JankenpoMoveType,
    onClick: (jankenpoGameState: JankenpoGameStateType) => void
}

const Move: React.FC<MoveProps> = ({ move, onClick }) => {
    const { runTurn } = useJankenpo();

    const handleClick = useCallback(() => {
        const result = runTurn(JankenpoMove[move])
        onClick(result)
    },[move, onClick, runTurn])

    return (
        <Container>
            <img src={moveImg[move]} alt={move} />
            <Button
                mt={6}
                colorScheme='teal'
                size='lg'
                onClick={handleClick}
            >
                {move}
            </Button>
        </Container>
    )
}

export default Move
