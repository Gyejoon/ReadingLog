import React from 'react';
import styled from 'styled-components';

import { mainBanner } from 'static/images';
import MainSearch from './MainSearch';
import media from 'lib/styles/media';

const MainBannerBlock = styled.div`
  display: flex;

  ${media.small} {
    display: none;
  }

  .wrapper {
    position: relative;
    top: 100px;
    left: 30%;

    p {
      font-size: 55px;
      color: #fff;
    }
  }

  img {
    width: 100%;
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
        <p>
          어떤 책을 찾으시나요?
          <br />
          우리가 다 찾아줄게요.
        </p>
        <MainSearch />
      </div>
    </MainBannerBlock>
  );
};

export default MainBanner;
