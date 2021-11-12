import { Box, Flex, Text, Heading, Link } from '@chakra-ui/react';

interface Props {}

const TwitterPreview = (props: Props) => {
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
            Twitter
          </Text>
        </Heading>
      </Flex>
      <Flex
        flexDirection="column"
        fontFamily="Helvetica, Arial, sans-serif"
        width="500px"
        cursor="pointer"
        border="1px solid"
        borderColor="twitter.border"
        borderRadius="0.42857em"
        overflow="hidden"
      >
        <Box borderBottom="1px solid" borderColor="twitter.border">
          <Box height="261px" backgroundColor="twitter.mainBackground"></Box>
          <Flex flexDirection="column" padding="10px 12px">
            <Text
              color="twitter.title"
              whiteSpace="normal"
              wordBreak="break-word"
              noOfLines={1}
              fontWeight="700"
              fontSize="16px"
            >
              Meta Tags — Preview, Edit and Generate
            </Text>
            <Text
              noOfLines={2}
              color="twitter.description"
              fontSize="14px"
              whiteSpace="normal"
              lineHeight="1.3em"
              wordBreak="break-word"
              overflow="hidden"
            >
              With Meta Tags you can edit and experiment with your content then
              preview how your webpage will look on Google, Facebook, Twitter
              and more!
            </Text>
            <Text
              color="twitter.domain"
              lineHeight={1.3125}
              textTransform="lowercase"
            >
              metatags.io
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default TwitterPreview;
