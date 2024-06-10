import { BrowserRouter, Route, Routes } from "react-router-dom"
import Model from "./Pages/Model";
import About from './Pages/About';
import Skills from './Pages/Skills';
import Protfolio from './Pages/Protfolio';
import Contact from './Pages/Contact';
import Service from "./Pages/Service";
import SMS_send from "./Component/SMS_send";
import UploadLatestProduct from "./Pages/UploadLatestProduct";
import Login from "./Pages/Admin/Login";
import AdminProfile from "./Pages/Admin/AdminProfile";
import ViewProjects from "./Pages/Admin/ViewProjects";
import Message from "./Pages/Admin/Message";
import PageNotFound from './Pages/PageNotFound';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Model/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/protfolio" element={<Protfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/contact/Submited" element={<SMS_send/>}></Route>
        <Route path="/admin/project" element={<UploadLatestProduct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<AdminProfile/>}></Route>
        <Route path="/view/projects" element={<ViewProjects/>}></Route>
        <Route path="/message" element={<Message/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
