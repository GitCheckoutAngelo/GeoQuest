import { Link, Stack, Typography, useTheme } from '@mui/material';

interface UsefulLinksTileProps {
  image?: string;
  type: 'Information' | 'Community' | 'Quiz';
  title: string;
  link: string;
}

export default function UsefulLinksTile(props: UsefulLinksTileProps) {
  const { image, type, title, link } = props;
  const theme = useTheme();
  return (
    <Stack
      justifyContent="center"
      border={1}
      borderRadius={theme.radius.s}
      width="20%"
      maxWidth="350px"
      minWidth="300px"
      minHeight="100%"
    >
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={`${title} image`} style={{ borderBottom: `2px solid grey` }} />
      )}
      <Stack flex={1} justifyContent="center" padding={`${theme.space.xl} ${theme.space.s}`}>
        <Typography variant="subtitle1" component="h6">
          {type}
        </Typography>
        <Typography variant="h3" component="h4" fontFamily={theme.fonts.viga} mb={theme.space.xl5}>
          {title}
        </Typography>
        <Link href={link} underline="hover" color="#DC5050">
          {link}
        </Link>
      </Stack>
    </Stack>
  );
}
