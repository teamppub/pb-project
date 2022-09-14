import Image from 'next/image';

import InnerHTML from 'components/Molecules/InnerHTML';

interface aboutAuthorProps {
  aboutAuthor: { image: string; name: string; info: string };
}

export default function AboutAuthor({ aboutAuthor }: aboutAuthorProps) {
  return <InnerHTML data={aboutAuthor.info} />;
}
