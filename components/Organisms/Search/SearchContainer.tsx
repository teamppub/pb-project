import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

import iconClose from 'assets/Images/common/ico_close.svg';
import { Box, Button } from 'components/Atoms';
import { data } from 'components/Organisms/List/data';
import SearchList from 'components/Organisms/Search/SearchList';

export default function SearchBox() {
  const bookDataList = data.lists;
  const [currentInput, setCurrentInput] = useState(''); //현재 검색창에 있는 input

  const handleInputChange = (e: string | any) => {
    setCurrentInput(e.target.value);
  };

  // 내가 검색한 글자와 책 타이틀과 일치하는 항목만 가져오기
  const filteredTitle = bookDataList.filter(({ title, author }) => {
    return (
      title.includes(currentInput.toLocaleLowerCase()) ||
      author.includes(currentInput.toLocaleLowerCase())
    );
  });

  // 검색창에 입력된 값과 타이틀 명을 비교해서 맞는 것만 리스트로 나타내기
  const onClickDelete = () => {
    setCurrentInput('');
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="spaceBetween"
        margin="10px 20px 0px"
        height="40px"
      >
        <input
          value={currentInput}
          onChange={handleInputChange}
          type="text"
          placeholder="책 제목을 검색해 주세요."
          css={css`
            background: #eeeeee;
            text-indent: 15px;
            width: 100%;
          `}
        />
        <Button
          onClick={onClickDelete}
          position="absolute"
          right="40px"
          lineHeight="40px"
        >
          <Image
            src={iconClose}
            width="20"
            height="40"
            alt="close"
            layout="fixed"
          />
        </Button>
      </Box>
      <Box>
        {filteredTitle.map((data) => (
          <SearchList title={data.title} key={data.id} id={data.id} />
        ))}
      </Box>
    </>
  );
}
