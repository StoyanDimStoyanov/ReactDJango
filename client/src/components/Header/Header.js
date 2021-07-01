import { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    background-color: light gray;
    padding: 15px;
    margin-right: 10px;
    text-decoration: none;
    float: left;
    font-size: 1.3rem;
    color: black;
    
`;

export const Block = styled.div`
    & :hover {
            font-size: 1.6rem;
            transition: 0.3s;
            background-color: darkgrey;
        }
`;

const StyledHeader = styled.header`
   display: block;
   height: 50px;
   background-color: lightgray;
   margin-bottom: 10px;
`;

class Header extends Component {

    render() {
        return (
            <StyledHeader>

                <nav>
                    <Block><StyledLink to='/'>Home</StyledLink></Block>
                    <Block><StyledLink to='/SignIn'>Sign in</StyledLink></Block>
                    <Block> <StyledLink to='/SignUp'>Sign Up</StyledLink></Block>
                    <Block><StyledLink to='/pets'>All pets</StyledLink></Block>
                </nav>
            </StyledHeader>
        )
    }
};

export default Header;