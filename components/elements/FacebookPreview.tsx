import { Box, Flex, Text, Heading, Link } from '@chakra-ui/react';

interface Props {}

const FacebookPreview = (props: Props) => {
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
            Facebook
          </Text>
        </Heading>
      </Flex>
      <Flex
        flexDirection="column"
        fontFamily="Helvetica, Arial, sans-serif"
        width="500px"
        cursor="pointer"
        border="1px solid"
        borderColor="facebook.border"
      >
        <Box borderBottom="1px solid" borderColor="facebook.border">
          <Box height="261px" backgroundColor="red"></Box>
          <Flex
            flexDirection="column"
            backgroundColor="facebook.bottomBackground"
            padding="10px 12px"
          >
            <Text
              color="facebook.domain"
              textTransform="uppercase"
              fontSize="12px"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              wordBreak="break-word"
            >
              metatags.io
            </Text>
            <Text
              color="facebook.title"
              whiteSpace="normal"
              wordBreak="break-word"
              fontWeight="700"
              fontSize="16px"
            >
              Meta Tags — Preview, Edit and Generate
            </Text>
            <Text
              color="facebook.description"
              fontSize="14px"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              wordBreak="break-word"
              height="18px"
              overflow="hidden"
            >
              With Meta Tags you can edit and experiment with your content then
              preview how your webpage will look on Google, Facebook, Twitter
              and more!
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default FacebookPreview;
