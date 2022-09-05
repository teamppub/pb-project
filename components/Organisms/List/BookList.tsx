import { useEffect, useState } from 'react';

import { Box, FlexBox, List, Span } from 'components/Atoms';
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

  // 랜덤 인덱스
  const randomIndex = () => {
    return Math.floor(Math.random() * bookData.lists.length);
  };

  const makeNewBookList = () => {
    const list = [];
    // for (let i = 0; i < bookData.lists.length; i++) {
    //   const NewBookList = bookData.lists[randomIndex()];
    //   if (list.indexOf(NewBookList) === -1) {
    //     console.log(list);
    //     list.push(NewBookList);
    //   }
    // }

    //   while (list.length !== 28) {
    //     const NewBookList = bookData.lists[randomIndex()];
    //     if (list.indexOf(NewBookList) === -1) {
    //       console.log(list);
    //       list.push(NewBookList);
    //     }
    //   }
    //   return list;
  };

  console.log(makeNewBookList());

  useEffect(() => {
    // const list = [];
    // list.push(makeNewBookList());
    // setNewBookData();
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
