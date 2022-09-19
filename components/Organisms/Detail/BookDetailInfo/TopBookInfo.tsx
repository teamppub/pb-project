import { Box } from 'components/Atoms';
import theme from 'styles/theme';

interface BookDetailInfoProps {
  bookAuthor: string;
  bookTitle: string;
  bookSubject: string;
}

export default function TopBooKInfo({
  bookAuthor,
  bookTitle,
  bookSubject,
}: BookDetailInfoProps) {
  return (
    <Box
      marginBottom="20px"
      paddingBottom="20px"
      borderBottom="1px solid #ddd"
      textAlign="center"
    >
      <Box
        display="inline-block"
        marginBottom="20px"
        padding="4px 10px"
        color={theme.colors.white}
        fontSize="13px"
        borderRadius="6px"
        background={theme.colors.brown}
      >
        {bookSubject}
      </Box>
      <Box marginBottom="5px" fontSize="16px" color={theme.colors.gray66}>
        {bookAuthor}
      </Box>
      <Box fontSize="18px" fontWeight="500">
        {bookTitle}
      </Box>
    </Box>
  );
}
