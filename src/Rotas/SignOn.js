import { React, useEffect, useState, useContext } from "react";
import Body from "../Styled/InputButtonCSS";
import Logo from "../Styled/LogoCSS";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignOn() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmePassword, setConfirmePassword] = useState("");
    const [usage, setUsage] = useState(false);

    function createAccount(e) {
        e.preventDefault();
    }

    return (
        <>
        <Logo>MyWallet</Logo>
        <Body>
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
                <input
                    value={confirmePassword}
                    type="password"
                    placeholder="Confirme a senha"
                    onChange={e => setConfirmePassword(e.target.value)}
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
