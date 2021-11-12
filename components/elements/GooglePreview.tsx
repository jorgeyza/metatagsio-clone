import { Flex, Text, Heading, Link } from '@chakra-ui/react';

import { PreviewProps } from '../sections/Preview';

const GooglePreview = ({ domain, title, description }: PreviewProps) => {
  return (
    <>
      <Flex position="relative">
        <Heading
          as="h2"
          fontSize={'12px'}
          fontWeight="400"
          color="neutral"
          _before={{
            content: '""',
            position: 'absolute',
            top: '9px',
            right: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'previewDivider',
          }}
        >
          <Text
            as="span"
            background="white"
            position="relative"
            paddingRight={4}
          >
            Google
          </Text>
        </Heading>
      </Flex>
      <Flex
        flexDirection="column"
        fontFamily="Arial, sans-serif"
        maxWidth="600px"
      >
        <Link
          color="google.title"
          fontSize="18px"
          fontWeight="400"
          lineHeight={1.2}
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {title}
        </Link>
        <Text
          fontSize="14px"
          lineHeight={1.4}
          color="google.link"
          margin="0"
          whiteSpace="nowrap"
        >
          {domain}
        </Text>
        <Text
          color="google.description"
          fontSize="13px"
          lineHeight={1.4}
          wordBreak="break-word"
        >
          {description}
        </Text>
      </Flex>
    </>
  );
};

export default GooglePreview;
