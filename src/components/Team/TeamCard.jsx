/* eslint-disable react/prop-types */
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const TeamCard = (props) => {
	return (
		<>
			<div
				className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
				data-aos="fade-in"
				data-aos-duration="500"
			>
				<div
					className="relative overflow-hidden bg-cover bg-no-repeat teams-pic"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<figure>
						<img
							className="rounded-t-lg object-contain"
							src={`/img/${props.card.image}`}
							alt={props.card.position}
						/>
					</figure>
					<a href={props.card.profileLink}>
						{/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div> remove default opacity */}
					</a>
				</div>

				<div className="p-6 flex flex-col items-center">
					<h5 className="mb-2 pb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 border-b-2 border-neutral-100  dark:border-neutral-600">
						{props.card.name}
					</h5>
					<h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
						{props.card.position}
					</h5>
					<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-justify">
						{props.card.details}
					</p>
					<div className="flex justify-start items-center gap-2 text-neutral-600">
						<LiaBirthdayCakeSolid
							className="animate-pulse ease-in-out text-red-600"
							size={25}
						/>
						{props.card.birthday}
					</div>
				</div>
			</div>
		</>
	);
};

export default TeamCard;
