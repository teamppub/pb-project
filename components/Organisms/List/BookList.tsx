import { text } from 'node:stream/consumers';

import { Box, FlexBox, List, Span } from 'components/Atoms';
import BookItem from 'components/Organisms/List/BookItem';
import { data } from 'components/Organisms/List/data';

interface BookCateProps {
  bookCate: string;
}

export default function BookList(props: BookCateProps) {
  const bookList = props.bookCate;
  const bookData = data;

  const subJect = bookData.lists.filter(
    (subject) => subject.subject === bookList,
  );

  const randomIndex = () => {
    return Math.floor(Math.random() * bookData.lists.length);
  };
  // const NewBookList = data.lists[randomIndex()];

  // const makeNewBookList = () => {
  //   const list = [];
  //   for (let i = 0; i < data.lists.length; i++) {
  //     const NewBookList = data.lists[randomIndex()];
  //     if(list.indexOf(NewBookList) === -1){
  //       list.push(NewBookList)
  //     }
  //   }

  //   return NewBookData;
  // };

  // console.log(makeNewBookList());

  // const NewBookData = {
  //   ...bookData,
  //   lists: { ...bookData.lists, lists: NewBookList },
  // };

  if (bookList === '전체') {
    return (
      <ul className="ListBox">
        {makeNewBookList().map((list) => (
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
