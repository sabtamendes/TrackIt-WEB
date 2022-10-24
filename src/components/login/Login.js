import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/image.jpg";
import React, { useState } from "react";
import { postForLogin } from "../../service/Service";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

export default function Login({ loginResponse, setLoginResponse }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    function userLogin(e) {
        e.preventDefault();
        const body = {
            email,
            password
        }

        postForLogin(body)
            .then(res => {
                setLoginResponse(res.data)
                navigate("/hoje");
            })
            .catch(err => {
                alert("Verifique se os dados foram digitados corretamente");
                setDisabled(false);
            })

        if (loginResponse === undefined) {
            return setDisabled(true)
        }
    }

    return (
        <Container>
            <img src={Logo} alt="texto alternativo" />
            <form onSubmit={userLogin}>
                <input
                    data-identifier="input-email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="email"
                    disabled={disabled}
                    required
                />
                <input
                    data-identifier="input-password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="senha"
                    disabled={disabled}
                    required
                />

                <button data-identifier="login-btn" type="submit">
                    {disabled
                        ?
                        <BeatLoader
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            color="#ffffff"
                            timeout={3000}
                        />
                        : "Entrar"}
                </button>
            </form>

            <StyledLink data-identifier="sign-up-action" to={"/cadastro"}>Não tem uma conta? Cadastre-se!</StyledLink>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 20vh;
    padding:15%;
input{
   margin-left: -5%;
   margin-bottom: 4%;
   width:38vh;
   padding: 15px; 
   border:1px solid #D4D4D4;
   border-radius: 5px;
   &::placeholder{
    font-family: 'Lexend Deca', sans-serif;
    font-size:15px;
    color:#DBDBDB;
   }
}
img{
   margin-left: 24px;
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -5%;
    margin-bottom:15%;
    width: 78vw;
    height: 6vh;
    font-weight:600;
    font-size: 15px;
    color: #FFFFFF;
    background-color:#52B6FF;
    border-radius: 5px;
    border:none;
}
`
const StyledLink = styled(Link)`
    margin-top:5%;
    margin-left:5%;
    font-size:14px;
    color: #52B6FF;
`