import styled from "styled-components";
import React from "react";
import { AuthContext } from "../providers/auth";

export default function NavBar() {
    const { image } = React.useContext(AuthContext);
    return (
        <Header>
            <h1>TrackIt</h1>
            <img src={image} alt="texto alternativo" />
        </Header>
    )
}

const Header = styled.div`
display:flex;
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