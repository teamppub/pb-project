import { FlexBox } from 'components/Atoms';
import NavCategory from 'components/Molecules/Navitems/NavCategory';

export default function Navbar() {
  const dataList = [
    { label: 'Roman', id: 1 },
    { label: 'Detective', id: 2 },
    { label: 'Essay', id: 3 },
    { label: 'History', id: 4 },
  ];

  return (
    <FlexBox>
      {dataList.map((data) => (
        <NavCategory data={data} key={data.id} />
      ))}
    </FlexBox>
  );
}
