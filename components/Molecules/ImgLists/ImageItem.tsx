import Image from 'next/image';

import { Box } from 'components/Atoms';

interface urlProps {
  url: string | null;
}

export default function ImageItem(props: urlProps) {
  const url = props.url;
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'https://teamppub.github.io/pb-project'
      : '';
  return (
    <Box marginBottom="10px" boxShadow="0px 0px 30px rgb(0 0 0 / 10%);">
      <Image
        src={`${prefix}/images/lists/${url}`}
        alt="image"
        width={120}
        height={160}
        layout="responsive"
      />
    </Box>
  );
}
