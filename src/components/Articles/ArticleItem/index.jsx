import { InfoWrapper, Container, Image, Title, Description } from "./styled";

const ArticleItem = ({ image, title, description, isOdd }) => {
  return (
    <Container isOdd={isOdd}>
      <Image src={image} />
      <InfoWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoWrapper>
    </Container>
  );
};

export default ArticleItem;
