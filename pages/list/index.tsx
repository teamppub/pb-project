import { Box } from 'components/Atoms';
import BookItem from 'components/Molecules/Listitem.tsx/BookItem';
import Booklist from 'components/Organisms/List/Booklist';
import Navbar from 'components/Organisms/List/Navbar';

export default function List() {
  return (
    <>
      <Box padding="30px">
        <Navbar />
        <Booklist></Booklist>
      </Box>
    </>
  );
}
