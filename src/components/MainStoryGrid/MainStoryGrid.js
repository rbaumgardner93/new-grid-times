import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import { QUERIES } from '../../constants';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
			<VerticalStoryWrapper key={story.id}>
            	<SecondaryStory {...story} />
			</VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
			<VerticalStoryWrapper key={story.id}>
            	<OpinionStory key={story.id} {...story} />
			</VerticalStoryWrapper>
          ))}
        </OpinionStoryList>
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
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media(${QUERIES.tabletAndUp}) {
	grid-template-areas:
	  'main-story main-story main-story secondary-stories'
	  'main-story main-story main-story secondary-stories'
	  'advertisement advertisement advertisement advertisement'
	  'opinion-stories opinion-stories opinion-stories opinion-stories';
  }
  gap: 48px 0;

  @media(${QUERIES.desktopAndUp}) {
	grid-template-areas:
	  'main-story main-story secondary-stories opinion-stories'
	  'main-story main-story secondary-stories opinion-stories'
	  'main-story main-story advertisement advertisement';
	gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  margin-bottom: 48px;

  @media(${QUERIES.tabletAndUp}) {
  	border-right: 1px solid var(--color-gray-300);
	padding-right: 16px;
	margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media(${QUERIES.desktopAndUp}) {
	padding-right: 16px;
	margin-right: 16px;
	border-right: 1px solid var(--color-gray-300);
  }
`;

const VerticalStoryWrapper = styled.div`
	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: 16px;
		margin-bottom: 16px;
	}
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const OpinionStoryList = styled(StoryList)`
  @media(${QUERIES.tabletOnly}) {
	  display: grid;
	  grid-auto-flow: column;
	  grid-template-columns: repeat(4, 1fr);
	  gap: 32px;

	  & ${VerticalStoryWrapper} {
		  border: none;
		  margin: 0;
		  padding: 0;
	  }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media(${QUERIES.desktopAndUp}) {
	padding-top: 16px;
	margin-top: 16px;
	border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
