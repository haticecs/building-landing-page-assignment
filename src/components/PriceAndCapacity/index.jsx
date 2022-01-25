import { Container, PriceText, CapacityText } from "./styled";

//price and capacity are props since they can change later.
const PriceAndCapacity = ({ price, capacity }) => {
  return (
    <Container>
      <PriceText>Rent the whole place for ${price}/night</PriceText>
      <CapacityText>Maximum of {capacity} people</CapacityText>
    </Container>
  );
};

export default PriceAndCapacity;
