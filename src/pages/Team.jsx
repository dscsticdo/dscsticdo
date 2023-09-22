import { keyPeople, coreTeam } from "../data/TeamCardData";
import { CoreTeamAccordionData } from "../data/CoreTeamAccordionData";
import TeamCard from "../components/team/TeamCard";
import CoreTeamAccordion from "../components/team/CoreTeamAccordion";

import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });

const Team = () => {
	// key people
	const teamCardItems = keyPeople.map((item, index) => {
		return <TeamCard key={index} card={item} />;
	});
	// core-team 2021
	const CoreTeam2021Items = coreTeam.coreTeam2021.map((item, index) => {
		return <TeamCard key={index} card={item} />;
	});
	// core-team 2020
	const CoreTeam2020Items = coreTeam.coreTeam2020.map((item, index) => {
		return <TeamCard key={index} card={item} />;
	});
	// core-team dropdown
	const CoreTeamDropDownItems = CoreTeamAccordionData.map((item) => {
		let cards;
		if (item.id === 1) {
			cards = CoreTeam2020Items;
		} else if (item.id === 2) {
			cards = CoreTeam2021Items;
		}
		return <CoreTeamAccordion key={item.id} dropdown={item} cards={cards} />;
	});

	return (
		<>
			<div name="team">
				<div className="p-12">
					<h1 className="text-xl text-center">Meet The Team</h1>
					<h1 className="text-xl text-left">Key People</h1>
					<div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{/* Key people */}
						{teamCardItems}
					</div>
				</div>
				<div className="flex flex-col border-t-4 border-blue-600 p-12">
					<div id="accordion-CoreTeam">
						{/* Accordion - Core Team 2021 */}
						{CoreTeamDropDownItems}
					</div>
				</div>
			</div>
			<div className="b-example-divider"></div>
		</>
	);
};

export default Team;
