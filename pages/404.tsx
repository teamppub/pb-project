import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import icon from 'assets/Images/common/ico_error_01.svg';
import { Box, Button } from 'components/Atoms';

export default function Error404() {
  const router = useRouter();
  return (
    <>
      <Box position="relative">
        <Box
          position="fixed"
          top="50%"
          left="0%"
          width="100%"
          textAlign="center"
          padding="0px 30px"
          css={css`
            transform: translate(0%, -50%);
          `}
        >
          <Image src={icon} alt="alert" width={50} height={50} layout="fixed" />
          <Box padding="20px 0px 30px 0px" lineHeight="24px">
            찾을 수 없는 페이지입니다. <br />
            요청하신 페이지가 사라졌거나, 잘못된 경로로 이용하셨어요 :)
          </Box>
          <Button
            backgroundColor="#000"
            color="#fff"
            fontSize="15px"
            width="180px"
            height="50px"
            borderRadius="25px"
            onClick={() => router.push('/')}
          >
            홈으로 이동하기
          </Button>
        </Box>
      </Box>
    </>
  );
}
