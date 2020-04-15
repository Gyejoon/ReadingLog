import React, { useState, useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import media from 'lib/styles/media';

const HeaderSearchBlock = styled.form`
  width: 620px;
  display: flex;
  position: relative;
  margin-left: 42px;
  align-items: center;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;

  > .icon {
    margin: 0 12px 0 12px;
  }

  > .input-label {
    position: absolute;
    display: block;
    pointer-events: none;
    left: 58px;
    color: #ccc;
    z-index: -1;
  }

  > input {
    width: 100%;
    font-size: 18px;
    height: 32px;
    background-color: transparent;
    outline: none;
    border: none;
  }

  ${media.medium} {
    width: 140px;

    > .input-label {
      font-size: 0px;
      left: 48px;
      &::before {
        font-size: 18px;
        content: '검색';
      }
    }
  }
`;

interface HeaderSearchProps {}

const HeaderSearch: React.SFC<HeaderSearchProps> = () => {
  const [search, setSearch] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <HeaderSearchBlock>
      <MdSearch size="36" color="#ddd" className="icon" />
      {!search && (
        <label className="input-label">장르, 제목, 작가등으로 검색하세요</label>
      )}
      <input
        tabIndex={1}
        value={search}
        onChange={onChange}
        autoComplete={'off'}
      />
    </HeaderSearchBlock>
  );
};

export default HeaderSearch;