import { PartnersData } from "../data/PartnersData";
import PartnersCard from "./PartnersCard";

const Partners = () => {
	const partnerCards = PartnersData.map((partner) => {
		return (
			<PartnersCard
				key={partner.id}
				image={partner.image}
				tooltip={partner.tooltip}
			/>
		);
	});
	return (
		<>
			<div name="Partners" className="container mx-auto p-12">
				<h1 className="text-xl text-center pb-6">Partners</h1>
				<div className="flex justify-center items-center">
					<div className="grid place-items-center content-center grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
						{partnerCards}
					</div>
				</div>
			</div>
		</>
	);
};

export default Partners;
