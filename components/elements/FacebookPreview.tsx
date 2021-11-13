import { Box, Flex, Text, Heading } from '@chakra-ui/react';

import { PreviewProps } from '../sections/Preview';

import { removeProtocol } from '../../utils';
import { useAppSelector } from '../../app/hooks';

const FacebookPreview = ({ domain, title, description }: PreviewProps) => {
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
        <Box
          position="relative"
          height="261px"
          borderBottom="1px solid"
          borderColor="facebook.border"
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
        ></Box>
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
            {removeProtocol(domain)}
          </Text>
          <Box height="46px" overflow="hidden">
            <Text
              color="facebook.title"
              whiteSpace="normal"
              wordBreak="break-word"
              fontWeight="700"
              fontSize="16px"
              lineHeight="20px"
              overflow="hidden"
              marginTop="3px"
            >
              {title}
            </Text>
            <Text
              noOfLines={1}
              color="facebook.description"
              fontSize="14px"
              textOverflow="ellipsis"
              height="18px"
              overflow="hidden"
              lineHeight="20px"
              marginTop="3px"
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default FacebookPreview;
