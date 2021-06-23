import styled from "styled-components";
import { Fragment, React } from "react";
import {Link} from 'react-router-dom';
import '../App.css';



const StyledButton = styled.button`
    background: darkgray;
    border-radius: 4px;
    
    border: none;
    font-size: 1.3em;
    cursor: pointer;

`;

const MyStyle = {
    color: 'black',
    textDecoration: 'none', 

}

const ButtonLink =  (props) => {
    return (
        <Fragment>
            <StyledButton><Link to={props.to} style={MyStyle}>{props.title}</Link></StyledButton>
        </Fragment>
    )
}


export default ButtonLink;