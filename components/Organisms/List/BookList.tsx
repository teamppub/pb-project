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

  if (bookList === 'All') {
    return (
      <ul>
        {bookData.lists.map((list) => (
          <BookItem list={list} key={list.id} />
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        {subJect.map((list) => (
          <BookItem list={list} key={list.id} />
        ))}
      </ul>
    );
  }
}
