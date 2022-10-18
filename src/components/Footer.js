import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <Baseboard>
            <HabitsLink to={"/habitos"}>Hábitos</HabitsLink>
            <TodayButton><ParagraphLink to={"/hoje"}>Hoje</ParagraphLink></TodayButton>
            <HistoricLink to={"/historico"}>Histórico</HistoricLink>
        </Baseboard>
    )
}
const Baseboard = styled.div`
display:flex;
justify-content:center;
width:100%;
height:10%;
font-family: 'Lexend Deca', sans-serif;
position:fixed;
bottom:0;
right:0;
background-color:#FFFFFF;
/* button{
    width:25%;
    height:12vh;
    border-radius:50%;
    position:fixed;
    top:85%;
    border:none;
    background-color: #52B6FF;
    margin-bottom:5%;
    font-size: 16px;
    color:#FFFFFF;
} */
`
const HabitsLink = styled(Link)`
text-decoration:none;
color:#52B6FF;
font-size: 20px;
/* margin:5% 10%; */
margin-right: 30%;
margin-top:5%;
`
const HistoricLink = styled(Link)`
text-decoration:none;
color:#52B6FF;
font-size: 20px;
margin-top:5%;
margin-left: 5%;
`
const TodayButton = styled.button`
   width:25%;
    height:12vh;
    border-radius:50%;
    position:fixed;
    top:85%;
    border:none;
    background-color: #52B6FF;
    margin-bottom:5%;
    font-size: 16px;
    color:#FFFFFF;
`
const ParagraphLink = styled(Link)`
 font-size: 16px;
 color:#FFFFFF;
text-decoration: none;
font-family: 'Lexend Deca', sans-serif;
`