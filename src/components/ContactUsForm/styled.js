import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9bcbbb;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 26px;
`;
const Text = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  width: 50vw;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  flex: 1;
`;

const Label = styled.label``;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 10px;
  padding: 10px 10px 10px 0px;
  font-size: 20px;
  outline: none;
`;

const Button = styled.input.attrs({ type: "submit" })`
  align-self: flex-end;
  background: transparent;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`;

export {
  Container,
  Header,
  Title,
  Text,
  Form,
  Row,
  InputContainer,
  Label,
  Input,
  Button,
};
