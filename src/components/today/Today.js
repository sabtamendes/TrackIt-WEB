import NavBar from "../topbar/NavBar";
import styled from "styled-components";
import Footer from "../footer/Footer";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { listHabitsToday } from "../../service/Service";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import Situation from "./Situation";
import ProgressContext from "../../contexts/ProgressContext";

export default function Today() {
    const data = dayjs().locale('pt-br').format('dddd, DD/MM');

    const [userHabitsToday, setUserHabitsToday] = useState([]);

    const {
        loginResponse
    } = useContext(UserContext);

    const {
        setProgress, progress
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

    console.log(progress)
    useEffect(() => {

        showHabitsToday()
    }, []);

    const habitsDone = userHabitsToday.filter((habit) => habit.done);
    setProgress(data.length > 0 ? (habitsDone.length / userHabitsToday.length * 100).toFixed(0) : progress)
    console.log(habitsDone.length / userHabitsToday.length * 100)


    return (
        <>
            <NavBar />
            <Container>
                <Title>{data}</Title>

                <Subtitle habitsDone={habitsDone}>
                    {userHabitsToday.length === 0 ? "Nenhum hábito concluído ainda" : habitsDone.length > 0 ? `${(habitsDone.length / userHabitsToday.length * 100).toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
                </Subtitle>

                {console.log(userHabitsToday)}
                {userHabitsToday.map((habit) => (

                    <Situation habit={habit} key={habit.id} showHabitsToday={showHabitsToday} />)
                )}

            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
padding: 98px 18px 0 16px;
font-family: 'Lexend Deca', sans-serif;
background-color: #E5E5E5;
width:100%;
height: 90vh;
`
const Title = styled.h1`
color: #126BA5;
font-size: 25px;
margin-bottom: 48px;
`
const Subtitle = styled.h6`
color: ${({ habitsDone }) => habitsDone.length > 0 ? "#8fc549" : "#BABABA"};
font-size: 15px;
position:absolute;
top: calc(75px + 58px);
margin-bottom: 52px;
`