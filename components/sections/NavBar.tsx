import { chakra, Link, Input, Icon, Text } from '@chakra-ui/react';

import LogoIcon from '../../Icons/LogoIcon';

const NavBar = () => {
  return (
    <header>
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
          _focus={{ boxShadow: '0 2px 120px rgb(0 0 0 / 10%)' }}
        />
        <Link
          _hover={{
            textDecoration: 'none',
            color: 'primary',
          }}
        >
          Font Generator
        </Link>
      </chakra.nav>
    </header>
  );
};

export default NavBar;
