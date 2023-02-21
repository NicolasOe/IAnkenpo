import styled from '@emotion/styled'
import { Flex, Button } from '@chakra-ui/react'

export const Container = styled(Flex)<{ selected: boolean }>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: black;
  background: white;
  opacity: 0.8
  min-height: 20rem;
  border-radius: 1rem;
  margin: 2px;
  border: ${({ selected }) => selected ? '5px solid gray' : 'none'} ;

  :hover {
    border: 5px solid white;
  }
`

export const ClickableArea = styled(Button)`
  flex-direction: column;
  background: white;
  width: 15rem;

  :hover {
    background: white;
  }
`
