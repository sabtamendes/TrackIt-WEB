import styled from "styled-components";
import Logo from "../assets/images/image.jpg";
import { BASE_URL } from "../constants/url";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { AuthContext } from "../providers/auth";
import axios from "axios";
export default function Register() {
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const { setImage } = React.useContext(AuthContext);
   
    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function userRegister(e) {
        e.preventDefault();

        const body = { ...form }

        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(res => {
                setDisabled(true)
                navigate("/");
                setImage(form.image);
                console.log(res.data)
            })
            .catch(err => {
                alert(err.response.data.message)
                setDisabled(false)
            })
    }

    return (
        <Container>
            <img src={Logo} alt="texto alternativo" />
            <form onSubmit={userRegister}>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="text"
                    placeholder="email"
                    required
                    disabled={disabled}
                >
                </input>
                <input
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    type="text"
                    placeholder="senha"
                    required
                    disabled={disabled}
                >
                </input>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="nome"
                    required
                    disabled={disabled}
                >
                </input>
                <input
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                    type="url"
                    placeholder="foto"
                    required
                    disabled={disabled}
                >
                </input>

                <button type="submit" disabled={disabled}>Cadastrar</button>
            </form>

            <StyledLink to={"/"}>Já tem uma conta? Faça login!</StyledLink>
        </Container>
    )
}
const Container = styled.div`
    margin-top: 15vh;
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
button{
    margin-left: -5%;
    margin-bottom:15%;
    width:38vh;
    padding: 15px;
    font-weight:600;
    font-size: 15px;
    color: #FFFFFF;
    background-color:#52B6FF;
    border-radius: 5px;
    border:none;
}
img{
   margin-left: 24px;
}
`
const StyledLink = styled(Link)`
    margin-top:5%;
    margin-left:8%;
    font-size:14px;
    color: #52B6FF;
`