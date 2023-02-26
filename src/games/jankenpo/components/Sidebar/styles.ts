import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  flex-direction: column-reverse;
  background: black;
  min-height: 100vh;
  max-height: 100vh;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  border-right: 1px solid white;
  width: 100%;
  padding: 5rem;
  overflow: scroll;
`
