import "./styles.css";
import { Header, Articles, PriceAndCapacity } from "./components";
import { ARTICLES, PRICE, CAPACITY } from "./data";

const App = () => (
  <div className="App">
    <Header />
    <Articles articles={ARTICLES} />
    <PriceAndCapacity price={PRICE} capacity={CAPACITY} />
  </div>
);

export default App;
