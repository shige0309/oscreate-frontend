import "./App.css";
import { HomePage } from "./pages/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { WorkPage } from "./pages/Work";
import { BlogPage } from "./pages/Blog";
import { ContactFormPage } from "./pages/Contact/ContactForm";
import { ContactThanksPage } from "./pages/Contact/ContactThanks";
import { Login } from "./pages/Login";
import { WorksRegister } from "./pages/Work/WorksRegister";
import { BlogRegister } from "pages/Blog/BlogRegister";
import { AdminUpdate } from "pages/AdminUpdate";
import { useAppSelector } from "stores/hooks";

function App() {
  const {admin} = useAppSelector((state) => state);
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />}/>
          <Route path="/blog" element={<BlogPage />}/>
          <Route path="/contact" element={<ContactFormPage />}/>
          <Route path="/contact/thanks" element={<ContactThanksPage />}/>
          <Route path="/login" element={admin.user ? <WorksRegister /> : <Login />}/>
          <Route path="/works/register" element={admin.user ? <WorksRegister /> : <Login />}/>
          <Route path="/blog/register" element={admin.user ? <BlogRegister /> : <Login />}/>
          <Route path="/admin/update" element={admin.user ? <AdminUpdate /> : <Login />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
