import Image from 'next/image';

import { Box } from 'components/Atoms';

interface BookDetailImageProps {
  bookImage: string;
}

export default function TopBookImage({ bookImage }: BookDetailImageProps) {
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'https://teamppub.github.io/pb-project'
      : '';
  return (
    <Box marginBottom="10px" boxShadow="0px 0px 30px rgb(0 0 0 / 10%);">
      <Image
        src={`${prefix}/images/lists/${bookImage}`}
        alt="image"
        width={120}
        height={160}
        layout="responsive"
      />
    </Box>
  );
}
