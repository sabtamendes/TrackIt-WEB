import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressContext from "../../contexts/ProgressContext";
import { useContext } from "react";

export default function Footer() {
    const {
        progress
    } = useContext(ProgressContext);

    return (

        <Baseboard>
            <HabitsLink to={"/habitos"}>Hábitos</HabitsLink>

            <ButtonProgress
                value={progress}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#ffffff",
                    pathColor: "#ffffff",
                    trailColor: "transparent",
                })}
            >
                <ParagraphLink to={"/hoje"}>Hoje</ParagraphLink>
            </ButtonProgress>

            <HistoricLink to={"/historico"}>Histórico</HistoricLink>
        </Baseboard >
    )
}
const Baseboard = styled.div`
display:flex;
justify-content:center;
width:100%;
height:10%;
font-family: 'Lexend Deca', sans-serif;
position:fixed;
z-index: 1;
bottom:0;
right:0;
background-color:#FFFFFF;
`
const HabitsLink = styled(Link)`
text-decoration:none;
color:#52B6FF;
font-size: 20px;
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
const ParagraphLink = styled(Link)`
 font-size: 16px;
 color:#FFFFFF;
text-decoration: none;
font-family: 'Lexend Deca', sans-serif;
position:fixed;
left: 45%;
top:90%;
`
const ButtonProgress = styled(CircularProgressbarWithChildren)`
    background-color: #52B6FF; 
    position:fixed;
    top:85%;
    left: 135px;
    width:25vw;
    background-color: #52B6FF;
    border-radius:50%;
    border:none;
`