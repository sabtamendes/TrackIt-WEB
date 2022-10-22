import styled from "styled-components";
import { Weekdays } from "./Habits";
import { Day } from "./Habits";
import { IoIosTrash } from "react-icons/io";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { deleteHabits } from "../../service/Service";

export default function HabitUser({ habit, weekdays, showHabits }) {
    const {
        id,
        name,
        days
    } = habit;

    const {
        loginResponse
    } = useContext(UserContext);

    const deleteUserHabit = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${loginResponse.token}`
            }
        }
        confirmAlert({
            title: "Confirmação",
            message: "Você tem certeza que quer excluir este hábito?",
            buttons: [
                {
                    label: "Sim",
                    onClick: () => deleteHabits(id, config)
                        .then(res => {
                            showHabits();
                        }).catch(err => {
                            alert("Deu erro! Tente novamente!")
                        })
                }, {
                    label: "Não"
                }
            ]
        })
    }

    return (
        <Habit>
            <h3>{name}</h3>
            <Weekdays>
                <span onClick={deleteUserHabit}>
                    <IoIosTrash size="30px" />
                </span>
                {weekdays.map((weekday, index) => (<Day key={index} selected={days.includes(weekday.id) ? true : false}>{weekday.name}</Day>))}
            </Weekdays>
        </Habit>
    )
}
const Habit = styled.div`
width: 340px;
height: 91px;
background-color: #ffffff;
border-radius: 5px;
padding: 13px 11px 0 17px;
margin-bottom: 10px;
position: relative;
h3{
    font-size:19.98px;
    margin-bottom:8px;
    color:#666666;
}
span{
    position:absolute;
    top:15px;
    right:11px;
}
`