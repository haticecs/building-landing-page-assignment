import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import { Container, Text, SocialContainer, IconContainer } from "./styled";

const Footer = ({
  address,
  designer,
  sociallinks: { facebook, twitter, instagram },
}) => {
  return (
    <Container>
      <Text>{address}</Text>
      <Text>
        Designed by <u>{designer}</u>
      </Text>
      <SocialContainer>
        <IconContainer href={facebook} target="_blank">
          <FacebookRounded />
        </IconContainer>
        <IconContainer href={twitter} target="_blank">
          <Twitter />
        </IconContainer>
        <IconContainer href={instagram} target="_blank">
          <Instagram />
        </IconContainer>
      </SocialContainer>
      <Text>
        <span>&copy;</span> Camp Chippewa
      </Text>
    </Container>
  );
};

export default Footer;
