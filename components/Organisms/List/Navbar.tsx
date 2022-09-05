import { FlexBox } from 'components/Atoms';
import NavCategory from 'components/Molecules/Navitems/NavCategory';

interface changeCateProps {
  changeCate: Function;
}

export default function Navbar(props: changeCateProps) {
  const dataList = [
    { subject: '전체', id: 1 },
    { subject: '소설', id: 2 },
    { subject: '인문', id: 3 },
    { subject: '에세이', id: 4 },
    { subject: '역사', id: 5 },
    { subject: '논픽션', id: 6 },
    { subject: '자기계발', id: 7 },
  ];

  return (
    <FlexBox
      overflowX="auto"
      borderBottom="1px solid #f3f3f3"
      marginRight="10px"
      position="fixed"
      top="0px"
      left="0px"
      right="0px"
      background="#fff"
      zIndex="10"
    >
      {dataList.map((data) => (
        <NavCategory key={data.id} data={data} changeCate={props.changeCate} />
      ))}
    </FlexBox>
  );
}
