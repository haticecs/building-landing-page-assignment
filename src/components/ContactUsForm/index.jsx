import {
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
} from "./styled";

const ContactUsForm = () => {
  const handleClick = (e) => e.preventDefault();

  return (
    <Container>
      <Header>
        <Title>Contact us to get started</Title>
        <Text>We'll reply when we get back from fishing</Text>
      </Header>
      <Form>
        <Row>
          <InputContainer>
            <Label htmlFor="fname">Name</Label>
            <Input type="text" id="fname" name="fname"></Input>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="femail">Email</Label>
            <Input type="email" id="femail" name="femail"></Input>
          </InputContainer>
        </Row>
        <InputContainer>
          <Label htmlFor="ftimeline">Timeline</Label>
          <Input type="text" id="fimeline" name="ftimeline"></Input>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="fmessage">Message</Label>
          <Input type="text" id="fmessage" name="fessage"></Input>
        </InputContainer>
        <Button value={"SEND"} onClick={(e) => handleClick(e)} />
      </Form>
    </Container>
  );
};

export default ContactUsForm;
