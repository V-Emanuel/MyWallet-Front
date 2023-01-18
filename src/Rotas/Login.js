import { React, useEffect, useState} from "react";
import axios from "axios";
import { Logo, Body } from "../Styled/LoginRegisterCSS";
import { Link } from "react-router-dom";

export default function Login() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [usage, setUsage] = useState(false);

    function login(e) {
        e.preventDefault();
    }

    return (
        <Body>
            <Logo>MyWallet</Logo>
            <form onSubmit={login}>
                <input
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={usage}
                >
                </input>
                <input
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={usage}
                >
                </input>
                <button type="submit"><p>Entrar</p></button>
            </form>
            <Link to="/cadastro"><p>Primeira vez? Cadastre-se!</p></Link>
        </Body>
    );
}

