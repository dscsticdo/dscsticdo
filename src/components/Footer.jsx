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
			link: "https://www.linkedin.com/company/dscsticdo",
			color: "linkedin",
		},
		{
			icon: <FaEnvelope size={24} />,
			link: "mailto: dscsticdo@gmail.com",
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
			linkTwo: "https://developers.google.com/",
			linkTwoName: "Google Developer Student Clubs",
		},
		{
			sectionName: "third--section",
			sectionLinkName: "learn-links",
			heading: "Learn",
			linkOne: "https://developers.google.com/",
			linkOneName: "Google Developers",
			linkTwo: "https://developers.google.com/",
			linkTwoName: "Google Developer Student Clubs",
		},
		{
			sectionName: "fourth--section",
			sectionLinkName: "contact-links",
			heading: "Contact",
			linkOne: "https://developers.google.com/",
			linkOneName:
				"Mortola St, Corner J. R. Borja St 9000 Cagayan de Oro, Philippines",
			linkTwo: "mailto:dscsticdo@gmail.com",
			linkTwoName: "dsc.cdosti@gmail.com",
		},
	];

	return (
		<>
			<div className="container mx-auto">
				<div className="grid md:grid-cols-4 gap-4 place-content-center h-96">
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
										<li key={index} className="px-2">
											<a href={link.link} className={link.color}>
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
								className={`${link.sectionName} flex flex-col items-center `}
							>
								<h1 className="text-xl text-center pb-3">{link.heading}</h1>
								<a
									href={link.linkOne}
									className="pb-1 text-center text-gray-500 hover:text-blue-600"
								>
									<p>{link.linkOneName}</p>
								</a>
								<a
									href={link.linkTwo}
									className="text-gray-500 hover:text-blue-600"
								>
									<p>{link.linkTwoName}</p>
								</a>
							</div>
						);
					})}
					{/* <div className="second--section">
						<div className="supporters-link flex flex-col items-center justify-center">
							<h1 className="text-xl text-center pb-3">Supporters</h1>
							<a href="https://developers.google.com/" className="pb-1">
								<p>Google Developers</p>
							</a>
							<a href="https://developers.google.com/">
								<p>Google Developer Student Clubs</p>
							</a>
						</div>
					</div>
				 */}
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
