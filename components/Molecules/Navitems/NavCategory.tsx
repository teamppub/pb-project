import { Box } from 'components/Atoms';

interface NavItemsProps {
  data: NavItemsInfo;
}

interface NavItemsInfo {
  label: string;
  id: number;
}

export default function NavCategory(props: NavItemsProps) {
  const data = props.data;

  return (
    <>
      <Box>{data.label}</Box>
    </>
  );
}
