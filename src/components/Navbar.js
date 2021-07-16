import React, { useState } from 'react'
import styled from 'styled-components';
import { themes } from '../styles/ColorStyles';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Container>
                <LogoIcon />
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                        <MenuLink href="/">Search</MenuLink>
                        <MenuLink href="/">Login</MenuLink>
                        <Button>Join Now</Button>
                    </LinkWrapper>
                </Menu>
            </Container>
        </Nav>

    )
}

const Nav = styled.div`
    display:flex;
    
    position:absolute;
    top:0;
    left: 0;
    right:0;
    z-index:3;
`;
const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    max-width:1000px;
    margin: 0 auto;
    padding: 2rem;

    svg{
        height:1.4rem;
        cursor: pointer;
    }

`;
const Menu = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

@media(max-width: 768px){
    flex-direction:column;
    overflow:hidden;
    border-radius: 1rem;
    margin-top:1rem;
    box-shadow: -4px 8px 15px 1 rgba(0,0,0,0.4);
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    width:100%;
    transition: max-height 0.5s ease-in-out;
}

`;
const LinkWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    padding: 1.5rem 0;
    
    @media(max-width: 768px){
        flex-direction:column;
    }
`;
const MenuLink = styled.a`
        text-decoration: none;
       color: ${themes.gray.main};
       padding: 0.7rem 1.5rem;
       transition: all 0.2s ease-in;
       border-radius: 0.5rem;
       font-weight:500;
       margin: 0 5px;

       &:hover{
           color: ${themes.gray.light};
           background: ${themes.gray.dark}
       }
`;
const Button = styled.button`
    background-color:${themes.secondary.main};
    color:${themes.secondary.darkText};
    padding: 0.7rem 1.5rem;
    box-shadow: 0px 13px 12px -7px ${themes.secondary.dark};
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight:500;
    margin: 0 5px;
    border:none;
    cursor:pointer;
    &:hover{
        background: ${themes.secondary.dark};
        color: ${themes.secondary.lightText};
        transform: translateY(-5px);
    }
    /* @media(max-width;670px){
        
    } */
`;
const Hamburger = styled.div`
    display:none;
    flex-direction:column;
    span{
        height:2px;
        width:24px;
        background: ${themes.secondary.main};
        margin-bottom:4px;
        border-radius:5px;
    }
    @media(max-width:670px){
       display:flex;
       cursor:pointer; 
    }
`;

export default Navbar
