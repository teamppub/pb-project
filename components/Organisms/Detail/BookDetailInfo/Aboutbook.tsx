import { css } from '@emotion/react';
import Image from 'next/image';

import { Box } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';

interface aboutBookProps {
  aboutBook: { summary: string; photo: string[] };
}

export default function Aboutbook({ aboutBook }: aboutBookProps) {
  return <InnerHTML data={aboutBook.summary} />;
}
