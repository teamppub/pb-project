import { Box } from 'components/Atoms';

interface BookDetailInfoProps {
  bookAuthor: string;
  bookTitle: string;
  bookSubject: string;
}

export default function TopBooKInfo({
  bookAuthor,
  bookTitle,
  bookSubject,
}: BookDetailInfoProps) {
  return (
    <>
      <Box>{bookSubject}</Box>
      <Box>{bookAuthor}</Box>
      <Box>{bookTitle}</Box>
    </>
  );
}
