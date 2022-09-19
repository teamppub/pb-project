import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import iconBack from 'assets/Images/common/ico_back.svg';
import { Box } from 'components/Atoms';
import theme from 'styles/theme';
import useRefUtils from 'utils/hooks/useRefUtils';

export default function CommonHeader() {
  const router = useRouter();
  const { ref, height } = useRefUtils();
  return (
    <>
      <Box
        ref={ref}
        position="fixed"
        background={theme.colors.white}
        height="45px"
      >
        <Box paddingLeft="15px" onClick={() => router.back()}>
          <Image
            src={iconBack}
            width="25"
            height="45"
            alt="back"
            layout="fixed"
          />
        </Box>
      </Box>
      <Box height={height} />
    </>
  );
}
