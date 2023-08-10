import MissionVisionImage from "/img/assets/mission-vision.png";

const AboutUs = () => {
	return (
		<>
			<div name="home">
				{/* Mission & Vision */}
				<div className="p-12 pb-5 border-b-4 border-blue-600 grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="mission-vision md:place-self-center">
						<h1 className="text-2xl md:text-4xl py-3">
							Our Mission and Vision
						</h1>
						<p className="text-1xl md:text-2xl">
							We present to you our mission statement and vision statement.
							These statements define the purpose and the goals of our club.
							<br />
							<br />
							We wish that you will accompany us as we realize our goals and
							materialize our aspirations.
						</p>
					</div>
					<div className="mission-img">
						<img src={MissionVisionImage} alt="mission-vision" />
					</div>
				</div>

				{/* GDSC community */}
				<div className="p-12 pb-5 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="flex-col">
						<p className="text-2xl whitespace-pre-line break-words text-justify">
							<small>
								Google Developer Student Clubs are community groups for college
								and university students interested in Google developer
								technologies.
								<br />
								<br />
								Students from all undergraduate or graduate programs with an
								interest in growing as a developer are welcome. By joining a
								GDSC, students grow their knowledge in a peer-to-peer learning
								environment and build solutions for local businesses and their
								community.
								<br />
								<br />
								<span className="blue">Google Developer Student Clubs</span> is
								a program supported by <span className="blue">G</span>
								<span className="red">o</span>
								<span className="yellow">o</span>
								<span className="blue">g</span>
								<span className="blue">l</span>
								<span className="red">e</span>{" "}
								<span className="text-gray-400">Developers</span>.
							</small>
						</p>
					</div>

					<div className="flex-col text-justify">
						<h1 className="text-xl blue">Connect</h1>
						<p className="text-lg">
							Meet students interested in developer technologies at your
							university. All are welcome, including those with diverse
							backgrounds and different majors.
						</p>
						<br />
						<h1 className="text-xl red">Learn</h1>
						<p className="text-lg">
							Learn about a range of technical topics and gain new skills
							through hands-on workshops, events, talks, and project-building
							activities - both online and in-person.
						</p>
						<br />
						<h1 className="text-xl green">Grow</h1>
						<p className="text-lg">
							Apply new learnings to build great solutions for local problems.
							Advance your skills, career, and network. Give back to your
							community by helping others learn, too.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
