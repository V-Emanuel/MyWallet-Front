import styled from "styled-components";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }
    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 13px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 20px;
        &:placeholder-shown{
            line-height: 25px;
            padding-left: 20px;
            color: #FFFFFF;
        }
        &:hover{
            background-color: #DBDBDB;
        }
    }
    button{
        width: 326px;
        height: 58px;
        background: #A328D6;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: #8C11BE;
        margin-bottom: 25px;
        p{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            text-decoration: none;
        }
    }
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-decoration-line: none;
        color: #FFFFFF;
    }
`;

export default Body;