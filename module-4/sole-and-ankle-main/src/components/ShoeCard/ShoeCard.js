import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
	// There are 3 variants possible, based on the props:
	//   - new-release
	//   - on-sale
	//   - default
	//
	// Any shoe released in the last month will be considered
	// `new-release`. Any shoe with a `salePrice` will be
	// on-sale. In theory, it is possible for a shoe to be
	// both on-sale and new-release, but in this case, `on-sale`
	// will triumph and be the variant used.
	// prettier-ignore
	const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'
	// let flag = {};
	// switch (variant) {
	// 	case "on-sale":
	// 		flag = {
	// 			text: "Sale",
	// 			backgroundColor: COLORS.primary,
	// 		};
	// 		break;
	// 	case "new-release":
	// 		flag = {
	// 			text: "Just Released!",
	// 			backgroundColor: COLORS.secondary,
	// 		};
	// 		break;
	// 	default:
	// 		break;
	// }

	return (
		<Link href={`/shoe/${slug}`}>
			<Wrapper>
				<ImageWrapper>
					<Image alt="" src={imageSrc} />
					{/* {flag && <Flag {...flag}>{flag.text}</Flag>} */}
					{variant === "on-sale" && <SaleFlag>Sale</SaleFlag>}
					{variant === "new-release" && <NewFlag>Just Released!</NewFlag>}
				</ImageWrapper>
				<Spacer size={12} />
				<Row>
					<Name>{name}</Name>
					<Price
						// className={variant === "on-sale" && "strike-text"}
						style={{
							"--color": variant === "on-sale" ? COLORS.gray[700] : "inherit",
							"--text-decoration": variant === "on-sale" ? "line-through" : undefined,
						}}
					>
						{formatPrice(price)}
					</Price>
				</Row>
				<Row>
					<ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
					{variant === "on-sale" && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
				</Row>
			</Wrapper>
		</Link>
	);
};

const Flag = styled.div`
	position: absolute;
	right: -4px;
	top: 12px;
	/* background: ${(props) => props.backgroundColor}; */
	color: ${COLORS.white};
	border-radius: 4px;
	padding: 8px 16px;
	font-size: ${14 / 18}rem;
	font-weight: ${WEIGHTS.bold};
	line-height: 32px;
`;

const SaleFlag = styled(Flag)`
	background: ${COLORS.primary};
`;
const NewFlag = styled(Flag)`
	background: ${COLORS.secondary};
`;

const Link = styled.a`
	text-decoration: none;
	color: inherit;
	display: flex;
`;

const Wrapper = styled.article`
	flex-direction: column;
	/* flex: 0 1 344px; */
`;

const ImageWrapper = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 16px;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1rem;
`;

const Name = styled.h3`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.gray[900]};
`;

const Price = styled.span`
	color: var(--color);
	text-decoration: var(--text-decoration);
	/* &.strike-text {
		text-decoration: line-through;
		color: ${COLORS.gray[700]};
	} */
`;

const ColorInfo = styled.p`
	color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.primary};
`;

export default ShoeCard;
