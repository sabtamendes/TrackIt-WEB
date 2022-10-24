import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressContext from "../../contexts/ProgressContext";
import { useContext, useEffect } from "react";

export default function Footer() {
    const {
        progress
    } = useContext(ProgressContext);


    return (

        <Baseboard>
            <Link to={"/habitos"} data-identifier="habit-page-action">Hábitos</Link>
            <Link to={"/hoje"}>
                <ButtonProgress>
                    <CircularProgressbar
                        value={progress}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52b6ff",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "transparent",
                        })}
                    />
                </ButtonProgress>
            </Link>
            <Link to={"/historico"} data-identifier="historic-page-action">Histórico</Link>
        </Baseboard >
    )
}
const Baseboard = styled.div`
width: 100%;
height: 70px;
position: fixed;
z-index: 2;
bottom:0;
right:0;
left:0;
display:flex;
justify-content: space-between;
align-items:center;
background-color: #ffffff;
padding: 0 30px 0 38px;
a{
    text-decoration: none;
    font-size:18px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52b6ff;
}
`
const ButtonProgress = styled.div`
position:absolute;
right: 146px;
bottom: 15px;
border-radius: 50px;
width:86px;
height:86px;
`
