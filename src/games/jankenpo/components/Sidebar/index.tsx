import React from 'react'
import { Button, Flex } from '@chakra-ui/react'


import { Container } from './styles'


interface SidebarProps {
    points: number[][]
}
const Sidebar: React.FC<SidebarProps> = ({ points }) => {
    return (
        <Container role='aside'>
            {points.map((point) => (
                <Flex m= '0.5rem'>
                    {point.map((result, index) => {
                        const player = index < 2 ? `P${index + 1}` : 'D'
                        
                        return (
                            <Flex m= '0.5rem'>
                                {`${player}: ${result}`}
                            </Flex>)
                        }
                    )}
                </Flex>
            ))}
        </Container>
    )
}

export default Sidebar