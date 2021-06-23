import { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    background-color: light gray;
    padding: 15px;
    text-decoration: none;
    float: left;
    
`;
const StyledHeader = styled.header`
   display: block;
   height: 50px;
   background-color: lightgray;
`;

class Header extends Component {

    render() {
        return (
            <StyledHeader>

                <nav>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/SignIn'>Sign in</StyledLink>
                    <StyledLink to='/SignUp'>Sign Up</StyledLink>
                </nav>
            </StyledHeader>
        )
    }
};

export default Header;