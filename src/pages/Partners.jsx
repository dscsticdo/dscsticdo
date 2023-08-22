import { PartnersData } from "../data/PartnersData";
import PartnersCard from "../components/partners/PartnersCard";

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
			<div name="partners" className="container mx-auto p-12 pb-24">
				<h1 className="text-xl text-center pb-12">Partners</h1>
				<div className="flex justify-center items-center">
					<div className="grid place-items-center place-content-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
						{partnerCards}
					</div>
				</div>
			</div>
			<div className="b-example-divider"></div>
		</>
	);
};

export default Partners;
