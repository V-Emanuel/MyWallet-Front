import { React, useEffect, useState, useContext} from "react";
import axios from "axios";
import  Body from "../Styled/InputButtonCSS";
import Logo from "../Styled/LogoCSS";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

export default function Login() {

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [usage, setUsage] = useState(false);
    const {setNome, setToken} = useContext(UserContext)
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        const URL = `${process.env.REACT_APP_API_URL}/sign-in`;
        const body = {email, senha};
        setUsage(true);
        const promise = axios.post(URL, body);
        promise.then((res) => {
            setToken(res.data.token);
            setNome(res.data.nome);
            navigate("/home");
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setUsage(false)
        })
    }

    return (
        <>
        <Logo>MyWallet</Logo>
        <Body>
            
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
                    value={senha}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setSenha(e.target.value)}
                    required
                    disabled={usage}
                >
                </input>
                <button type="submit"><p>Entrar</p></button>
            </form>
            <Link to="/cadastro" style={{textDecoration: 'none'}}><p>Primeira vez? Cadastre-se!</p></Link>
        </Body>
        </>
    );
}

