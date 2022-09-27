import { css } from '@emotion/react';
import { useState } from 'react';

import { Box } from 'components/Atoms';
import { data } from 'components/Organisms/List/data';
import { fetchData } from 'components/Organisms/Search/fetchData';
import SearchList from 'components/Organisms/Search/SearchList';

export default function SearchBox() {
  const bookDataList = data.lists;
  const [currentInput, setCurrentInput] = useState(''); //현재 검색창에 있는 input

  const handleInputChange = (e: any) => {
    setCurrentInput(e.target.value);
  };

  fetchData();

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
      </Box>
      <Box>
        {/* {filteredTitle.map((data) => (
          <SearchList title={data.title} key={data.id} id={data.id} />
        ))} */}
      </Box>
    </>
  );
}
