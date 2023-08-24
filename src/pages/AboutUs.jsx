import MissionVisionImage from "/img/assets/mission-vision.png";

const GDSCMotto = [
	{
		title: "Connect",
		color: "blue",
		text: "Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors.",
	},
	{
		title: "Learn",
		color: "red",
		text: "Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person.",
	},
	{
		title: "Grow",
		color: "green",
		text: "Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too.",
	},
];

const AboutUs = () => {
	return (
		<>
			<div name="about-us">
				{/* Mission & Vision */}
				<div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 lg:gap-6">
					<div className="mission-vision" data-aos="fade-up-right">
						<h1 className="text-2xl md:text-3xl py-3">
							Our Mission and Vision
						</h1>
						<p className="text-xl md:text-xl">
							We present to you our mission statement and vision statement.
							These statements define the purpose and the goals of our club.
							<br />
							<br />
							We wish that you will accompany us as we realize our goals and
							materialize our aspirations.
						</p>
					</div>
					<div className="mission-vision" data-aos="fade-up-left">
						<figure>
							<img src={MissionVisionImage} alt="mission-vision" width={620} />
						</figure>
					</div>
				</div>
				<div className="border-b-4 border-blue-600"></div>
				{/* GDSC community */}
				<div className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="text-lg text-justify grid grid-rows-1 lg:grid-rows-3">
						<div data-aos="fade-right">
							Google Developer Student Clubs are community groups for college
							and university students interested in Google developer
							technologies.
						</div>
						<div data-aos="fade-right">
							Students from all undergraduate or graduate programs with an
							interest in growing as a developer are welcome. By joining a GDSC,
							students grow their knowledge in a peer-to-peer learning
							environment and build solutions for local businesses and their
							community.
						</div>
						<div data-aos="fade-right">
							<span className="blue">Google Developer Student Clubs</span> is a
							program supported by <span className="blue">G</span>
							<span className="red">o</span>
							<span className="yellow">o</span>
							<span className="blue">g</span>
							<span className="blue">l</span>
							<span className="red">e</span>{" "}
							<span className="text-gray-400">Developers</span>.
						</div>
					</div>
					<div className="text-justify grid grid-rows-1 lg:grid-rows-3">
						{GDSCMotto.map((motto) => {
							return (
								<div key={motto.title} data-aos="fade-left">
									<h1 className={`text-xl ${motto.color}`}>{motto.title}</h1>
									<p className="text-lg">{motto.text}</p>
									<br />
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="b-example-divider"></div>
		</>
	);
};

export default AboutUs;
