import { Flex, Text, Link, Heading, HStack, Icon } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import GenerateMetaTagsIcon from '../../Icons/GenerateMetaTagsIcon';
import FacebookPreview from '../elements/FacebookPreview';
import GooglePreview from '../elements/GooglePreview';
import TwitterPreview from '../elements/TwitterPreview';

interface Props {}

const Preview = (props: Props) => {
  return (
    <Flex
      as="section"
      flexDir="column"
      gridGap={4}
      paddingX={4}
      paddingY={8}
      flexGrow={1}
    >
      <Flex width="100%" justifyContent="space-between">
        <Heading as="h1" size="xs" alignSelf="start">
          PREVIEW
        </Heading>
        <Link
          position="relative"
          top="-11px"
          color="primary"
          border={'1px solid'}
          borderColor="icon.default"
          borderRadius="4px"
          padding={2}
        >
          <HStack>
            <Icon as={GenerateMetaTagsIcon} />
            <Text fontSize="11px" fontWeight="700">
              GENERATE META TAGS
            </Text>
          </HStack>
        </Link>
      </Flex>
      <GooglePreview />
      <FacebookPreview />
      <TwitterPreview />
    </Flex>
  );
};

export default Preview;
