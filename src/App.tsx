import './App.css';
import { Sidebar } from './components/Sidebar';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return(
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App;
