import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyles from './assets/GlobalStyles';
import Nav from './components/Nav/';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

function App() {
  return (
    <main style={{overflowX: 'hidden'}}>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <MobileNav />
        <Nav />
        <Routes />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
