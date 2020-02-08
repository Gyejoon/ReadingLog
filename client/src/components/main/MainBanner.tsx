import React from 'react';
import styled from 'styled-components';
import { MainBannerImage } from 'static/svg';
import MainSearch from './MainSearch';

const MainBannerBlock = styled.div`
  display: flex;
  .wrapper {
    padding: 150px 150px 0 570px;
    p {
      font-size: 55px;
      color: #fff;
    }
  }
  svg {
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
      <MainBannerImage />
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
