import './App.css';
import { HomePage } from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { WorkPage } from './pages/Work';
import { BlogPage } from './pages/Blog';
import { ContactFormPage } from './pages/Contact/ContactForm';
import { ContactThanksPage } from './pages/Contact/ContactThanks';
import { Login } from './pages/Login';

function App() {
  return(
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/work' element={<WorkPage />}/>
          <Route path='/blog' element={<BlogPage />}/>
          <Route path='/contact' element={<ContactFormPage />}/>
          <Route path='/contact/thanks' element={<ContactThanksPage />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
  )
}

export default App;
