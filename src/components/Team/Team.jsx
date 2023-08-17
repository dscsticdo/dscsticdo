import { keyPeople, coreTeam } from "../../data/TeamCardData";
import { CoreTeamDropDownData } from "../../data/CoreTeamDropDownData";
import TeamCard from "./TeamCard";
import CoreTeamDropDown from "./CoreTeamDropDown";

import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });

const Team = () => {
	// key people
	const teamCardItems = keyPeople.map((item) => {
		return <TeamCard key={item.id} card={item} />;
	});

	// core-team 2021
	const CoreTeam2021Items = coreTeam.coreTeam2021.map((item) => {
		return <TeamCard key={item.id} card={item} />;
	});

	// core-team 2020
	const CoreTeam2020Items = coreTeam.coreTeam2020.map((item) => {
		return <TeamCard key={item.id} card={item} />;
	});

	const CoreTeamDropDownItems = CoreTeamDropDownData.map((item) => {
		let cards;
		if (item.id === 1) {
			cards = CoreTeam2021Items;
		} else if (item.id === 2) {
			cards = CoreTeam2020Items;
		}
		return <CoreTeamDropDown key={item.id} dropdown={item} cards={cards} />;
	});

	// const CoreTeam2020Items = coreTeam.coreTeam2020.map((item) => {
	// 	return <CoreTeam2020Card key={item.id} card={item} />;
	// });

	return (
		<>
			<div name="events" className="p-12">
				<h1 className="text-xl text-center">Meet The Team</h1>
				<h1 className="text-xl text-left">Key People</h1>
				<div className="py-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
					{/* Key people */}
					{teamCardItems}
				</div>

				<div className="flex flex-col">
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
