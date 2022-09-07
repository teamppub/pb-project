/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

import BookItem from 'components/Organisms/List/BookItem';
import { data } from 'components/Organisms/List/data';

interface BookCateProps {
  bookCate: string;
}

// random 리스트
const Random = () => {
  return Math.random() - 0.5;
};

const Randomed = [...data.lists].sort(Random);

export default function BookList(props: BookCateProps) {
  const bookList = props.bookCate;
  const [NewData, setNewBookData] = useState(data.lists);
  const RandomListRef = useRef(Randomed);

  const subJect = data.lists.filter((subject) => subject.subject === bookList);

  useEffect(() => {
    const makeRandomList = () => {
      return RandomListRef.current;
    };
    setNewBookData(makeRandomList);
  }, [bookList]);

  if (bookList === '전체') {
    return (
      <ul className="ListBox">
        {NewData.map((list) => (
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
