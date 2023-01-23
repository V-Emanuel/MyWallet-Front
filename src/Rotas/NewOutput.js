import { React, useEffect, useState, useContext } from "react";
import Body from "../Styled/InputButtonCSS";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {Header, TopPage} from "../Styled/HeaderCSS";
import UserContext from "../Contexts/UserContext";

export default function NewInput(){

    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);
    const {token} = useContext(UserContext);


    function saveOutput(e){
        e.preventDefault();
        const URL = `${process.env.REACT_APP_API_URL}/registers`
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const body = {price, description, type: "output"}

        const promise = axios.post(URL, body, config)

        promise.then((res) => {
            console.log("Deu certo")
            navigate("/home")
            setUsage(false)
        })
        promise.catch((err) => {
            setUsage(true)
            console.log("Deu errado")
        })
    }



    return(
        <>
        <TopPage>
            <Header><p>Nova saída</p></Header>
            <Body>
            <form onSubmit={saveOutput}>
                <input
                    value={price}
                    type="number"
                    placeholder="Valor"
                    onChange={e => setPrice(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    type="text"
                    placeholder="Descrição"
                    onChange={e => setDescription(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage}>
                    <p>Salvar saída</p>
                </button>
            </form>
        </Body>
        </TopPage>
        </>
    )
}