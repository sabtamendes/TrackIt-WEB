import styled from "styled-components";
import { IoIosCheckmark } from "react-icons/io";
import { useContext } from "react";
import { habitState } from "../../service/Service";
import UserContext from "../../contexts/UserContext";

export default function HabitSituation({ habit, showHabitsToday }) {

    const { loginResponse } = useContext(UserContext);

    function habitsUser() {
        const config = {
            headers: {
                Authorization: `Bearer ${loginResponse.token}`
            }
        }

        if (habit.done) {
            habitState("uncheck", habit.id, config).then(res => {
                showHabitsToday();
            }).catch(err => {
                console.log(err.response.data)
            })
        } else {
            habitState("check", habit.id, config).then(res => {
                showHabitsToday();
            }).catch(err => {
                console.log(err.response.data)
            })
        }
    }

    return (
        <Card habit={habit}>
            <HabitTitle>{habit.name}</HabitTitle>
            <button>
                <IoIosCheckmark
                    color={"#ffffff"}
                    size="60px"
                    strokeWidth="10px"
                    onClick={habitsUser}
                />
            </button>
            <Records color={habit.currentSequence === habit.highestSequence && habit.done ? "#8fc549" : "#666666"}>
                <p>Sequência atual: <span>{habit.currentSequence !== 1 ? "dias" : "dia"}</span></p>
                <p>Seu recorde: <span>{habit.highestSequence}{habit.highestSequence !== 1 ? "dias" : "dia"}</span></p>
            </Records>
        </Card>
    )
}

const Card = styled.div`
width: 320px;
height:94px;
background-color: #ffffff;
border: 1px solid #e7e7e7;
border-radius:5px;
margin-bottom: 10px;
padding: 13px 12 0 18px;
position:relative;
button{
    width:69px;
    height: 69px;
    background-color: ${({ habit }) => habit.done ? "#8fc549" : "#ebebeb"};
    position:absolute;
    border:none;
    top:13px;
    right:13px;
}
`
export const HabitTitle = styled.h3`
font-size:20px;
margin-bottom:8px;
color: #666666;
padding-top:12px;
padding-left:17px;
`
export const Records = styled.h4`
font-size: 13px;
color: #666666;
padding-left:17px;
span{
    color:${props => props.color}
}
`