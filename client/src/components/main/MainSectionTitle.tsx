import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';

const MainSectionTitleBlock = styled.div`
  span {
    font-size: 18px;
    color: #5692ec;
  }

  p {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 42px;
    font-weight: 600;
    color: #333;

    ${media.medium} {
      font-size: 36px;
    }
  }

  .tag-list {
    button {
      padding: 8px;
      color: #fff;
      font-size: 13px;
      background-color: ${palette.blue.bright};
      border-radius: 16px;
      box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.12);
      border: none;
      outline: none;
      margin-right: 6px;
    }
  }
`;

interface MainSectionTitleProps {
  recommend: string;
  title: string;
  tags: string[];
}

const MainSectionTitle: React.SFC<MainSectionTitleProps> = ({
  recommend,
  title,
  tags,
}) => {
  const tagRender = () => {
    return tags.map((tag, index) => <button key={index}>#{tag}</button>);
  };

  return (
    <MainSectionTitleBlock>
      <span>#{recommend}</span>
      <p>{title}</p>
      <div className="tag-list">{tagRender()}</div>
    </MainSectionTitleBlock>
  );
};

export default MainSectionTitle;
