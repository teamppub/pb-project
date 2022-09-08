import { useEffect, useState } from 'react';

import BookItem from 'components/Organisms/List/BookItem';
import { data } from 'components/Organisms/List/data';

interface BookCateProps {
  bookCate: string;
}

export default function BookList(props: BookCateProps) {
  const bookList = props.bookCate;
  const [NewData, setNewBookData] = useState(data.lists);
  const Randomed = [...data.lists].sort(() => {
    return Math.random() - 0.5;
  });

  const subJect = data.lists.filter((subject) => subject.subject === bookList);

  useEffect(() => {
    setNewBookData(Randomed);
  }, []);

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
