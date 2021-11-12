import { Flex, Box, Text, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import LogoIcon from '../../Icons/LogoIcon';

interface Props {}

const Footer = (props: Props) => {
  return (
    <Box as="footer" padding={6}>
      <Center
        backgroundColor="primary"
        paddingTop="100px"
        paddingBottom="140px"
      >
        <Flex
          maxWidth="900px"
          flexDirection="column"
          alignItems="center"
          gridGap="6"
        >
          <LogoIcon />
          <Heading fontWeight="400" as="h1" size="lg" color="white">
            Meta Tags
          </Heading>
          <Text
            color="white"
            opacity={0.6}
            fontSize={'24px'}
            lineHeight={1.6}
            textAlign="center"
          >
            Meta Tags is a tool to debug and generate meta tag code for any
            website. With Meta Tags you can edit and experiment with your
            content then preview how your webpage will look on Google, Facebook,
            Twitter and more!
          </Text>
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
