import styled from "styled-components";
import NavBar from "./NavBar";
export default function Habits() {
    return (
        <>
            <NavBar />
            <Container>
                <Title><span>Meus hábitos</span> <button>+</button></Title>
                <p>Você não tem nenhum hábito <br></br> cadastrado ainda. Adicione um hábito<br></br> para começar a trackear!</p>
            </Container>
        </>
    )
}
const Container = styled.div`
padding: 10% 8%;
p{
    color:#666666;
    font-size:15px;
    line-height:20px;
}
`
const Title = styled.div`
display:flex;
justify-content: space-evenly;
margin-bottom:5%;
span{
  margin-left: -2%;
  color: #126BA5;
  font-size: 22px;
}
button{
   background-color: #52B6FF;
   border:none;
   color: #ffffff;
   font-size:15px;
   border-radius:5px;
   padding: 4px 8px;
   margin-top:-1%;
   margin-left: 35vw;
   margin-bottom: 5%;
}
`