import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<SecondaryStory key={story.id} {...story} />
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<StoryListOpinion>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStory key={story.id} {...story} />
					))}
				</StoryListOpinion>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-columns: 2fr 1fr;
		/* grid-template-rows: repeat(3, 1fr); */
		grid-template-areas:
			"main-story secondary-stories"
			"advertisement advertisement"
			"opinion-stories opinion-stories";
		gap: 48px 32px;
	}

	@media ${QUERIES.laptopAndUp} {
		grid-template-columns: 5fr 4fr 3fr;

		/* grid-template-rows: repeat(3, 1fr); */
		grid-template-areas:
			"main-story secondary-stories opinion-stories"
			"main-story advertisement advertisement";
		gap: 32px;
	}
	@media ${QUERIES.desktopAndUp} {
		grid-template-columns: minmax(477px,3fr) minmax(386px, 2fr) minmax(273px, 1fr);
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		border-right: 1px solid var(--color-gray-300);
		margin-right: calc(32px / -2);
		padding-right: calc(32px / 2);
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;

	@media ${QUERIES.tabletAndUp} {
		border-right: 1px solid var(--color-gray-300);
		margin-right: calc(32px / -2);
		padding-right: calc(32px / 2);
		margin-top: -12px;
	}
`;

const StoryList = styled.div`
	--grid-columns: 1fr;
	display: flex;
	flex-direction: column;
	background-color: var(--color-gray-300);
	gap: 1px;

	@media ${QUERIES.tabletOnly} {
		display: grid;
		grid-template-columns: var(--grid-columns);
		gap: 1px;
	}
`;

const StoryListOpinion = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		--grid-columns: repeat(4, 1fr);
		gap: 32px;
		background: revert;
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
		@media ${QUERIES.tabletAndUp} {
			margin-top: -8px;
		
	}
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.tabletAndUp} {
		border-top: 1px solid var(--color-gray-300);
		margin-top: calc(32px / -2);
		padding-top: calc(32px / 2);
	}
`;

export default MainStoryGrid;
