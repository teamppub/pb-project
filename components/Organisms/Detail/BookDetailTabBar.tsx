import { Box, FlexBox } from 'components/Atoms';
import theme from 'styles/theme';

interface TabBarProps {
  tabList: { label: string; value: string }[];
  changeTab: Function;
  tabState: string;
}

export default function BookDetailTabBar({
  tabList,
  changeTab,
  tabState,
}: TabBarProps) {
  return (
    <FlexBox>
      {tabList.map(({ label, value }, index) => (
        <Box
          key={index}
          color={
            tabState === value ? `${theme.colors.red}` : `${theme.colors.black}`
          }
          onClick={() => {
            changeTab(value);
          }}
        >
          {label}
        </Box>
      ))}
    </FlexBox>
  );
}
