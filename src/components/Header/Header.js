import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
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
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
		  <ActionGroup>
			<button>
			  <Search size={24} />
			</button>
			<button>
			  <Menu size={24} />
			</button>
		  </ActionGroup>
        <Logo />
	  	<ButtonGroup>
	  		<Button>Subscribe</Button>
	  		<a href="/">Already a subscriber?</a>
	  	</ButtonGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media( ${QUERIES.desktopAndUp} ) {
	display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ButtonGroup = styled.div`
	display: none;

  a {
	font-size: ${ 14 / 16};
	text-decoration: underline;
	font-style: italic;
	color: var(--color-gray-900);
  }

  @media( ${QUERIES.desktopAndUp} ) {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  gap: 8px;
	  align-self: flex-end;
  }

`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  & > ${ActionGroup} {
	display: none;
  }

  @media( ${QUERIES.tabletAndUp} ) {
	  margin-top: 48px;
	  margin-bottom: 84px;
  }

  @media( ${QUERIES.desktopAndUp} ) {
	  justify-content: space-between;
	  margin-top: 16px;
	  margin-bottom: 72px;

	  & > ${ActionGroup} {
		display: flex;
	  }
  }
`;

export default Header;
