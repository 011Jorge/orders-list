import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Package from "../../assets/illustration-packaging.svg";
import Trash from "../../assets/icon-trash.svg";

import {
  Container,
  ContainerItens,
  H1,
  Orders,
  DeleteOrder,
  DivOrder,
  DivName,
  DivOrders,
  Button
} from "./styled";

function App() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  
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

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <img src={Package} alt="illustration-logo" />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

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
        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
