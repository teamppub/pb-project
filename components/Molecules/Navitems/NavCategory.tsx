import { Box } from 'components/Atoms';

interface NavItemsProps {
  data: NavItemsInfo;
  changeCate: Function;
  bookCate: string;
}

interface NavItemsInfo {
  subject: string;
  id: number;
  value: string;
}

export default function NavCategory(props: NavItemsProps) {
  const data = props.data;
  const changeBookCate = props.changeCate;

  return (
    <>
      <Box
        fontSize="14px"
        fontWeight="bold"
        textAlign="center"
        flex="0 0 60px"
        lineHeight="50px"
        color={data.subject === props.bookCate ? '#000000' : '#bbbbbb'}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          changeBookCate(data.subject);
        }}
      >
        {data.subject}
      </Box>
    </>
  );
}
