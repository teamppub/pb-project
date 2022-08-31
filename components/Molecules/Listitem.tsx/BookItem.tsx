import { Box, FlexBox, Span } from 'components/Atoms';
import bookdata from 'components/Bookdb/data.json';

export default function BookItem() {
  const bookSubject = 'Romance';
  const cateList = bookdata.lists.filter(
    (subject) => subject.subject === bookSubject,
  );
  console.log(cateList);

  return (
    <>
      <ul>
        {cateList.map((list) => (
          <li key={list.id}>
            {list.title}
            <Span display="block">{list.author}</Span>
          </li>
        ))}
      </ul>
    </>
  );
}
