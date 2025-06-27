import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
	return (
		<Wrapper>
			{SHOES.map((shoe) => (
				<ShoeWrapper key={shoe.slug}>
					<ShoeCard {...shoe} />
				</ShoeWrapper>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* gap: 32px; */
	margin: -16px;
`;

const ShoeWrapper = styled.div`
	/* flex: 1 1 244px; */
	min-width: 244px;
	flex: 1;
	margin: 16px;
`;

export default ShoeGrid;
