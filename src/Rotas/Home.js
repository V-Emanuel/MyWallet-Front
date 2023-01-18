import { React, useEffect, useState, useContext } from "react";
import Body from "../Styled/InputButtonCSS";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Header, TopPage } from "../Styled/HeaderCSS";

export default function Home() {

    const [registers, setRegisters] = useState([]);
    return (
        <>
            <TopPage><Header><p>Olá, Fulano</p></Header></TopPage>
            <Icon><Link to={"/"}><ion-icon name="exit-outline"></ion-icon></Link></Icon>
            <Registers>
                {/*<NoRegister>
                    <p>Não há registros de
                    entrada ou saída</p>
    </NoRegister>*/}
                <Register>
                    <div>
                        <p className="date">26/02</p>
                        <p className="description">Aniverśario</p>
                    </div>
                    <p className="value">R$345,87</p>
                </Register>
                <Register>
                    <div>
                        <p className="date">13/09</p>
                        <p className="description">Jogo do Vasco</p>
                    </div>
                    <p className="value">R$1234,99</p>
                </Register>
                <Register>
                    <div>
                        <p className="date">09/04</p>
                        <p className="description">Compras</p>
                    </div>
                    <p className="value">R$79,00</p>
                </Register>
            </Registers>
            <RegisterButtons>
                <Link to={"/nova-entrada"}>
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova entrada</p>
                    </div>
                </Link>
                <Link to={"/nova-saida"}>
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova saída</p>
                    </div>
                </Link>

            </RegisterButtons>
        </>
    )
}

const Icon = styled.div`
    position: fixed;
    top: 28px;
    right: 24px;
    ion-icon{
        font-size: 35px;
        color: #FFFFFF;
    }
`;
const Registers = styled.div`
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const NoRegister = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        width: 180px;
        height: 46px;
        left: 25%;
        top: 50%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
    
`;
const Register = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    div{
        display: flex;
        .date{
            color: #C6C6C6;
            margin-right: 10px;
        }
        .description{
            color: #000000;
        }
    }
    .value{
        color: #03AC00;
    }
`;
const RegisterButtons = styled.div`
    width: 326px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover{
        cursor: pointer;
    }
    div{
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        position: relative;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        align-items: flex-end;
        ion-icon{
            position: absolute;
            top: 10px;
            left: 10px;
            color: #FFFFFF;
            font-size: 25px;
        }
        p{  
            width: 60px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
`;