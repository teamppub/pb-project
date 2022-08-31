import { useState } from 'react';

import { Box } from 'components/Atoms';
interface NavItemsProps {
  data: NavItemsInfo;
}

interface NavItemsInfo {
  subject: string;
  id: number;
}

export default function NavCategory(props: NavItemsProps) {
  const data = props.data;

  const [subjectState, setSubState] = useState('All');
  console.log(subjectState);

  return (
    <>
      <Box
        fontSize="14px"
        fontWeight="bold"
        marginRight="20px"
        onClick={() => {
          setSubState(data.subject);
        }}
      >
        {data.subject}
      </Box>
    </>
  );
}
