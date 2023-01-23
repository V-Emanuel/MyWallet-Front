import { React, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Header, TopPage } from "../Styled/HeaderCSS";
import UserContext from "../Contexts/UserContext";

export default function Home() {

    const {token} = useContext(UserContext)
    const [registers, setRegisters] = useState([]);
    const [show, setShow] = useState(false);
    const [balance, setBalance] = useState(0);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/registers`
        const promise = axios.get(URL, config)
        promise.then((res) => {
            setRegisters(res.data)
        })

        let sum = 0;

        registers.map((item) => {
            if (item.type === "input") {
                return sum += parseFloat(item.value)
            } else {
                return sum -= parseFloat(item.value)
            }
        })

        setBalance(sum)

    }, [registers])

    return (
        <>
            <TopPage><Header><p>Olá, Fulano</p></Header></TopPage>
            <Icon><Link to={"/"}><ion-icon name="exit-outline"></ion-icon></Link></Icon>
            <Registers>
                {/*<NoRegister show={show}>
                    <p>Não há registros de entrada ou saída</p>
    </NoRegister>*/}
                {registers.map(i =>
                    <Register show={show} key={i.id}>
                        <div>
                            <p className="date">{i.date}</p>
                            <p className="description">{i.description}</p>
                        </div>
                        <p className={`${i.type}`}>{i.value}</p>
                    </Register>
                )}
                <Sum>
                    <p>SALDO</p>
                    <div className={balance >= 0 ? "sum positive" : "sum negative"} >{balance}</div>
                </Sum>
            </Registers>
            <RegisterButtons>
                <Link to={"/nova-entrada"} style={{ textDecoration: 'none' }}>
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova entrada</p>
                    </div>
                </Link>
                <Link to={"/nova-saida"} style={{ textDecoration: 'none' }}>
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
    position: relative;
`;
const Sum = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    .sum{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
    }
    .positive{
        color: #03AC00;
    }
    .negative{
        color: #C70000;
    }
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
    .input{
        color: #03AC00;
    }
    .output{
        color: #C70000;
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