import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
	return (
		<Wrapper>
			<MarketsSection>
				<SectionTitle
					cornerLink={{
						href: "/markets",
						content: "Visit Markets data »",
					}}
				>
					Markets
				</SectionTitle>
				<MarketCards>
					{MARKET_DATA.map((data) => (
						<MarketCard key={data.tickerSymbol} {...data} />
					))}
				</MarketCards>
			</MarketsSection>
			<SportsSection>
				<SectionTitle
					cornerLink={{
						href: "/sports",
						content: "Visit Sports page »",
					}}
				>
					Sports
				</SectionTitle>
				<SportsStories>
					<SportsStoriesRow>
						{SPORTS_STORIES.map((data) => (
							<MiniStory key={data.id} {...data} />
						))}
					</SportsStoriesRow>
				</SportsStories>
			</SportsSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
  --column-gap: 32px;
	display: grid;
	gap: 48px;
	@media ${QUERIES.laptopAndUp} {
		grid-template-columns: 1fr 1fr;
		gap: var(--column-gap);
	}
`;

const MarketsSection = styled.section`
@media ${QUERIES.laptopAndUp} {
	border-right: 1px solid var(--color-gray-300);
	margin-right: calc(var(--column-gap) / -2);
	padding-right: calc(var(--column-gap) / 2);
}
`;

const MarketCards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 16px;
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-columns: minmax(292px, 5fr);
		overflow-y: auto;
	}
`;

const SportsStoriesRow = styled.div`
	@media ${QUERIES.tabletAndUp} {
		display: flex;
		gap: 16px;
		max-width: 100%;
		overflow: auto;
	}
`;

export default SpecialtyStoryGrid;
