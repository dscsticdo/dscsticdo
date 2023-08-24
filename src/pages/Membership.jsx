/* eslint-disable react/prop-types */
import MBAccordion from "../components/membership/MBAccordion";
import { MembershipCardData, BadgeCardData } from "../data/MembershipData";
import { Collapse, initTE } from "tw-elements";
import { useEffect } from "react";

const Membership = () => {
	useEffect(() => {
		initTE({ Collapse });
	}, []);
	// Membership
	const MembershipItem = MembershipCardData.map((object) => {
		return <MBAccordion key={object.id} item={object} />;
	});
	// Badge
	const BadgeItem = BadgeCardData.map((object) => {
		return <MBAccordion key={object.id} item={object} />;
	});

	return (
		<>
			<div name="membership" className="md:container md:mx-auto p-12 pb-24">
				<h1 className="text-xl text-center mb-5" data-aos="slide-up">
					Chapter Membership,{" "}
					<span className="font-extrabold red"> Grab yours Now!</span>
				</h1>
				<div className="flex flex-col">
					<div className="pt-5">
						<h1 className="text-lg">
							How to be a Chapter Member at DSC STI CDO
						</h1>
						<div id="accordion--Membership">{MembershipItem}</div>
					</div>
					<div className="pt-10">
						<h1 className="text-lg">
							Follow these steps to get a free Members Badge
						</h1>
						<div id="accordion--Badge">{BadgeItem}</div>
					</div>
				</div>
			</div>
			<div className="b-example-divider"></div>
		</>
	);
};

export default Membership;
