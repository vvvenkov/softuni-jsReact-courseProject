import { Route, Routes } from "react-router"


import Home from "./components/home/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Login from './components/login/Login'
import Register from "./components/register/Register"
import Catalog from "./components/catalog/Catalog"
import MyBears from "./components/myBears/MyBears"
import About from "./components/about/About"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/myBears" element={<MyBears />} />
        <Route path="/about" element={<About />} />





      </Routes>

      <Footer />

    </>
  )
}

export default App
