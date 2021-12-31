import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  margin-top: 25px;
  text-align: center;
`;

export const InputLabel = styled.p`
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin: 42px 0 5px 10px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  padding-left: 20px;
  line-height: 21px;
  color: #fff;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: #d93856;
  margin: 76px 0;
  border: none;

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  cursor: pointer;

  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Orders = styled.li`
  width: 342px;
  height: auto;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const DivOrders = styled.div`
  align-items: center;
  width: 219px;
  height: auto;
  padding-left: 10px;
  display: block;
  padding: 10px;
`;

export const DivOrder = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
`;

export const DivName = styled.div`
  align-items: center;
  padding-top: 10px;
`;

export const DeleteOrder = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
