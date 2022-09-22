import { useEffect, useState } from 'react';

import BookItem from 'components/Organisms/List/BookItem';
import { data } from 'components/Organisms/List/data';

interface BookCateProps {
  bookCate: string;
}

export default function BookList(props: BookCateProps) {
  const bookList = props.bookCate;
  const [newData, setNewBookData] = useState(data.lists);

  const randomed = [...data.lists].sort(() => {
    return Math.random() - 0.5;
  });

  const subJect = data.lists.filter((subject) => subject.subject === bookList);

  useEffect(() => {
    setNewBookData(randomed);
  }, []);

  if (bookList === '전체') {
    return (
      <ul className="ListBox">
        {newData.map((list) => (
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
