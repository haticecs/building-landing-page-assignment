import "./styles.css";
import { Header, Articles } from "./components";
import ARTICLES from "./data";

const App = () => (
  <div className="App">
    <Header />
    <Articles articles={ARTICLES} />
  </div>
);

export default App;
