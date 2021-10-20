import React from 'react'
import {Container} from './styles/container.styled'
import {Flex} from './styles/Flex.styled'

function Footer() {
    return (
        <div>
            <Container>
                <img src='./images/logo_white.svg' alt="" />

                <Flex>
                    <ul>
                        <li>
                            This is a little bit of text. Nothing to see here, just some text.
                        </li>
                        <li>
                            1-234-567-8910
                        </li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                </Flex>
            </Container> 
        </div>
    )
}

export default Footer
