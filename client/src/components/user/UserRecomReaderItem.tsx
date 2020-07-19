import React from 'react';
import styled from 'styled-components';
import { userThumbnail } from 'static/images';
import Button from 'components/common/Button';

interface Props {}

const UserRecomReaderItem: React.SFC<Props> = () => {
  return (
    <Block>
      <img src={userThumbnail} alt="thumbnail" />
      <div className="profile-info">
        <span className="nickname">강준영</span>
        <div className="hash-tag">
          <span>#스릴러</span>
          <span>#판타지</span>
        </div>
      </div>
      <Button>친구추가</Button>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0 1rem 1rem;

  > img {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  > .profile-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    > span.nickname {
      font-size: 12px;
      font-weight: 600;
      color: #333333;
    }

    .hash-tag {
      > span {
        font-size: 10px;
        color: #bebebe;
      }
    }
  }
`;

export default UserRecomReaderItem;
