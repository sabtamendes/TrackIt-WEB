import styled from "styled-components";
import NavBar from "../topbar/NavBar";
import Footer from "../footer/Footer";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { createHabit } from "../../service/Service";
import { listHabits } from "../../service/Service";
import Habit from "./Habit";
import { BeatLoader } from "react-spinners";

export default function Habits() {
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);

    const [habitsArray, setHabitsArray] = useState("");
    const [reset, setReset] = useState(false);

    const [habitoCriado, setHabitoCriado] = useState([]);

    const [save, setSave] = useState(false);

    const [habitCreationForm, setHabitCreationForm] = useState(false);
    const [days, setDays] = useState([]);

    const weekdays = [
        { name: "D", id: 0 },
        { name: "S", id: 1 },
        { name: "T", id: 2 },
        { name: "Q", id: 3 },
        { name: "Q", id: 4 },
        { name: "S", id: 5 },
        { name: "S", id: 6 }
    ];

    function openHabitCreationForm() {
        if (habitCreationForm === false) {
            setHabitCreationForm(true)
        } else {
            setHabitCreationForm(false)
        } if (save === true) {
            setTimeout(() => {
                setHabitCreationForm(false);
                setDisabled(false)
            }, 3000)
        }
    }

    const { loginResponse } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${loginResponse.token}`
        }
    }

    function create() {

        const body = { name: name, days: days }

        createHabit(config, body)
            .then((res) => {
                console.log(res.data)
                setHabitoCriado(res.data);
                setDisabled(false);
                openHabitCreationForm();
                setName("");
                setDays([]);
                setReset(true);
                showHabits();
                setSave(true);
                setTimeout(() => {
                    setReset(false);
                }, 0)

            })
            .catch((err) => {
                alert("Preencha corretamente os campos")
                setDisabled(false);
            })
    }

    function showHabits() {
        listHabits(config)
            .then(res => {
                setHabitsArray(res.data)
            }).catch(err => {
                alert("Erro!")
            })
    }

    useEffect(showHabits, []);
    console.log(save)
    console.log(habitsArray)
    return (
        <>
            <NavBar />
            <Container>
                <h2>Meus hábitos</h2>
                <AddHabitButton onClick={openHabitCreationForm}>+</AddHabitButton>
                <AddHabitBox habitCreationForm={habitCreationForm}>
                    <Input placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} required />
                    <Weekdays>
                        {!reset ? weekdays.map((weekday, index) => (<Weekday key={index} name={name} save={save} setSave={setSave} weekday={weekday} index={index} setDays={setDays} days={days} setDisabled={setDisabled} disabled={disabled} />)) : ""}
                    </Weekdays>
                    <h5 onClick={() => openHabitCreationForm()}>Cancelar</h5>
                    <SaveButton save={save} onClick={create} disabled={disabled}>
                        {save ?
                            <BeatLoader
                                size={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                                color="#ffffff"
                            // timeout={3000}
                            />
                            : "Salvar"}
                    </SaveButton>
                </AddHabitBox>
                {habitsArray.length >= 1 ?
                    habitsArray.map((habit) =>
                        <Habit habit={habit} key={habit.id} showHabits={showHabits} weekdays={weekdays} />
                    ) :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione para começar a trackear!</p>}




            </Container>
            <Footer />
        </>
    )
}

function Weekday({ weekday, index, setDays, days, disabled, setDisabled, name, save, setSave }) {
    const [selected, setSelected] = useState(false);

    function select() {
        if (selected === false) {
            setSelected(true);

            setDays([...days, weekday.id])
        } else {
            setSelected(false);
            setDays(days.filter(day => day !== weekday.id))
            setDisabled(true)
        } if (name === "" || save === false || selected === false) {
            setSave(false)
        } else {
            setSave(true)
        }
    }

    return (
        <Day key={index} onClick={select} selected={selected} disabled={disabled}>{weekday.name}</Day>
    )
}

export const Container = styled.div`
padding: 98px 18px 0 17px;
margin-bottom: 80px;
background-color: #E5E5E5;
width:100%;
height: 90vh;
h2{
    color: #126ba5;
    font-size: 23px;
    margin-bottom: 30px;
}
p{
    color: #666666;
    font-size: 18px;
    width:340px;
    overflow-wrap: break-word;
}
`
export const AddHabitButton = styled.button`
width:40px;
height:34px;
background-color: #52b6ff;
border-radius: 5px;
border: none;
position: absolute;
top: calc(70px + 21px);
right:18px;
color: #ffffff;
font-size: 27px;
font-weight:bold;
`
export const AddHabitBox = styled.div`
width:340px;
height:180px;
background-color: #ffffff;
border-radius: 5px;
padding: 18px 19px 0 18px;
margin-top: 30px;
margin-bottom: 29px;
position: relative;
display:${({ habitCreationForm }) => habitCreationForm === false ? "none" : "block"};
h5{
    font-size:16px;
    right: 125px;
    color:#52b6ff;
    position: absolute;
    top:139px;
    text-decoration: none;
}
`
export const Weekdays = styled.div`
display:flex;
`
export const Day = styled.button`
width: 30px;
border-radius: 5px;
border: 1px solid #d4d4d4;
background-color: ${({ selected }) => selected === false ? "#ffffff" : "#cfcfcf"};
margin-left: 4px;
font-size: 20px;
height:30px;
color: ${({ selected }) => selected === false ? "#dbdbdb" : "#ffffff"};
`
export const SaveButton = styled.button`
width: 84px;
height: 35px;
background-color: #52b6ff;
border-radius: 4.64px;
border:none;
color: #ffffff;
font-size: 16px;
position: absolute;
top:130px;
right:16px;
`
export const Input = styled.input`
width:303px;
height: 45px;
margin-bottom: 6px;
padding-left: 11px;
border: 1px solid #d4d4d4;
border-radius:5px;
`