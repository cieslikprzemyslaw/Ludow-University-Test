import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyles from './assets/GlobalStyles';
import Nav from './components/Nav/';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <main>
      <Router>
        <GlobalStyles />
        <MobileNav/>
        <Nav/>
        <Routes />
      </Router>
    </main>
  );
}

export default App;
