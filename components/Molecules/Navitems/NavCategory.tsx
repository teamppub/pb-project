import { Box } from 'components/Atoms';
interface NavItemsProps {
  data: NavItemsInfo;
  changeCate: Function;
}

interface NavItemsInfo {
  subject: string;
  id: number;
}

export default function NavCategory(props: NavItemsProps) {
  const data = props.data;
  const changeBookCate = props.changeCate;

  return (
    <>
      <Box
        fontSize="14px"
        fontWeight="bold"
        marginRight="20px"
        onClick={() => {
          changeBookCate(data.subject);
          console.log(data.subject);
        }}
      >
        {data.subject}
      </Box>
    </>
  );
}
