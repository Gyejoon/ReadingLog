import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';

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
      {profileImage}
      <TextEdit contentEditable={true} onInput={onEditInput} />
      {!content && (
        <TextEditPlaceHolder>
          {nickname + ' 님이 읽고 있는 책 이야기를 해주세요'}
        </TextEditPlaceHolder>
      )}
    </Block>
  );
};

const Block = styled.div`
  width: 656px;
  min-height: 24px;
  max-height: 256px;
  overflow: auto;
  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e3e3;
  background-color: #ffffff;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

const TextEdit = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  outline: none;
`;

const TextEditPlaceHolder = styled.span`
  position: absolute;
  left: 0;
  margin: 0 0 0 2.1rem;
  font-size: 13px;
  color: #b4b4b4;
  font-weight: 500;
`;

export default FeedInput;
