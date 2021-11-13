import {
  Flex,
  FlexProps,
  Text,
  Link,
  Heading,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import GenerateMetaTagsIcon from '../../Icons/GenerateMetaTagsIcon';
import FacebookPreview from '../elements/FacebookPreview';
import GooglePreview from '../elements/GooglePreview';
import TwitterPreview from '../elements/TwitterPreview';

import { useAppSelector } from '../../app/hooks';

export interface PreviewProps {
  title: string;
  domain: string;
  description: string;
}

const MotionFlex = motion<FlexProps>(Flex);

const Preview = () => {
  const googleChannel = useAppSelector((state) => state.ui.googleChannel);
  const facebookChannel = useAppSelector((state) => state.ui.facebookChannel);
  const twitterChannel = useAppSelector((state) => state.ui.twitterChannel);

  const title = useAppSelector((state) => state.ui.titleInput);
  const domain = useAppSelector((state) => state.ui.domainInput);
  const description = useAppSelector((state) => state.ui.descriptionInput);

  return (
    <MotionFlex
      as="section"
      flexDir="column"
      gridGap={6}
      padding="12px 40px"
      paddingBottom="72px"
      flexGrow={1}
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      // @ts-ignore
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Flex width="100%" justifyContent="space-between" marginTop={4}>
        <Heading as="h1" size="xs" alignSelf="start" fontSize="11px">
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
      {googleChannel && (
        <GooglePreview
          domain={domain}
          title={title}
          description={description}
        />
      )}
      {facebookChannel && (
        <FacebookPreview
          domain={domain}
          title={title}
          description={description}
        />
      )}
      {twitterChannel && (
        <TwitterPreview
          domain={domain}
          title={title}
          description={description}
        />
      )}
    </MotionFlex>
  );
};

export default Preview;
