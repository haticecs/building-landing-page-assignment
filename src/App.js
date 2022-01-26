import "./styles.css";
import {
  Header,
  Articles,
  PriceAndCapacity,
  ContactUsForm,
  Footer,
} from "./components";
import {
  ARTICLES,
  PRICE,
  CAPACITY,
  ADDRESS,
  DESIGNER,
  SOCIAL_LINKS,
} from "./data";

const App = () => (
  <div className="App">
    <Header />
    <Articles articles={ARTICLES} />
    <PriceAndCapacity price={PRICE} capacity={CAPACITY} />
    <ContactUsForm />
    <Footer address={ADDRESS} designer={DESIGNER} sociallinks={SOCIAL_LINKS} />
  </div>
);

export default App;
