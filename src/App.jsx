import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Layout from "./Layout/Layout";
import Notfound from "./pages/NotFound";

function App() {

  return (
     <main>
           <Routes>
              <Route path="/" element={<Layout><Home/></Layout>}/>
              <Route path="/register" element={<SignUp/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Notfound/>}/>
           </Routes>
     </main>
  )
}

export default App