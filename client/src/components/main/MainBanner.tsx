import React from 'react';
import styled from 'styled-components';

import { mainBanner } from 'static/images';
import media from 'lib/styles/media';
import MainSearch from './MainSearch';
import MainReview from './MainReview';

const MainBannerBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    .banner-desc {
      font-size: 54px;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: 600;
      ${media.medium} {
        font-size: 36px;
      }
      color: #fff;
    }
  }

  img {
    width: 100%;
    height: 60%;
    padding-top: 74px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

interface MainBannerProps {}

const MainBanner: React.SFC<MainBannerProps> = () => {
  return (
    <MainBannerBlock>
      <img src={mainBanner} alt={'banner'} />
      <div className="wrapper">
        <p className="banner-desc">
          어떤 책을 찾으시나요?
          <br />
          우리가 다 찾아줄게요.
        </p>
        <MainSearch />
        <MainReview />
      </div>
    </MainBannerBlock>
  );
};

export default MainBanner;
