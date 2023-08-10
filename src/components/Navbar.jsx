import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false);
	const links = [
		{
			name: "Home",
			link: "/home",
		},
		{
			name: "Company",
			link: "#company",
		},
		{
			name: "Resources",
			link: "/resources",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];

	const mapLinks = links.map((link, index) => {
		return (
			<li key={index} className="p-4 cursor-pointer ">
				<a href={link.link}>{link.name}</a>
			</li>
		);
	});

	function handleToggleNav() {
		setToggleNav(!toggleNav);
	}

	console.log(toggleNav);

	return (
		<div className="sticky top">
			<div
				className="flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
				id="/home"
			>
				<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Navbar</h1>
				<ul className="hidden md:flex">
					{mapLinks}
					{/* <li className="p-4">Home</li>
				<li className="p-4">Company</li>
				<li className="p-4">Resources</li>
				<li className="p-4">About</li>
				<li className="p-4">Contact</li> */}
				</ul>

				<div onClick={handleToggleNav} className="block md:hidden">
					{toggleNav ? (
						<AiOutlineClose size={20} />
					) : (
						<AiOutlineMenu size={20} />
					)}
				</div>

				<div
					className={
						toggleNav
							? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#000300] ease-in-out duration-500"
							: "fixed left-[-100%]"
					}
				>
					<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
						Navbar
					</h1>
					<ul className="uppercase p-4">{mapLinks}</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
