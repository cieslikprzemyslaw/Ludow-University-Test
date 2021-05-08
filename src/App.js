import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyles from './assets/GlobalStyles';
import Nav from './components/Nav/';

function App() {
  return (
    <main>
      <Router>
        <GlobalStyles />
        <Nav/>
        <Routes />
      </Router>
    </main>
  );
}

export default App;
