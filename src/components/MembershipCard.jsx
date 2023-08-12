/* eslint-disable react/prop-types */
import React from "react";

const MembershipCard = (props) => {
	return (
		<div>
			<div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
				<h2 className="mb-0" id="accordionExample">
					<button
						className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
						type="button"
						data-te-collapse-init
						data-te-target={`#${props.target}`}
						aria-expanded="true"
						aria-controls={props.target}
					>
						{props.title}
						<span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path strokeLinecap="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
						</span>
					</button>
				</h2>
				<div
					id={props.target}
					className="!visible"
					data-te-collapse-item
					data-te-collapse-show
					aria-labelledby={props.id}
					data-te-parent="#accordion"
				>
					<div className="px-5 py-4">
						<div className="py-2">
							{props.content}
							<a
								href={props.link}
								rel="noreferrer"
								target="_blank"
								className="text-blue-600"
							>
								{props.linkName}
							</a>
						</div>
						<figure className="flex justify-center items-center py-2">
							<img
								src={`img/steps/${props.img}`}
								alt={props.imgAlt}
								className="w-3/4"
							/>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MembershipCard;
