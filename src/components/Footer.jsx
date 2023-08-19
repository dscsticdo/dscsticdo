import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaLinkedin,
	FaEnvelope,
	FaDiscord,
} from "react-icons/fa";

const Footer = () => {
	// const isMobile = window.innerHeight >= 768;
	// console.log(isMobile);
	const links = [
		{
			icon: <FaFacebook size={24} />,
			link: "https://www.facebook.com/dscsticdo",
			color: "facebook",
		},
		{
			icon: <FaInstagram size={24} />,
			link: "https://www.instagram.com/dscsticdo",
			color: "instagram",
		},
		{
			icon: <FaDiscord size={24} />,
			link: "https://discord.gg/B3MMssxTgm",
			color: "discord",
		},
		{
			icon: <FaTwitter size={24} />,
			link: "https://www.twitter.com/dscsticdo",
			color: "twitter",
		},
		{
			icon: <FaYoutube size={24} />,
			link: "https://www.youtube.com/channel/UCdtdu9-m3cL0BzYtyqzjAAg",
			color: "youtube",
		},
		{
			icon: <FaLinkedin size={24} />,
			link: "https://www.linkedin.com/company/google-developer-student-clubs-sti-college-cagayan-de-oro",
			color: "linkedin",
		},
		{
			icon: <FaEnvelope size={24} />,
			link: "mailto:dsc.cdosti@gmail.com",
			color: "email",
		},
	];

	const testLinks = [
		{
			sectionName: "second--section",
			sectionLinkName: "supporters-link",
			heading: "Supporters",
			linkOne: "https://developers.google.com/",
			linkOneName: "Google Developers",
			linkTwo: "https://developers.google.com/community/dsc",
			linkTwoName: "Google Developer Student Clubs",
		},
		{
			sectionName: "third--section",
			sectionLinkName: "learn-links",
			heading: "Learn",
			linkOne: "https://developers.google.com/learn/pathways",
			linkOneName: "Google Developer Pathways",
			linkTwo: "https://www.qwiklabs.com/",
			linkTwoName: "Qwiklabs Hands-On Cloud Training",
		},
		{
			sectionName: "fourth--section",
			sectionLinkName: "contact-links",
			heading: "Contact",
			linkOne:
				"https://www.google.com/maps/place/STI+College/@8.4769383,124.6482568,19.83z/data=!4m6!3m5!1s0x32fff30c876b031b:0x94b51dfa993fd748!8m2!3d8.4770339!4d124.6485548!16s%2Fg%2F1hc1n7b56?entry=ttu",
			linkOneName:
				"Mortola St, Corner J. R. Borja St 9000 Cagayan de Oro, Philippines",
			linkTwo: "mailto:dscsticdo@gmail.com",
			linkTwoName: "dsc.cdosti@gmail.com",
		},
	];

	return (
		<>
			<div className="container mx-auto" name="contact">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-content-center h-screen">
					<div className="first--section">
						{/* <h1 className="text-xl text-center pb-6">Links</h1> */}
						<div className="links--image flex flex-col items-center justify-center">
							<img
								src="img/assets/gdscsticdo-transparent.png"
								alt="gdsc sti cdo logo"
								className="w-[250px]"
							/>
						</div>
						<div className="socials flex items-center justify-center py-3">
							<ul className="flex">
								{links.map((link, index) => {
									return (
										<li
											key={index}
											className="px-2 duration-300 hover:animate-bounce"
										>
											<a
												href={link.link}
												className={link.color}
												target="_blank"
												rel="noreferrer"
											>
												{link.icon}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					{testLinks.map((link, index) => {
						return (
							<div
								key={index}
								className={`${link.sectionName} flex flex-col items-center`}
							>
								<h1 className="text-xl text-center pb-3">{link.heading}</h1>
								<a
									href={link.linkOne}
									className="pb-1 text-center text-gray-500 hover:text-blue-600"
									target="_blank"
									rel="noreferrer"
								>
									<p>{link.linkOneName}</p>
								</a>
								<a
									href={link.linkTwo}
									className="text-gray-500 hover:text-blue-600"
									target="_blank"
									rel="noreferrer"
								>
									<p>{link.linkTwoName}</p>
								</a>
							</div>
						);
					})}
				</div>
			</div>
			<div className="credits border-t-4 border-blue-600 py-2">
				<p className="text-center text-sm">
					&copy; 2023 GDSC STI CDO. All Rights Reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
