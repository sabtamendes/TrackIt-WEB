import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function NavBar() {
    const {
        loginResponse
    } = useContext(UserContext);

    return (
        <Header>
            <h1>TrackIt</h1>
            <img data-identifier="avatar" src={loginResponse.image} alt="Imagem de perfil" />
        </Header>
    )
}

const Header = styled.div`
position:fixed;
top:0;
right:0;
display:flex;
z-index:2;
justify-content: space-between;
width:100%;
height:65px;
background-color: #126BA5;
h1{
color: #ffffff;
margin:4%;
font-size: 38px;
font-family: 'Playball', cursive;
}
img{
    border-radius:50%;
    margin:2%;
    width:6vh;
    height:6vh;
}
`