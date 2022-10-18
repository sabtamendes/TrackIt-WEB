import styled from "styled-components";
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <Container>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <input placeholder="nome"></input>
            <input placeholder="foto"></input>
            <button>Cadastrar</button>
            <StyledLink to={"/"}>Já tem uma conta? Faça login!</StyledLink>
        </Container>
    )
}
const Container = styled.div`
    margin-top: 35vh;
    padding:15%;
input{
   margin-left: -5%;
   margin-bottom: 4%;
   width:38vh;
   padding: 15px; 
   border:1px solid #D4D4D4;
   border-radius: 5px;
   &::placeholder{
    font-family: 'Lexend Deca', sans-serif;
    font-size:15px;
    color:#DBDBDB;
   }
}
button{
    margin-left: -5%;
    margin-bottom:15%;
    width:38vh;
    padding: 15px;
    font-weight:600;
    font-size: 15px;
    color: #FFFFFF;
    background-color:#52B6FF;
    border-radius: 5px;
    border:none;
}
`
const StyledLink = styled(Link)`
    margin-top:5%;
    margin-left:12%;
    font-size:14px;
    color: #52B6FF;
`