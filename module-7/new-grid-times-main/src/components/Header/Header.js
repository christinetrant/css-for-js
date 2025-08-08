import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, Underline, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
	const placeholderUrl = "https://localhost:3000";
	return (
		<header>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<ActionGroupMobile>
						<button>
							<User size={24} />
						</button>
					</ActionGroupMobile>

					<DesktopItem>
						<Logo />
					</DesktopItem>
					<DesktopItemSubscribe>
						<SubscribeActions>
							<Button>
								Subscribe
							</Button>
							<LoginLink href={placeholderUrl}>Already a subscriber?</LoginLink>
						</SubscribeActions>
					</DesktopItemSubscribe>
				</Row>
			</SuperHeader>
			<MainHeader>
				<Logo />
			</MainHeader>
		</header>
	);
};

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;
	@media ${QUERIES.laptopAndUp} {
		/* Background takes initial bg */
		background: revert;
		color: var(--color-gray-900);
		padding-bottom: 72px;
	}
`;

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;

	/* Josh Solution */
	/* @media ${QUERIES.tabletAndUp} {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		justify-content: revert;
		align-items: revert;
	} */
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	@media ${QUERIES.laptopAndUp} {
		flex: 1;
	}

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`;

const DesktopItem = styled.div`
	display: none;
	@media ${QUERIES.laptopAndUp} {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-end;
	}
`;

const DesktopItemSubscribe = styled(DesktopItem)`
	@media ${QUERIES.laptopAndUp} {
		flex: 1;
	}
`;

const SubscribeActions = styled.div`
	display: none;
	@media ${QUERIES.laptopAndUp} {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
`;

const ActionGroupMobile = styled(ActionGroup)`
	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`;

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;
	@media ${QUERIES.tabletAndUp} {
		margin-top: 48px;
		margin-bottom: 32px;
	}
	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`;

const LoginLink = styled.a`
	font-size: 0.875rem;
	color: var(--color-gray-900);
	text-decoration: underline;
	font-style: italic;
	align-self: end;
	&:hover {
		text-decoration: none;
	}

`;
export default Header;
