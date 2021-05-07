import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import GlobalStyles from "./assets/GlobalStyles";

function App() {
  return (
    <main>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </main>
  );
}

export default App;
