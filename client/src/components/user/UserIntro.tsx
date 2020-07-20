import React from 'react';
import styled from 'styled-components';
import { userPageBanner, userThumbnail } from 'static/images';
import theme from 'lib/styles/theme';
import pallete from 'lib/styles/palette';
import useUserInfo from './hooks/useUserInfo';

interface Props {}

const UserIntro: React.SFC<Props> = () => {
  const { userInfo } = useUserInfo();
  const { data } = userInfo;

  if (!data) return null;

  const { profile } = data.user;

  return (
    <Block>
      <div className="banner-wrapper">
        <img src={userPageBanner} alt={'banner'} />
      </div>
      <ProfileWrapper>
        <img src={profile.thumbnail || userThumbnail} alt="thumbnail" />
        <div className="info-wrapper">
          <p>{profile.nickname}</p>
          <span>{profile.about || '소개글이 없습니다.'}</span>
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
    height: 156px;

    > img {
      width: 100%;
      height: 156px;
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
