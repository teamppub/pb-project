import { useRouter } from 'next/router';

import { Box, FlexBox } from 'components/Atoms';
import useRefUtils from 'utils/hooks/useRefUtils';

interface BottomItemsProps {
  icon: JSX.Element;
  selectedIcon: JSX.Element;
  pathName: string;
  path: string[];
}

function BottomNavItem({ data }: { data: BottomItemsProps }) {
  const router = useRouter();
  /*
    DESC :: 
    .some(판별 함수) || 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트함
    물음표 두개(’??‘)를 사용해주면 왼쪽 코드가 null 또는 undefined일 경우에만 오른쪽 코드를 실행합니다.
    ?. (옵셔널 체이닝) > 객체 속성을 접근 하기 위해 사용 || ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환

  */
  const isSelected = data.path?.some((path) => router.pathname === path);

  return (
    <FlexBox
      role="tab"
      flex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      onClick={() => router.push(data.path?.[0] ?? '')}
    >
      <Box marginBottom="2px">{isSelected ? data.selectedIcon : data.icon}</Box>
      <Box fontSize="9px">{data.pathName}</Box>
    </FlexBox>
  );
}

export default function BottomNavigator({
  data,
}: {
  data: BottomItemsProps[];
}) {
  const router = useRouter();
  const isShow = data.some((item) => {
    return item.path?.some((path) => router.pathname === path);
  });
  const { ref } = useRefUtils();

  if (isShow)
    return (
      <>
        <Box
          zIndex="100"
          backgroundColor="#f8f8f8"
          bottom="0px"
          width="100%"
          position="fixed"
          //ref={ref}
        >
          <FlexBox
            boxShadow="0 -7px 10px 0 rgba(0, 0, 0, 0.08);"
            height="60px"
            padding="8px 0"
          >
            {data.map((item, index) => (
              <BottomNavItem data={item} key={index} />
            ))}
          </FlexBox>
          <Box width="100%" height="var(--platformBottomArea)" />
        </Box>
      </>
    );

  return <></>;
}
