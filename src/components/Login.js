import styled from "styled-components";
import { BASE_URL } from "../constants/url";
import { PropagateLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/image.jpg";
import axios from "axios";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
   
    
    
    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function userLogin(e) {
        e.preventDefault();

        const body = { ...form }

        axios.post(`${BASE_URL}/auth/login`, body)
            .then(res => {
                console.log(res.data)
                setDisabled(true);
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    navigate("/hoje");
                }, 3800)
            })
            .catch(err => {
                alert(err.response.data.message);
                setDisabled(false);
            })
    }

    return (
        <Container>
            <img src={Logo} alt="texto alternativo" />
            <form onSubmit={userLogin}>
                <input
                    name="email"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="email"
                    disabled={disabled}
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    type="password"
                    placeholder="senha"
                    disabled={disabled}
                />

                <button type="submit" disabled={disabled}>
                    {isLoading
                        ?
                        <PropagateLoader
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            color="#ffffff" />
                        : "Entrar"
                    }
                </button>
            </form>

            <StyledLink to={"/cadastro"}>Não tem uma conta? Cadastre-se!</StyledLink>

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
