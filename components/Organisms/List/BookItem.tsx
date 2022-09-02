import { List, Span, Box } from 'components/Atoms';
import ImageItem from 'components/Molecules/ImgLists/ImageItem';
interface list {
  list: listProps;
}

interface listProps {
  title: string;
  id: number;
  subject: string;
  author: string;
  url: string | null;
}

export default function BookItem(props: list) {
  const list = props.list;
  return (
    <List flex="0 0 50%" marginBottom="20px" padding="0px 10px" key={list.id}>
      <ImageItem url={list.url} />
      <Box display="block" fontSize="12px" fontWeight="500" lineHeight="18px">
        {list.title}
      </Box>
      <Box fontSize="11px" fontWeight="400" color="#aaa">
        {list.author}
      </Box>
    </List>
  );
}
