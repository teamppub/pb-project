import { ReactNode } from 'react';

import NavHome from 'assets/common/bottomNavigator/NavHome';
import NavList from 'assets/common/bottomNavigator/NavList';
import NavMyPage from 'assets/common/bottomNavigator/NavMyPage';
import NavWish from 'assets/common/bottomNavigator/NavWish';
import { Box } from 'components/Atoms';
import BottomNavigator from 'components/Organisms/Common/BottomNavigator';
import CommonHeader from 'components/Organisms/Common/CommonHeader';
import theme from 'styles/theme';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <Box>
      <CommonHeader />
      <Box>{children}</Box>
      <BottomNavigator
        data={[
          {
            selectedIcon: <NavList fill={theme.colors.black} />,
            icon: <NavList />,
            pathName: 'LIST',
            path: ['/list'],
          },
          {
            selectedIcon: <NavHome fill={theme.colors.black} />,
            icon: <NavHome />,
            pathName: 'HOME',
            path: ['/'],
          },
          {
            selectedIcon: <NavMyPage fill={theme.colors.black} />,
            icon: <NavMyPage />,
            pathName: 'MY',
            path: ['/mypage'],
          },
        ]}
      />
    </Box>
  );
}
