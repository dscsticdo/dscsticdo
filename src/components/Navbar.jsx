import { useState } from "react";
import Banner from "/img/assets/banner.png";

import {
	FaBars,
	FaTimes,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaFacebook,
} from "react-icons/fa";

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false);
	const links = [
		{
			name: "Home",
			link: "/home",
		},

		{
			name: "About Us",
			link: "/company",
		},
		{
			name: "Membership",
			link: "/resources",
		},
		{
			name: "Events",
			link: "/about",
		},
		{
			name: "Teams",
			link: "/contact",
		},
		{
			name: "Partners",
			link: "/contact",
		},
	];

	const socials = [
		{
			name: "GitHub",
			link: "/",
			icon: <FaGithub size={30} />,
		},
		{
			name: "Instagram",
			link: "/",
			icon: <FaInstagram size={30} />,
		},
		{
			name: "LinkedIn",
			link: "/",
			icon: <FaLinkedinIn size={30} />,
		},
		{
			name: "Facebook",
			link: "/",
			icon: <FaFacebook size={30} />,
		},
	];

	function handleToggleNav() {
		setToggleNav((prevToggle) => !prevToggle);
	}

	const mapLinks = links.map((link, index) => {
		return (
			<li
				key={index}
				className={
					toggleNav
						? "py-6 text-2xl"
						: "cursor-pointer px-4 hover:text-blue-400 hover:font-medium"
				}
			>
				<a href={link.link}>{link.name}</a>
			</li>
		);
	});

	const mapSocials = socials.map((social, index) => {
		return (
			<li
				key={index}
				className="w-[160px] h-[60px] flex justify-between items-center px-4 ml-[-100px] hover:ml-[-1px] duration-300"
			>
				<a
					href={social.link}
					className="flex justify-between items-center w-full text-gray-300"
				>
					{social.name} {social.icon}
				</a>
			</li>
		);
	});

	return (
		<>
			<header name="home">
				<div className="sticky w-full h-[80px] flex justify-between items-center px-4">
					<div>
						<img
							src="/img/assets/gdscsticdo-transparent.png"
							alt="test"
							width={160}
						/>
					</div>

					{/* menu */}
					<ul className="hidden md:flex">{mapLinks}</ul>

					{/* hamburger */}
					<div className="md:hidden z-10" onClick={handleToggleNav}>
						{toggleNav ? <FaTimes /> : <FaBars />}
					</div>

					{/* mobile menu */}
					<ul
						className={
							toggleNav
								? "absolute top-0 left-0 w-full h-screen bg-[#414141] flex flex-col justify-center items-center"
								: "hidden"
						}
					>
						{mapLinks}
					</ul>

					{/* social icons */}
					{/* <div className="hidden lg:flex lg:fixed flex-col top-[35%] left-0">
					<ul>{mapSocials}</ul>
				</div> */}
				</div>

				{/* banner */}

				<img src={Banner} alt="banner" className="w-full" />
			</header>
		</>
	);
};

export default Navbar;
