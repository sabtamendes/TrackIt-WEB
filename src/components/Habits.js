import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
export default function Habits() {
    return (
        <>
            <NavBar />
            <Container>
                <Title>
                    <span>Meus hábitos</span>
                    <button>+</button>
                </Title>
                <CardOpen>
                    <input placeholder="nome do hábito"></input>
                    <br></br>
                    <WeekButton>D</WeekButton>
                    <WeekButton>S</WeekButton>
                    <WeekButton>T</WeekButton>
                    <WeekButton>Q</WeekButton>
                    <WeekButton>Q</WeekButton>
                    <WeekButton>S</WeekButton>
                    <WeekButton>S</WeekButton>
                    <br></br>
                    <div><CancelButton>Cancelar</CancelButton> <SaveButton>Salvar</SaveButton></div>
                </CardOpen>

                <CardClosed>
                    <div>
                        <span>Ler 1 capítulo de um livro</span>
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <br></br>
                    <WeekButton>D</WeekButton>
                    <WeekButton>S</WeekButton>
                    <WeekButton>T</WeekButton>
                    <WeekButton>Q</WeekButton>
                    <WeekButton>Q</WeekButton>
                    <WeekButton>S</WeekButton>
                    <WeekButton>S</WeekButton>
                </CardClosed>

                <p>Você não tem nenhum hábito <br></br> cadastrado ainda. Adicione um hábito<br></br> para começar a trackear!</p>
                <Footer />
            </Container>
        </>
    )
}
const Container = styled.div`
padding: 10% 4%;
width:100%;
height:90vh;
background-color: #E5E5E5;
p{
    margin-top: 5%;
    margin-left:2.5%;
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
   margin-left: 36vw;
   margin-bottom: 5%;
}
`
const CardOpen = styled.div`
width:310px;
height:180px;
padding: 8% 5%;
background-color: #ffffff;
border-radius: 5px;
margin: 0 auto;
input{
    width:279px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius:5px;
    &::placeholder{
    font-family: 'Lexend Deca', sans-serif;
    font-size:15px;
    padding-left:4%;
    color:#DBDBDB;
    }
}
div{
    margin-top:5%;
    margin-left: 43%;
}
`
const WeekButton = styled.button`
 border: 1px solid #D4D4D4;
width: 30px;
height:30px;
 border-radius: 5px;
 font-size: 19px;
 font-family: 'Lexend Deca', sans-serif;
color: #D4D4D4;
 margin:3% 1%;
 `
const SaveButton = styled.button`
 width:84px;
 height:35px;
 background-color:#52B6FF;
 border: none;
 border-radius: 5px;
 font-family: 'Lexend Deca', sans-serif;
 color:#FFFFFF;
 `
const CancelButton = styled.span`
 color: #52B6FF;
 font-family: 'Lexend Deca', sans-serif;
 `
const CardClosed = styled.div`
width:310px;
height:91px;
margin: 0 auto;
margin-bottom: 5%;
/* background-color: #ffffff; */
background-color:red;
border-radius: 5px;
padding: 4% 5%;
span{
  font-family: 'Lexend Deca', sans-serif;
  color:#666666; 
  margin-left:-10px; 
  margin-right:40px;
}
div{
    display:flex;
    justify-content: space-evenly;
}
`

