import { React, useEffect, useState, useContext } from "react";
import Body from "../Styled/InputButtonCSS";
import Logo from "../Styled/LogoCSS";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignOn() {

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [confirmeSenha, setConfirmeSenha] = useState("");
    const [usage, setUsage] = useState(false);
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault();
        const URL = `${process.env.REACT_APP_API_URL}/sign-up`
        const body = {nome, email, senha, confirmeSenha};
        setUsage(true)
        const promise = axios.post(URL, body);
        promise.then((res) => {
            navigate("/")
        })
        promise.catch((err) => {
            alert(err.response.data.message);
            setUsage(false);
        })
    }

    return (
        <>
        <Logo>MyWallet</Logo>
        <Body>
            <form onSubmit={createAccount}>
                <input
                    value={nome}
                    type="text"
                    placeholder="Nome"
                    onChange={e => setNome(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={senha}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setSenha(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={confirmeSenha}
                    type="password"
                    placeholder="Confirme a senha"
                    onChange={e => setConfirmeSenha(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage}>
                    <p>Cadastrar</p>
                </button>
            </form>
            <Link to="/" style={{ textDecoration: 'none' }}><p>Já tem uma conta? Entre agora!</p></Link>
        </Body>
        </>
    );
}
