import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Today() {
    return (
        <>
            <NavBar />
            <Container>
                <Title>Segunda, 17/05</Title>
                <Subtitle>Nenhum hábito concluído ainda</Subtitle>

                <Card>
                    <Info>
                        <h6>Ler 1 capítulo de livro</h6>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </Info>
                    <Icon><ion-icon name="checkbox-outline"></ion-icon></Icon>
                </Card>
                <Card>
                    <Info>
                        <h6>Ler 1 capítulo de livro</h6>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </Info>
                    <Icon><ion-icon name="checkbox-outline"></ion-icon></Icon>
                </Card>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
width:100%;
height:90vh;
padding: 10% 5%;
font-family: 'Lexend Deca', sans-serif;
background-color: #e7e7e7;
`
const Title = styled.h1`
color: #126BA5;
font-size: 25px;
`
const Subtitle = styled.h6`
color: #BABABA;
font-size: 15px;
`
const Card = styled.div`
width: 320px;
height:94px;
background-color: #ffffff;
border: 1px solid #e7e7e7;
border-radius:5px;
margin: 5% 5% 5% auto;
padding: 5% 2%;
display: flex;
`
const Icon = styled.div`
margin-top:-5px;
ion-icon{
    font-size: 75px;
    color:#E7E7E7;
}
`
const Info = styled.div`
width:100%;
margin-right:10%;
h6{
  color: #666666;
  font-size: 19px;  
}
p{
    margin-top:2%;
    color: #666666;
    font-size: 12px;
}
`