import { React, useEffect, useState, useContext } from "react";
import Body from "../Styled/InputButtonCSS";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {Header, TopPage} from "../Styled/HeaderCSS";

export default function NewInput(){

    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);

    return(
        <>
        <TopPage>
            <Header><p>Nova saída</p></Header>
            <Body>
            <form>
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