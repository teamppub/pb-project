import { ReactNode } from 'react';

import { Box } from 'components/Atoms';

export default function Container({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}
