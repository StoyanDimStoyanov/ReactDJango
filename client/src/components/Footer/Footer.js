import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
    background-color: rgb(168, 162, 162);
    object-fit: contain;
    margin: 0px;
    height: 84px;
    justify-content: space-between;
    display: flex;
`;



function Footer() {
    return (
        <StyledFooter >
            <p style={{margin: "0px"}}></p>
            <p style={{margin: "0px"}}>Contact:</p>
            <a target='_blank' rel="noreferrer" href="https://github.com/StoyanDimStoyanov/">https://github.com/StoyanDimStoyanov/</a>
        </StyledFooter>
    )
}

export default Footer
