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
          flex="0 0 50%"
          height="26px"
          textAlign="center"
          fontSize="16px"
          lineHeight="26px"
          color={
            tabState === value
              ? `${theme.colors.brown}`
              : `${theme.colors.black}`
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
