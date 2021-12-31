import { useState, useRef, useEffect } from "react";

import axios from "axios";

import Logo from "./assets/illustration-logo.svg";
import Trash from "./assets/icon-trash.svg";

import {
  Container,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  Orders,
  DeleteOrder,
  DivOrder,
  DivName,
  DivOrders,
} from "./styled";

function App() {
  const [orders, setOrders] = useState([]);

  const InputOrder = useRef();
  const InputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: InputOrder.current.value,
        clientName: InputName.current.value,
      }
    );
    setOrders([...orders, newOrder]);
  }

  /* Resposavel por manter a página atualizada e com o dados mantidos */
  useEffect(() => {
    async function fetchOrder() {
      const { data: armaze } = await axios.get("http://localhost:3001/orders");
      setOrders(armaze);
    }
    fetchOrder();
  }, [orders]);

  async function DeleteOrders(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const del = orders.filter((order) => order.id !== orderId);
    setOrders(del);
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

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ol>
          <H1>Lista de Pedidos Feitos</H1>
          {orders.map((order) => (
            <Orders key={order.id}>
              <DivOrders>
                <DivOrder>{order.order}</DivOrder>
                <DivName>{order.clientName}</DivName>
              </DivOrders>

              <DeleteOrder onClick={() => DeleteOrders(order.id)}>
                <img src={Trash} alt="icon-trash" />
              </DeleteOrder>
            </Orders>
          ))}
        </ol>
      </ContainerItens>
    </Container>
  );
}

export default App;
