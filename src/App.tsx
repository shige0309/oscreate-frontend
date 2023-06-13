import './App.css';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { WorkPage } from './pages/Work';
import { BlogPage } from './pages/Blog';
import { ContactPage } from './pages/Contact';

function App() {
  return(
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/work' element={<WorkPage />}/>
          <Route path='/blog' element={<BlogPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
        <Footer />
      </Router>
  )
}

export default App;
