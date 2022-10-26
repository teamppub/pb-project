import { css } from '@emotion/react';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import iconClose from 'assets/Images/common/ico_close.svg';
import { Box, Button } from 'components/Atoms';
import SearchList from 'components/Organisms/Search/SearchList';

interface bookData {
  bookData: bookDataInfo;
}

interface bookDataInfo {
  id: number;
  title: string;
  subject: string;
  author: string;
  value: string;
  url: string | null;
}

export default function SearchBox(props: bookData) {
  const [currentInput, setCurrentInput] = useState(''); //현재 검색창에 있는 input
  const [lists, setLists] = useState([]); //필터된 리스트

  const handleInputChange = (e: any) => {
    setCurrentInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get('/list/data.json')
      .then((res) => {
        setLists(res.data.lists);
      })
      .catch(console.error);
  }, []);

  //   console.log(lists);

  // 내가 검색한 글자와 책 타이틀과 일치하는 항목만 가져오기
  const filteredTitle = lists.filter((data) => {
    return (
      data.title.includes(currentInput.toLocaleLowerCase()) ||
      data.author.includes(currentInput.toLocaleLowerCase())
    );
  });

  // 검색창에 입력된 값과 타이틀 명을 비교해서 맞는 것만 리스트로 나타내기
  const onClickHandler = () => {
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
          onClick={onClickHandler}
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
