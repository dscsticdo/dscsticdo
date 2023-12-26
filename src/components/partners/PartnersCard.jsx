/* eslint-disable react/prop-types */

import { Tooltip, initTE } from "tw-elements";
import { useEffect } from "react";
const PartnersCard = ({ image, alt, link, tooltip }) => {
	useEffect(() => {
		initTE({ Tooltip });
	}, []);
	return (
		<>
			<div
				data-te-toggle="tooltip"
				data-te-placement="top"
				data-te-ripple-init
				data-te-ripple-color="light"
				title={tooltip}
				data-aos="zoom-in-up"
			>
				<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
					<div
						className="relative overflow-hidden bg-cover bg-no-repeat"
						data-te-ripple-init
						data-te-ripple-color="light"
					>
						<img
							className="rounded-t-lg w-[350px] h-[150px] object-contain object-center  px-1.5"
							src={`/dscsticdo/img/${image}`}
							alt={alt}
						/>
						<a href={link} className="cursor-pointer">
							<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default PartnersCard;
