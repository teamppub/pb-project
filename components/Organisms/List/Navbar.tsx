import { FlexBox } from 'components/Atoms';
import NavCategory from 'components/Molecules/Navitems/NavCategory';

interface changeCateProps {
  changeCate: Function;
}

export default function Navbar(props: changeCateProps) {
  const dataList = [
    { subject: 'All', id: 1 },
    { subject: 'Romance', id: 2 },
    { subject: 'Mystery', id: 3 },
    { subject: 'Essay', id: 4 },
    { subject: 'History', id: 5 },
    { subject: 'Detective', id: 6 },
  ];

  return (
    <FlexBox
      justifyContent="space-between"
      marginBottom="40px"
      overflowX="auto"
    >
      {dataList.map((data) => (
        <NavCategory key={data.id} data={data} changeCate={props.changeCate} />
      ))}
    </FlexBox>
  );
}
