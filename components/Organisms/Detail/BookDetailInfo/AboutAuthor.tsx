import Image from 'next/image';

import { Box } from 'components/Atoms';
import InnerHTML from 'components/Molecules/InnerHTML';

interface aboutAuthorProps {
  aboutAuthor: {
    image: string | null;
    name: string;
    info: string;
    desc: string;
  };
}

export default function AboutAuthor({ aboutAuthor }: aboutAuthorProps) {
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'https://teamppub.github.io/pb-project'
      : '';
  return (
    <>
      <Box
        padding="15px 0px"
        marginBottom="15px"
        background="#f2f2f2"
        border="1px solid #ddd"
        textAlign="center"
      >
        {aboutAuthor.image !== '' ? (
          <Box
            margin="0 auto 15px"
            width="100px"
            height="100px"
            borderRadius="50%"
            overflow="hidden"
          >
            <Image
              src={`${prefix}/images/detail/${aboutAuthor.image}`}
              alt="image"
              width="100"
              height="100"
              layout="fixed"
            />
          </Box>
        ) : (
          ''
        )}
        <Box marginBottom="15px" fontWeight="500">
          {aboutAuthor.name}
        </Box>
        <InnerHTML data={aboutAuthor.info} />
      </Box>
      <InnerHTML data={aboutAuthor.desc} />
    </>
  );
}
