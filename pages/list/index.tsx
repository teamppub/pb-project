import { useState } from 'react';

import { Box } from 'components/Atoms';
import BookList from 'components/Organisms/List/BookList';
import Navbar from 'components/Organisms/List/Navbar';

export default function List() {
  const [bookCate, setBookCate] = useState('전체');
  const changeCate = (bookCate: string) => {
    setBookCate(bookCate);
  };

  return (
    <>
      <Box position="relative" paddingTop="80px">
        <Navbar changeCate={changeCate} />
        <BookList bookCate={bookCate} />
      </Box>
    </>
  );
}
