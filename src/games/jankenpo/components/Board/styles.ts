import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  background: black;
  min-height: 100vh;
  color: white;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`

export const Main = styled(Flex)`
  flex-direction: column;
  background: black;
  min-height: 100vh;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 0 5rem;
`

export const Moves = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: min(60vw, 60rem);
`
