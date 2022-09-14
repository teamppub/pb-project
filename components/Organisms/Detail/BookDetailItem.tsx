import { useState } from 'react';

import { Box, FlexBox } from 'components/Atoms';
import AboutAuthor from 'components/Organisms/Detail/BookDetailInfo/AboutAuthor';
import Aboutbook from 'components/Organisms/Detail/BookDetailInfo/Aboutbook';
import TopBookImage from 'components/Organisms/Detail/BookDetailInfo/TopBookImage';
import TopBooKInfo from 'components/Organisms/Detail/BookDetailInfo/TopBookInfo';
import BookDetailTabBar from 'components/Organisms/Detail/BookDetailTabBar';

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
  photo: string[];
}

interface PresentationAboutAuthor {
  image: string;
  name: string;
  info: string;
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
      <TopBooKInfo
        bookTitle={bookDetailData[bookId].bookImage}
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
      {tabState === 'aboutBook' ? (
        <Aboutbook aboutBook={bookDetailData[bookId].aboutBook} />
      ) : (
        <AboutAuthor aboutAuthor={bookDetailData[bookId].aboutAuthor} />
      )}
    </>
  );
}
