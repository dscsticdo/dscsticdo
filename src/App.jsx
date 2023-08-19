import "./index.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Membership from "./components/Membership/Membership";
import Team from "./components/Team/Team";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<AboutUs />
			<Membership />
			<Team />
			<Partners />
			<Footer />
		</>
	);
}

export default App;
