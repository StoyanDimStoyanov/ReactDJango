import { Component } from "react";
import styled from "styled-components";
import ButtonLink from "../ButtonLink";

const StyledContainer = styled.div`
    background-color: inherit;
    max-width: 1000px;
    margin:5% auto;

`;



const Div = styled.div`
    padding: 10px 30px 50px 30px;
    margin: 10px auto;
    background: lightgray;
    max-width: 1000px;
    border-radius: 3px;
    text-align: left;
`;

const Img = styled.img`
    width: 100%;
    height: 100%
`;

const Container = styled.div`
    width: 50%;
    float: left;
`;

const H1 = styled.h1`
    font-size: 3.5rem;
    margin: 3px 0px
`;

const P = styled.p`
    margin: 3px 0px;
    padding: 5px 0px 20px;
    border-bottom:solid gray;
    box-sizing:border-box;
`;

class Home extends Component {



    render() {
        return (

            <Div>
                <StyledContainer>


                    <Img src="https://activepets.co.za/web/ap-content/uploads/2019/08/Active-pets-dogs-and-cats.png" alt="" />

                    <H1>Welcome to Petstagram</H1>
                    <P>Share your pet photos</P>
                    <Container>
                        <p>Already have an account?</p>
                        <ButtonLink to="Sign in" title="Sign in"></ButtonLink>
                    </Container>
                    <Container>
                        <p>Do not have an account?</p>
                        <ButtonLink to="SignUp" title="Sign up"></ButtonLink>
                    </Container>

                </StyledContainer>
            </Div>


        )
    }
};

export default Home;