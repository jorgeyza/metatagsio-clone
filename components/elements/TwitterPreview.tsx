import { Box, Flex, Text, Heading } from '@chakra-ui/react';

import { PreviewProps } from '../sections/Preview';

import { removeProtocol } from '../../utils';
import { useAppSelector } from '../../app/hooks';

const TwitterPreview = ({ domain, title, description }: PreviewProps) => {
  const imageUrl = useAppSelector((state) => state.ui.imageUrl);
  const imageFile = useAppSelector((state) => state.ui.imageFile);

  return (
    <>
      <Flex position="relative">
        <Heading
          as="h2"
          fontSize={'12px'}
          fontWeight="500"
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
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif"
        width="500px"
        cursor="pointer"
        border="1px solid"
        borderColor="twitter.border"
        borderRadius="0.42857em"
        overflow="hidden"
        transition="all 0.25s ease-in-out"
        _hover={{
          backgroundColor: 'twitter.hoverBackground',
          borderColor: 'twitter.hoverBorder',
        }}
      >
        <Box
          position="relative"
          height="261px"
          borderBottom="1px solid"
          borderColor="twitter.border"
          _hover={{
            borderColor: 'twitter.hoverBorder',
          }}
          transition="all 0.25s ease-in-out"
          _before={{
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${imageFile ? imageFile : imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Flex flexDirection="column" padding="10px 12px">
          <Text
            color="twitter.title"
            whiteSpace="normal"
            wordBreak="break-word"
            noOfLines={1}
            fontWeight="700"
            fontSize="14px"
          >
            {title}
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
            {description}
          </Text>
          <Text
            color="twitter.domain"
            lineHeight={1.3125}
            textTransform="lowercase"
            fontSize="14px"
          >
            {removeProtocol(domain)}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default TwitterPreview;
