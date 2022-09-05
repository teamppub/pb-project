import { useEffect, useState } from 'react';

import BookItem from 'components/Organisms/List/BookItem';
import { data } from 'components/Organisms/List/data';

interface BookCateProps {
  bookCate: string;
}

export default function BookList(props: BookCateProps) {
  const bookList = props.bookCate;
  const [bookData, setNewBookData] = useState(data);

  const subJect = bookData.lists.filter(
    (subject) => subject.subject === bookList,
  );

  if (bookList === '전체') {
    return (
      <ul className="ListBox">
        {bookData.lists.map((list) => (
          <BookItem list={list} key={list.id} />
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="ListBox">
        {subJect.map((list) => (
          <BookItem list={list} key={list.id} />
        ))}
      </ul>
    );
  }
}
