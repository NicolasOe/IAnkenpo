import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  min-height: 20rem;
  width: min(60vw, 60rem);
`

export const Move = styled(Flex)<{ result: string, player: string }>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  width: 40%;
  height: 14rem;
  border: ${({ result, player }) => result === player 
    ? '5px solid green'
    : ( result === 'draw'
      ? '5px solid yellow'
      : (result === ''
        ? 'none'
        : '5px solid red'))};
  
  ::after{
    content: ${({ result, player }) => result === player 
    ? '"Winner"'
    : ( result === 'draw'
      ? '"Draw"'
      : (result === ''
        ? ''
        : '"Loser"'))};
    color: ${({ result, player }) => result === player 
      ? 'green'
      : ( result === 'draw'
        ? 'yellow'
        : 'red')};
    position: absolute;
    transform: translateY(9rem);
    font-size: 2rem;

  }
`
