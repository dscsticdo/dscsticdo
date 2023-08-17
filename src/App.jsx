import "./index.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Membership from "./components/Membership/Membership";
import Team from "./components/Team/Team";

function App() {
	return (
		<>
			<Navbar />
			<AboutUs />
			<Membership />
			<Team />
		</>
	);
}

export default App;
