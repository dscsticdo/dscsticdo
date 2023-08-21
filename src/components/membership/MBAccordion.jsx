/* eslint-disable react/prop-types */

const MBAccordion = (props) => {
	// use toLowercase() to make the search case insensitive

	let content = props.item.content.toLowerCase();
	const successMessage =
		"Success! you're officially part now of the GDSC STI CDO";
	const BadgeMessage =
		"Success! you earn the Google Developer Student Clubs Member Badge!";
	if (content.includes(successMessage.toLowerCase())) {
		content = <span className="font-bold">{props.item.content}</span>;
	} else if (content.includes(BadgeMessage.toLowerCase())) {
		content = <span className="font-bold">{props.item.content}</span>;
	} else {
		content = props.item.content;
	}

	return (
		<div>
			<div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
				<h2 className="mb-0" id={props.item.id}>
					<button
						className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
						type="button"
						data-te-collapse-init
						data-te-target={`#${props.item.target}`}
						aria-expanded="false"
						aria-controls={props.item.target}
					>
						{props.item.title}
						<span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</span>
					</button>
				</h2>
				<div
					id={props.item.target}
					className="!visible border-0"
					data-te-collapse-item
					data-te-collapse-show
					aria-labelledby={props.item.id}
					data-te-parent="#accordion--Membership"
				>
					<div className="px-5 py-4">
						<div className="py-2">
							{content}
							<a
								href={props.item.link}
								rel="noreferrer"
								target="_blank"
								className="text-blue-600 hover:underline"
							>
								{props.item.linkName}
							</a>
						</div>
						<figure className="flex justify-center items-center py-2">
							<img
								src={`img/steps/${props.item.img}`}
								alt={props.item.imgAlt}
								className="w-2/4"
							/>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MBAccordion;
