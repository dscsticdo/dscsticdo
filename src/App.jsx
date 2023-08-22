import "./index.css";
import Navbar from "./pages/Navbar";
import AboutUs from "./pages/AboutUs";
import Membership from "./pages/Membership";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Footer from "./pages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	useEffect(() => {
		AOS.refresh();
	});

	return (
		<>
			<div className="overflow-hidden">
				<Navbar />
				<AboutUs />
				<Membership />
				<Team />
				<Partners />
				<Footer />
			</div>
		</>
	);
}

export default App;
