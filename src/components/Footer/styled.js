import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const Text = styled.p`
  font-size: 18px;
  padding: 10px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0px;
`;
const IconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 10px;
  background-color: black;
  cursor: pointer;

  > .MuiSvgIcon-root {
    color: white;
    width: 18px;
    height: 18px;
    z-index: 1;
  }
`;

export { Container, Text, SocialContainer, IconContainer };
