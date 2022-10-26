import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';

interface dataInfo {
  title: string;
  id: number;
}

export default function SearchList(props: dataInfo) {
  const router = useRouter();
  const prefix = process.env.NODE_ENV === 'production' ? '/pb-project' : '';
  const bookTitle = props.title;
  const bookId = props.id;

  return (
    <>
      <Box
        fontSize="12px"
        lineHeight="18px"
        padding="20px 25px"
        borderBottom="1px solid #dddddd"
        onClick={() => router.push(`${prefix}/detail/${bookId}`)}
      >
        <Box>{bookTitle}</Box>
      </Box>
    </>
  );
}
