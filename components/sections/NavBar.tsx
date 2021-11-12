import { chakra, Link, Input, Icon, Text } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

import { setInputValue } from '../../app/uiSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import LogoIcon from '../../Icons/LogoIcon';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const domainInput = useAppSelector((state) => state.ui.domainInput);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputValue({ inputName: 'domainInput', value: e.target.value })
    );
  };

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
          value={domainInput}
          _focus={{ boxShadow: '0 2px 120px rgb(0 0 0 / 10%)' }}
          onChange={handleInputChange}
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
