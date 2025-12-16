import { Route, Routes } from "react-router"


import Home from "./home/Home"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Login from './login/Login'
import Register from "./register/Register"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>

      <Footer />

    </>
  )
}

export default App
