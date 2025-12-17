import { Route, Routes } from "react-router";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import About from "./components/about/About";
import NotFound from "./components/notFound/NotFound";
import { UserProvider } from "./contexts/UserContext";

import Logout from "./components/logout/Logout";
import Details from "./components/details/Details";
import AddBear from "./components/create/AddBear";
import Edit from "./components/edit/Edit";
import MyBears from "./components/myBears/MyBears";

function App() {
	return (
		<UserProvider>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/bears/catalog" element={<Catalog />} />
				<Route path="/bears/:bearId/details" element={<Details />} />
				<Route path="/bears/:bearId/edit" element={<Edit />} />
				<Route path="/bears/MyBears" element={<MyBears />} />
				<Route path="/bears/create" element={<AddBear />} />
				<Route path="/about" element={<About />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</UserProvider>
	);
}

export default App;
