import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { userThumbnail } from 'static/images';

interface Props {
  profileImage: string | null;
  nickname: string;
}

//TODO. input cursor 되었을때, 확장된 edit창이 나올 수 있도록.
const FeedInput: React.SFC<Props> = ({ profileImage, nickname }) => {
  const [content, setContent] = useState('');

  const onEditInput = (e: FormEvent<HTMLDivElement>) => {
    e.persist();
    setContent(e.currentTarget.innerText);
  };

  return (
    <Block>
      <TextEdit contentEditable={true} onInput={onEditInput} />
      {!content && (
        <div className="placeholder-wrapper">
          <img src={profileImage || userThumbnail} alt="thumbnail" />
          <TextEditPlaceHolder>
            {nickname + ' 님이 읽고 있는 책 이야기를 해주세요'}
          </TextEditPlaceHolder>
        </div>
      )}
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
  min-height: 24px;
  max-height: 256px;
  overflow: auto;
  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e3e3;
  background-color: #ffffff;
  padding: 2rem 0;
  display: flex;
  align-items: center;

  .placeholder-wrapper {
    position: absolute;
    left: 0;
    margin: 0 0 0 2.1rem;
    > img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;

const TextEdit = styled.div`
  width: 100%;
  position: relative;
  padding-left: 5rem;
  z-index: 2;
  outline: none;
`;

const TextEditPlaceHolder = styled.span`
  position: relative;
  bottom: 0.6rem;
  left: 1rem;
  font-size: 13px;
  color: #b4b4b4;
  font-weight: 500;
`;

export default FeedInput;
