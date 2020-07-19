import React from 'react';
import styled from 'styled-components';
import theme from 'lib/styles/theme';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';

interface Props {}

const FeedItem: React.SFC<Props> = () => {
  return (
    <Block>
      <ItemHeader>
        <div className="user-state-wrapper">
          <span className="state">우종규 님이 책을 폈습니다.</span>
          <span className="write-date">2020.02.05 (WED)</span>
        </div>
      </ItemHeader>
      <ItemContent>
        <span className="title">"나무"</span>
        <span className="content">베르나르베르베르</span>
      </ItemContent>
      <ItemFooter>
        <div className="reaction-wrapper">
          <div className="reaction-item">
            <FaRegCommentAlt size={14} />
            <span>댓글 2개</span>
          </div>

          <div className="reaction-item">
            <AiFillHeart color="#d4ebff" size={20} />
            <span>좋아요 2개</span>
          </div>
        </div>
      </ItemFooter>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e3e3;
  background-color: #ffffff;
  margin-top: 2rem;
`;

const ItemHeader = styled.div`
  border-bottom: 2px solid ${theme.borderColor};

  .user-state-wrapper {
    display: flex;
    padding: 0 0 1rem 1rem;

    .state {
      font-size: 14px;
      color: #333333;
      flex: 1;
    }

    .write-date {
      font-size: 13px;
      color: #bebebe;
    }
  }
`;

const ItemContent = styled.div`
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 24px;
    font-weight: 600;
    color: #333333;
  }

  .content {
    font-size: 14px;
    color: #b2b2b2;
    margin-top: 1rem;
  }
`;

const ItemFooter = styled.div`
  border-top: 2px solid ${theme.borderColor};
  padding-top: 1rem;

  .reaction-wrapper {
    display: flex;
    justify-content: flex-end;

    .reaction-item {
      display: flex;
      align-items: center;

      > span {
        margin: 0 0.6rem 0 0.3rem;
        font-size: 14px;
      }

      &:last-child {
        > span {
          margin-right: 0;
        }
      }
    }
  }
`;

export default FeedItem;
