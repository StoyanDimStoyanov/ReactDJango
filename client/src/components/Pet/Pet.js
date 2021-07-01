import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Image = styled.img`

        display: inline;
        width: 100%;
        height: 100%;   
`;

const HoverImg = styled.div`
    & :hover{
        opacity: 0.5;
        transition: 0.3s;
    }
`;

const Div = styled.div`

        display: inline;
        width: 15%;
        height: 100%;
`;


function Pet(props) {
    return (
      
        
            <Div style={{ display:'inline', margin:'10px', textAlign:'center',textTransform:'capitalize', cursor:'pointer'}}>
    <Link to={`petdetails/${props.id}`}><HoverImg><Image src={props.image} alt={props.name} /></HoverImg></Link> 
               <p>{props.name}</p>
            </Div>   
    )
}   
export default Pet
