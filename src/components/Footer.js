import styled from "styled-components";
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export default function Footer() {
    const percentage = 20;
    return (
        // <Baseboard>
        //     <HabitsLink to={"/habitos"}>Hábitos</HabitsLink>
        //     <TodayButton><ParagraphLink to={"/hoje"}>Hoje</ParagraphLink></TodayButton>
        //     <HistoricLink to={"/historico"}>Histórico</HistoricLink>
        // </Baseboard>
        // <Baseboard>
        //     <HabitsLink to={"/habitos"}>Hábitos</HabitsLink>

        //     <TodayButton>
        //         <CircularProgressbarWithChildren value={60}>
        //             <ParagraphLink to={"/hoje"}>Hoje</ParagraphLink>
        //         </CircularProgressbarWithChildren>
        //     </TodayButton>

        //     <HistoricLink to={"/historico"}>Histórico</HistoricLink>
        // </Baseboard>

        <Baseboard>
            <HabitsLink to={"/habitos"}>Hábitos</HabitsLink>
            {/* <TodayButton> */}
            {/* <ButtonProgress value={46}>
                    <ParagraphLink to={"/hoje"}>Hoje</ParagraphLink>
                </ButtonProgress> */}
            {/* </TodayButton> */}

            <ButtonProgress
                value={percentage}
                // text={<ParagraphLink to={"/hoje"}>Hoje</ParagraphLink>}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                })}
            >
                <ParagraphLink to={"/hoje"}>Hoje</ParagraphLink>
            </ButtonProgress>

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
// const TodayButton = styled.button`
//    width:25%;
//     height:12vh;
//     border-radius:50%;
//     position:fixed;
//     top:85%;
//     border:none; 
//     background-color: #52B6FF;
//      background: blue;
//     margin-bottom:5%;
//     font-size: 16px;
//     color:#FFFFFF;
// `
const ParagraphLink = styled(Link)`
 font-size: 16px;
 color:#FFFFFF;
 /* color:blue; */
text-decoration: none;
font-family: 'Lexend Deca', sans-serif;
position:fixed;
left: 45%;
top:89.5%;
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