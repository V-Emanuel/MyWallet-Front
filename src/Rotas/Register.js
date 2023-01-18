import { React, useEffect, useState, useContext } from "react";
import Body from "../Styled/InputButtonCSS";
import Logo from "../Styled/LogoCSS";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Register() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);

    function createAccount(e) {
        e.preventDefault();
    }

    return (
        <Body>
            <Logo>MyWallet</Logo>
            <form onSubmit={createAccount}>
                <input
                    value={name}
                    type="text"
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    type="number"
                    placeholder="CPF"
                    onChange={e => setCpf(e.target.value)}
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
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage}>
                    <p>Cadastrar</p>
                </button>
            </form>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </Body>
    );
}
