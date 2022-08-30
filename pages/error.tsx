import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, Button } from 'components/Atoms';
import icon from 'components/images/ico_error_01.svg';

export default function Error404() {
  const router = useRouter();
  return (
    <>
      <Box
        position="relative"
        padding="30px"
        textAlign="center"
        font-family="Noto Sans KR , sans-serif"
      >
        <Image src={icon} alt="alert" width={50} height={50} layout="fixed" />
        <Box paddingBottom="30px" lineHeight="24px">
          찾을 수 없는 페이지입니다. <br />
          요청하신 페이지가 사라졌거나, 잘못된 경로로 이용하셨어요 :)
        </Box>
        <Button
          position="absolute"
          backgroundColor="#000"
          color="#fff"
          fontSize="15px"
          width="180px"
          height="50px"
          borderRadius="25px"
          css={css`
            transform: translate(-50%, -50%);
          `}
          onClick={() => router.push('/')}
        >
          홈으로 이동하기
        </Button>
      </Box>
    </>
  );
}
