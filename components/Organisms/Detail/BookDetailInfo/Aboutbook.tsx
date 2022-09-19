import { css } from '@emotion/react';
import Image from 'next/image';

import { Box } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';

interface aboutBookProps {
  aboutBook: { summary: string; photo: string };
}

export default function Aboutbook({ aboutBook }: aboutBookProps) {
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'https://teamppub.github.io/pb-project'
      : '';
  return (
    <>
      <InnerHTML data={aboutBook.summary} />
      <Box
        position="relative"
        marginTop="15px"
        width="100%"
        css={css`
          & > span {
            position: unset !important;
            & > img {
              position: relative !important;
              object-fit: contain !important;
              height: auto !important;
            }
          }
        `}
      >
        <Image
          src={`${prefix}/images/detail/${aboutBook.photo}`}
          alt="image"
          width="100%"
          height="100%"
          layout="fill"
        />
      </Box>
    </>
  );
}
