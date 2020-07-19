import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/Card';
import theme from 'lib/styles/theme';
import { userThumbnail } from 'static/images';

interface Props {}

const ReadingLogMyProfile: React.SFC<Props> = () => {
  return (
    <Card>
      <ProfileWrapper>
        <img src={userThumbnail} alt="thumbnail" />
        <div className="profile-info">
          <span className="nickname">우종규</span>
          <div className="hash-tag">
            <span>#소설</span>
            <span>#자기계발</span>
            <span>#인문</span>
          </div>
        </div>
      </ProfileWrapper>
      <Footer>
        <div className="network">
          <span className="value">21</span>
          <span className="title">리더스</span>
        </div>
        <div className="network">
          <span className="value">23</span>
          <span className="title">팔로잉</span>
        </div>
        <div className="network">
          <span className="value">23</span>
          <span className="title">팔로워</span>
        </div>
      </Footer>
    </Card>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    .nickname {
      font-weight: 600;
      font-size: 20px;
    }

    .hash-tag {
      font-size: 14px;
      color: #b5b5b5;

      > span {
        margin-right: 4px;
      }
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${theme.borderColor};

  .network {
    margin: 0.6rem 0.3rem 0 0.3rem;

    .value {
      font-weight: 600;
      margin-right: 0.3rem;
      font-size: 16px;
    }

    .title {
      color: #acacac;
      font-size: 14px;
    }
  }
`;

export default ReadingLogMyProfile;
