import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import { QUERIES } from "../../constants.js";

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
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
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
			<SportStoryContainer key={data.id}>
            	<MiniStory {...data} />
			</SportStoryContainer>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media(${QUERIES.tabletAndUp}) {
	gap: 64px;
  	grid-template-columns: minmax(0, auto);
  }

  @media(${QUERIES.desktopAndUp}) {
	gap: 0;
  	grid-template-columns: 1fr minmax(0px, 1fr);
  }
`;

const MarketsSection = styled.section`
	@media(${QUERIES.desktopAndUp}) {
		border-right: 1px solid var(--color-gray-300);
		margin-right: 16px;
		padding-right: 16px;
	}
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section``;

const SportStoryContainer = styled.div`
  min-width: 220px;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 16px;

  @media(${QUERIES.tabletAndUp}) {
	display: flex;
	grid-template-columns: revert;
	overflow: auto;
  }
`;

export default SpecialtyStoryGrid;
