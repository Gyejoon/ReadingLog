import React from 'react';
import styled from 'styled-components';

import { mainBanner } from 'static/images';
import media from 'lib/styles/media';
import MainSearch from './MainSearch';
import MainReview from './MainReview';

const MainBannerBlock = styled.div`
  display: flex;
  width: 100%;
  ${media.small} {
    display: none;
  }

  .wrapper {
    margin-left: 23%;

    .banner-desc {
      font-size: 55px;
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

const MainBanner: React.FC<MainBannerProps> = () => {
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
