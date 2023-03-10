import styled from '@emotion/styled'
import { Flex, Button } from '@chakra-ui/react'

export const Container = styled(Flex)<{ selected: boolean }>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  background: white;
  border-radius: 1rem;
  margin: 2px;
  box-shadow: ${({ selected }) => selected ? '0px 0px 1.5rem white' : 'none'} ;

  :hover {
    box-shadow: 0px 0px 1.5rem gray;
  }
`

export const ClickableArea = styled(Button)`
  flex-direction: column;
  background: white;
  width: 100%;
  max-width: min(20vw, 16rem);
  border-radius: 1rem;
  padding: 1rem;
  gap: 1rem;

  :hover {
    background: white;
  }
`
