import { Heading, VStack, List, ListItem, Link } from '@chakra-ui/react';

const OfficialDebuggers = () => {
  return (
    <VStack as="section" spacing={6}>
      <Heading as="h1" size="xs" alignSelf="start">
        OFFICIAL DEBUGGERS
      </Heading>
      <List
        display="flex"
        flexDirection="column"
        spacing={2}
        fontSize="18px"
        alignSelf="start"
      >
        <ListItem cursor="pointer" alignItems="start">
          <Link color="text">Facebook</Link>
        </ListItem>
        <ListItem cursor="pointer" alignItems="start">
          <Link color="text">Twitter</Link>
        </ListItem>
        <ListItem cursor="pointer" alignItems="start">
          <Link color="text">Linkedin</Link>
        </ListItem>
        <ListItem cursor="pointer" alignItems="start">
          <Link color="text">Structured Data</Link>
        </ListItem>
      </List>
    </VStack>
  );
};

export default OfficialDebuggers;
