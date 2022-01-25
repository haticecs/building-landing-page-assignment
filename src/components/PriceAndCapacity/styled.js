import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 50px 0px;
`;

const PriceText = styled.h1`
  font-size: 34px;
  font-weight: 400;
`;
const CapacityText = styled.span`
  font-size: 18px;
  margin-top: 10px;
`;

export { Container, PriceText, CapacityText };
