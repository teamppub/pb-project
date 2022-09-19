import { useRouter } from 'next/router';
import { fontSize } from 'styled-system';

import { Box } from 'components/Atoms';
import BookDetailItem from 'components/Organisms/Detail/BookDetailItem';
import { bookDetailData } from 'components/Organisms/Detail/data';
import Error404 from 'pages/404';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const bookId = Number(id) - 1;

  return (
    <>
      {bookDetailData[bookId] !== undefined ? (
        <BookDetailItem bookId={bookId} bookDetailData={bookDetailData} />
      ) : (
        <Error404 />
      )}
    </>
  );
}
