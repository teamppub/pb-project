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
    <Box position="relative" width="100%" height="100%">
      <Image
        src={`${prefix}/images/lists/${bookImage}`}
        alt="image"
        width="375"
        height="500"
        layout="responsive"
      />
    </Box>
  );
}
