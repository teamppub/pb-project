/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import BookItem from 'components/Organisms/List/BookItem';
import { data } from 'components/Organisms/List/data';

interface BookCateProps {
  bookCate: string;
}

export default function BookList(props: BookCateProps) {
  const bookList = props.bookCate;
  const bookData = data;
  const [NewData, setNewBookData] = useState(data);

  const subJect = bookData.lists.filter(
    (subject) => subject.subject === bookList,
  );

  // const makeRandomList = () => {
  //   return bookData.lists.sort(() => Math.random() - 0.5);
  // };

  // 렌더링 될 때마다 실행됨
  useEffect(() => {
    const makeRandomList = () => {
      return bookData.lists.sort(() => Math.random() - 0.5);
    };
    setNewBookData(makeRandomList, []);
  }, []);

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
