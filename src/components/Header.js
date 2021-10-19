import React from 'react'
import {StyledHeader} from './styles/Header.styled'
import {Container} from './styles/container.styled'
function Header() {
    return (
        <StyledHeader>
            <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt='logo'/>
                <Button>Try it Free</Button>
            </Nav>
            </Container>
        </StyledHeader>
    )
}

export default Header
