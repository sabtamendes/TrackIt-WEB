import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/images/image.jpg"
export default function Login() {
    return (
        <Container>
            <img src={Logo} alt="texto alternativo"/>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <button>Entrar</button>
            <StyledLink to={"/cadastro"}>Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 20vh;
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
    padding: 15px 118px;
    font-weight:600;
    font-size: 15px;
    color: #FFFFFF;
    background-color:#52B6FF;
    border-radius: 5px;
    border:none;
}
img{
   margin-left: 24px;
}
`
const StyledLink = styled(Link)`
    margin-top:5%;
    margin-left:5%;
    font-size:14px;
    color: #52B6FF;
`
