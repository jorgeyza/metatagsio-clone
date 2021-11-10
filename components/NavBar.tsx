import {
  chakra,
  Heading,
  Link,
  Box,
  Flex,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  Spacer,
  ListItem,
  List,
  Input,
  Icon,
  Text,
} from '@chakra-ui/react';

import LogoIcon from '../Icons/LogoIcon';

interface Props {}

const NavBar = (props: Props) => {
  return (
    <chakra.nav
      display="flex"
      height={24}
      marginX={6}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link
        href="#"
        _hover={{
          textDecoration: 'none',
        }}
        display="flex"
        gridGap={4}
        alignItems="center"
      >
        <Icon as={LogoIcon} display="block" maxW="100%" />
        <Text as="div" size={'md'} fontWeight="700" color="text">
          Meta Tags
        </Text>
      </Link>
      <Input
        width="33%"
        size="lg"
        variant="filled"
        focusBorderColor="none"
        colorScheme="blue"
      />
      <Link
        href="#"
        _hover={{
          textDecoration: 'none',
          color: 'primary',
        }}
      >
        Font Generator
      </Link>
    </chakra.nav>
  );
};

export default NavBar;
