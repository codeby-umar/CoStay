import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Layout from "./Layout/Layout";
import Forsale from "./pages/Forsale";
import ForRent from "./pages/ForRent";
import Projects from "./pages/Projects";
import Notfound from "./pages/NotFound";
import Advertise from "./pages/Advertise";
import UiTafsiya from "./pages/Uitafsiya";
import Dailyrenetr from "./pages/Dailyrental";

function App() {

  return (
     <main>
           <Routes>
              <Route path="/" element={<Layout><Home/></Layout>}/>
              <Route path="/forsale" element={<Layout><Forsale/></Layout>}/>
              <Route path="/forrent" element={<Layout><ForRent/></Layout>}/>
              <Route path="/dailyrental" element={<Layout><Dailyrenetr/></Layout>}/>
              <Route path="/projects" element={<Layout><Projects/></Layout>}/>
               <Route path="/advertise" element={<Layout><Advertise/></Layout>}/>
               <Route path="/ui" element={<Layout><UiTafsiya/></Layout>}/>
              <Route path="/register" element={<SignUp/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Notfound/>}/>
           </Routes>
     </main>
  )
}

export default App