import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import iconBack from 'assets/Images/common/ico_back.svg';
import { Box } from 'components/Atoms';
import { render } from 'states/render';
import theme from 'styles/theme';

export default function CommonHeader() {
  const router = useRouter();
  const setReRender = useSetRecoilState(render);
  return (
    <>
      <Box position="relative" background={theme.colors.white} height="45px">
        <Box
          paddingLeft="15px"
          onClick={() => {
            router.back();
          }}
        >
          <Image
            src={iconBack}
            width="25"
            height="45"
            alt="back"
            layout="fixed"
          />
        </Box>
      </Box>
    </>
  );
}
