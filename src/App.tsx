import './App.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return(
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App;
