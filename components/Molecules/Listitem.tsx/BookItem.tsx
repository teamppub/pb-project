import { Box, FlexBox, Span } from 'components/Atoms';
import { data } from 'components/Organisms/List/data';

interface BookCateProps {
  bookCate: string;
}

export default function BookItem(props: BookCateProps) {
  const bookList = props.bookCate;
  const bookData = data;

  const subJect = bookData.lists.filter(
    (subject) => subject.subject === bookList,
  );

  if (bookList === 'All') {
    return (
      <>
        <ul>
          {bookData.lists.map((list) => (
            <li key={list.id}>
              {list.title}
              <Span display="block">{list.author}</Span>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <ul>
          {subJect.map((list) => (
            <li key={list.id}>
              {list.title}
              <Span display="block">{list.author}</Span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
