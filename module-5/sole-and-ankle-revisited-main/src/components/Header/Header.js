import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<DesktopNav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
					<NavLink href="/collections">Collections</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</DesktopNav>
				<Filler />

				{/* Mobile */}
				<MobileActions>
					<UnstyledButton>
						<Icon id="shopping-bag" />
						<VisuallyHidden>Open Cart</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton>
						<Icon id="search" />
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu" />
						<VisuallyHidden>Open Menu</VisuallyHidden>
					</UnstyledButton>
				</MobileActions>
			</MainHeader>

			<MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
		</header>
	);
};

const MainHeader = styled.div`
	--padding: 18px 32px;
	display: flex;
	align-items: baseline;
	padding: var(--padding);
	/* height: 72px; */
	border-bottom: 1px solid var(--color-gray-900);
	overflow: auto;

	@media ${QUERIES.tabletAndSmaller} {
		border-top: 4px solid var(--color-gray-900);
		align-items: baseline;
		justify-content: space-between;
	}
	@media ${QUERIES.mobileAndSmaller} {
		--padding: 18px 16px;
	}
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: clamp(32px, 2vw, 48px);
	margin: 0px clamp(32px, 2vw, 48px);

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const MobileActions = styled.nav`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		display: flex;
		gap: clamp(17px, 4vw, 32px);
	}
`;

const LogoWrapper = styled.div`
	flex: 1;
	@media ${QUERIES.tabletAndSmaller} {
		flex: revert;
	}
`;

const Filler = styled.div`
	flex: 1;
	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: var(--font-weight-medium);

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

export default Header;
