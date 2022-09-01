import { List, Span } from 'components/Atoms';

interface list {
  list: listProps;
}

interface listProps {
  title: string;
  id: number;
  subject: string;
  author: string;
}

export default function BookItem(props: list) {
  const list = props.list;
  return (
    <List key={list.id}>
      {list.title}
      <Span display="block">{list.author}</Span>
    </List>
  );
}
