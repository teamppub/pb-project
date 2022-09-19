import { css } from '@emotion/react';
import { useState } from 'react';

import { Box, FlexBox } from 'components/Atoms';
import AboutAuthor from 'components/Organisms/Detail/BookDetailInfo/AboutAuthor';
import Aboutbook from 'components/Organisms/Detail/BookDetailInfo/Aboutbook';
import TopBookImage from 'components/Organisms/Detail/BookDetailInfo/TopBookImage';
import TopBooKInfo from 'components/Organisms/Detail/BookDetailInfo/TopBookInfo';
import BookDetailTabBar from 'components/Organisms/Detail/BookDetailTabBar';
import theme from 'styles/theme';

interface BookDetailProps {
  bookId: number;
  bookDetailData: PresentationBookDetail[];
}

interface PresentationBookDetail {
  bookImage: string;
  bookAuthor: string;
  bookTitle: string;
  bookSubject: string;
  aboutBook: PresentationAboutBook;
  aboutAuthor: PresentationAboutAuthor;
}

interface PresentationAboutBook {
  summary: string;
  photo: string;
}

interface PresentationAboutAuthor {
  image: string | null;
  name: string;
  info: string;
  desc: string;
}

export default function BookDetailItem({
  bookId,
  bookDetailData,
}: BookDetailProps) {
  const [tabState, setTabState] = useState('aboutBook');
  const changeTab = (tabState: string) => {
    setTabState(tabState);
  };

  return (
    <>
      <TopBookImage bookImage={bookDetailData[bookId].bookImage} />
      <Box
        position="relative"
        padding="40px 15px"
        backgroundColor={theme.colors.white}
      >
        <TopBooKInfo
          bookTitle={bookDetailData[bookId].bookTitle}
          bookSubject={bookDetailData[bookId].bookSubject}
          bookAuthor={bookDetailData[bookId].bookAuthor}
        />
        <BookDetailTabBar
          tabList={[
            { label: '책 소개', value: 'aboutBook' },
            { label: '작가 소개', value: 'aboutAuthor' },
          ]}
          changeTab={changeTab}
          tabState={tabState}
        />
        <Box
          paddingTop="30px"
          fontSize="13px"
          lineHeight="18px"
          css={css`
            word-break: keep-all;
          `}
        >
          {tabState === 'aboutBook' ? (
            <Aboutbook aboutBook={bookDetailData[bookId].aboutBook} />
          ) : (
            <AboutAuthor aboutAuthor={bookDetailData[bookId].aboutAuthor} />
          )}
        </Box>
      </Box>
    </>
  );
}
