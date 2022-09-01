import { useState } from 'react';

import { Box } from 'components/Atoms';
import BookItem from 'components/Molecules/Listitem.tsx/BookItem';
import { data } from 'components/Organisms/List/data';
import Navbar from 'components/Organisms/List/Navbar';

export default function List() {
  const [bookCate, setBookCate] = useState('All');
  const changeCate = (bookCate: string) => {
    setBookCate(bookCate);
  };

  return (
    <>
      <Box padding="30px">
        <Navbar changeCate={changeCate} />
        <BookItem bookCate={bookCate} />
      </Box>
    </>
  );
}
