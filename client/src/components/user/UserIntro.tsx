import React from 'react';
import styled from 'styled-components';
import { userPageBanner, userThumbnail } from 'static/images';
import theme from 'lib/styles/theme';
import pallete from 'lib/styles/palette';

interface Props {}

const UserIntro: React.SFC<Props> = () => {
  return (
    <Block>
      <div className="banner-wrapper">
        <img src={userPageBanner} alt={'banner'} />
      </div>
      <ProfileWrapper>
        <img src={userThumbnail} alt="thumbnail" />
        <div className="info-wrapper">
          <p>우종규</p>
          <span>베르나르 베르베르를 좋아하는 독자 1인입니다ㅎㅎ</span>
        </div>
      </ProfileWrapper>
      <div className="navigate-wrapper">
        <span>정보</span>
        <span>내 피드</span>
      </div>
    </Block>
  );
};

const Block = styled.div`
  position: relative;
  height: 312px;
  border-bottom: 1px solid ${theme.borderColor};

  .banner-wrapper {
    position: relative;
    height: 138px;

    > img {
      width: 100%;
      height: 138px;
      display: block;
      position: relative;
      z-index: -1;
      object-fit: cover;
    }
  }

  .navigate-wrapper {
    display: flex;
    margin: 3.2rem 0 0 20%;
    bottom: 0;

    span {
      font-size: 14px;
      font-weight: 600;
      border-bottom: 2px solid ${pallete.blue.bright};
      margin-right: 22%;
      width: 58px;
      padding: 0 0 0.6rem 0;
      text-align: center;
    }
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  margin: -50px 0 0 20%;

  img {
    width: 124px;
    height: 124px;
    object-fit: cover;
    border-radius: 50%;
    border: 9px solid white;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    margin: 64px 0 0 12px;

    p {
      font-weight: 600;
      font-size: 18px;
      margin: 0 0 12px 0;
    }

    span {
      font-size: 12px;
      color: #b5b5b5;
    }
  }
`;

export default UserIntro;
