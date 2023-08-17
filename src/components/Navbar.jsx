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

import { Dropdown, initTE } from "tw-elements";
initTE({ Dropdown });

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
				className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1 xs:pl-0 xs:pr-0 xs:border-b-2 xs:hover:border-blue-600 lg:border-b-0"
				data-te-nav-item-ref
			>
				<a
					onClick={handleToggleNav}
					href={link.link}
					className={
						toggleNav
							? "active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
							: "p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
					}
					// aria-current="page"
					data-te-nav-link-ref
				>
					{link.name}
				</a>
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
				{/* banner */}
				<nav
					className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
					data-te-navbar-ref
				>
					<div className="flex w-full flex-wrap items-center justify-between px-3">
						<div className="ml-2">
							<a
								className="text-xl text-neutral-800 dark:text-neutral-200"
								href="#"
							>
								<img
									src="/img/assets/gdscsticdo-transparent.png"
									alt="gdscsticdo-logo"
									loading="lazy"
									width={160}
								/>
							</a>
						</div>

						<button
							className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
							type="button"
							data-te-collapse-init
							data-te-target="#navbarSupportedContent2"
							aria-controls="navbarSupportedContent2"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="[&>svg]:w-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-7 w-7"
								>
									<path
										fillRule="evenodd"
										d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</button>

						<div
							className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
							id="navbarSupportedContent2"
							data-te-collapse-item
						>
							<ul
								className="list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row items-center justify-center"
								data-te-navbar-nav-ref
							>
								{mapLinks}
							</ul>
						</div>
					</div>
				</nav>

				<img src={Banner} alt="banner" className="w-full" />
			</header>
		</>
	);
};

export default Navbar;
