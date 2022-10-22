import NavBar from "../topbar/NavBar";
import styled from "styled-components";
import Footer from "../footer/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { listHabitsToday } from "../../service/Service";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import HabitSituation from "./HabitSituation";
import ProgressContext from "../../contexts/ProgressContext";

export default function Today() {
    const data = dayjs().locale('pt-br').format('dddd, DD/MM');

    const [userHabitsToday, setUserHabitsToday] = useState([]);

    const {
        loginResponse
    } = useContext(UserContext);

    const {
        setProgress
    } = useContext(ProgressContext);

    function showHabitsToday() {
        const config = {
            headers: {
                Authorization: `Bearer ${loginResponse.token}`
            }
        }
        listHabitsToday(config)
            .then(res => {
                setUserHabitsToday(res.data)
            })
    }

    useEffect(showHabitsToday, []);

    const habitsDone = userHabitsToday.filter((habit) => habit.done);
    setProgress(data.length > 0 ? (habitsDone.length / data.length * 100).toFixed(0) : '0')
   
    return (
        <>
            <NavBar />
            <Container>
                <Title>{data}</Title>
                <Subtitle habitsDone={habitsDone}>
                    {console.log(userHabitsToday)}
                    {userHabitsToday.length === 0 ? "Você não possui hábitos para hoje" : habitsDone.length > 0 ? `${(habitsDone.length / userHabitsToday.length * 100).toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</Subtitle>
                {userHabitsToday.length === 0 ? "" : userHabitsToday.map((habit) => {
                    <HabitSituation habit={habit} key={habit.id} showHabitsToday={showHabitsToday} />
                })}
                
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
width:100%;
height:90vh;
margin-top:15%;
padding: 10% 5%;
font-family: 'Lexend Deca', sans-serif;
background-color: #e7e7e7;
`
const Title = styled.h1`
color: #126BA5;
font-size: 25px;
`
const Subtitle = styled.h6`
color: ${({ habitsDone }) => habitsDone.length > 0 ? "#8fc549" : "#BABABA"};
font-size: 15px;
`
