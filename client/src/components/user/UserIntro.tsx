import React from 'react';
import styled from 'styled-components';
import { userPageBanner, userThumbnail } from 'static/images';

const UserIntroBlock = styled.div`
  height: 224px;
  border-bottom: 1px #e3e3e3;

  .banner-wrapper {
    position: relative;
    height: 112px;

    > img {
      width: 100%;
      height: 112px;
      display: block;
      position: relative;
      z-index: -1;
      object-fit: cover;
    }
  }

  .profile-wrapper {
    display: flex;
    margin: -50px 0 0 20%;

    img {
      width: 96px;
      height: 96px;
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
  }
`;

interface UserIntroProps {}

const UserIntro: React.SFC<UserIntroProps> = () => {
  return (
    <UserIntroBlock>
      <div className="banner-wrapper">
        <img src={userPageBanner} alt={'banner'} />
      </div>
      <div className="profile-wrapper">
        <img src={userThumbnail} alt="thumbnail" />
        <div className="info-wrapper">
          <p>우종규</p>
          <span>베르나르 베르베르를 좋아하는 독자 1인입니다ㅎㅎ</span>
        </div>
      </div>
    </UserIntroBlock>
  );
};

export default UserIntro;
