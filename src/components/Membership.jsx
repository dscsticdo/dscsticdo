/* eslint-disable react/prop-types */

import MembershipCard from "./MembershipCard";
import BadgeCard from "./BadgeCard";
import { MembershipCardData, BadgeCardData } from "../data/MembershipData";
import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });

export const Membership = () => {
	const MembershipItem = MembershipCardData.map((item) => {
		return <MembershipCard key={item.id} item={item} />;
	});

	const BadgeItem = BadgeCardData.map((item) => {
		return <BadgeCard key={item.id} item={item} />;
	});

	return (
		<div name="Membership" className="p-12 pb-5">
			<h1 className="text-xl text-center">
				Chapter Membership,{" "}
				<span className="font-extrabold red"> Grab yours Now!</span>
			</h1>
			<div className="flex flex-col">
				<div className="pt-5">
					<h1 className="text-lg">How to be a Chapter Member at DSC STI CDO</h1>
					<div id="accordion--Membership">{MembershipItem}</div>
				</div>

				<div className="pt-5">
					<h1 className="text-lg">
						Follow these steps to get a free Members Badge
					</h1>
					<div id="accordion--Badge">{BadgeItem}</div>
				</div>
			</div>
		</div>
	);
};

export default Membership;
