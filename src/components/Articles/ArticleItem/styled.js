import styled from "styled-components";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.isOdd && "row-reverse"};

  ${InfoWrapper} {
    ${(props) => (props.isOdd ? "margin-right:30px" : "margin-left:30px")};
  }
`;

const Image = styled.img`
  //height: 50vh;
  //object-fit: contain;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 10px;
`;

const Description = styled.p`
  line-height: 200%;
  font-size: 18px;
  font-weight: 400;
`;

export { InfoWrapper, Container, Image, Title, Description };
