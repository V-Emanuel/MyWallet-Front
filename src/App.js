import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle"
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Rotas/Login";
import SignOn from "./Rotas/SignOn";
import NewInput from "./Rotas/NewInput";
import NewOutput from "./Rotas/NewOutput";
import Home from "./Rotas/Home";
import UserContext from "./Contexts/UserContext";

export default function App() {

  const [nome, setNome] = useState("");
  const [token, setToken] = useState("");

  return (
    <Body>
      <GlobalStyle/>
      <UserContext.Provider value = {{nome, setNome, token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignOn />} />
          <Route path="/nova-entrada" element={<NewInput />} />
          <Route path="/nova-saida" element={<NewOutput />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #8C11BE;
  position: relative;
;
`;