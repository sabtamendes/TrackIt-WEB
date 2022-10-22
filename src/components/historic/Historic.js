import styled from "styled-components";
import NavBar from "../topbar/NavBar";
import Footer from "../footer/Footer";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Historic() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <NavBar />
            <Container>
                <h1>Historico</h1>
                <p>Em breve você poderá ver o histórico <br></br>dos seus hábitos aqui!</p>
                <Calendar onChange={onChange} value={value} />
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
width:100%;
height:91vh;
background-color:#E5E5E5;
font-family: 'Lexend Deca', sans-serif;
padding: 10% 5%;
h1{
    color:#126BA5;
    font-size:22px;
    margin-bottom:5%;
}
p{
   color:#666666;
   font-size:17px; 
}
`