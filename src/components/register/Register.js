import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/image.jpg";
import styled from "styled-components";
import { postRegistration } from "../../service/Service";
import { BeatLoader } from "react-spinners";

export default function Register() {
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const [responseVerification, setResponseVerification] = useState(undefined)
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();


    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function userRegister(e) {
        e.preventDefault();

        const body = { ...form }

        postRegistration(body)
            .then(res => {
                setResponseVerification(res.data)
                navigate("/");
            })
            .catch(err => {
                alert("Verifique se os campos foram preenchidos corretamente ")
                setDisabled(false)
            })
        if (responseVerification === undefined) {
            return setDisabled(true)
        }
    }

    return (
        <Container>
            <img src={Logo} alt="texto alternativo" />
            <form onSubmit={userRegister}>
                <input
                    data-identifier="input-email"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="text"
                    placeholder="email"
                    disabled={disabled}
                    required
                >
                </input>
                <input
                    data-identifier="input-password"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    type="text"
                    placeholder="senha"
                    disabled={disabled}
                    required
                >
                </input>
                <input
                    data-identifier="input-name"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="nome"
                    disabled={disabled}
                    required
                >
                </input>
                <input
                    data-identifier="input-photo"
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                    type="url"
                    placeholder="foto"
                    disabled={disabled}
                    required
                >
                </input>

                <button type="submit" disabled={disabled}>
                    {disabled ?
                        <BeatLoader
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            color="#ffffff"
                            timeout={3000}
                        />
                        : 'Cadastrar'}
                </button>
            </form>

            <StyledLink data-identifier="back-to-login-action" to={"/"}>Já tem uma conta? Faça login!</StyledLink>
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