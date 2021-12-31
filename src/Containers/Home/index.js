import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Logo from "../../assets/illustration-logo.svg";

import {
  Container,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styled";

function App() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const InputOrder = useRef();
  const InputName = useRef();

  async function addNewOrder() {
    if(InputOrder.current.value < 1|| InputName.current.value < 1) {
      alert("[ERRO] favor adicionar valores aos campos vazios");
    } else {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: InputOrder.current.value,
        clientName: InputName.current.value,
      }
    );
    setOrders([...orders, newOrder]);
    navigate("/orders");
  }
}

  return (
    <Container>
      <img src={Logo} alt="illustration-logo" />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={InputOrder} placeholder="seu pedido aqui..."></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={InputName} placeholder="seu nome aqui..."></Input>

        <Button to="/orders" onClick={addNewOrder}>
          Novo Pedido
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
