import {
  Flex,
  VStack,
  Text,
  Textarea,
  Box,
  Heading,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import FileUpload from '../elements/FileUpload';

const Metadata = () => {
  const [titleValue, setTitleValue] = useState('');
  const [titleLetterCount, setTitleLetterCount] = useState(0);
  const [descriptionValue, setDescriptionValue] = useState('');
  const [descriptionLetterCount, setDescriptionLetterCount] = useState(0);

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
    setTitleLetterCount(e.target.value.length);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(e.target.value);
    setDescriptionLetterCount(e.target.value.length);
  };

  return (
    <Flex
      as="section"
      flexDir="column"
      flex="0 0 400px"
      gridGap={8}
      paddingX={4}
      paddingY={8}
      borderX="1px solid"
      borderColor="icon.default"
    >
      <Heading as="h1" size="xs" alignSelf="start">
        METADATA
      </Heading>
      <VStack spacing={2} width="100%">
        <Flex justifyContent="space-between" width="100%">
          <Heading as="h2" size="xs" color="neutral" fontWeight="500">
            Image
          </Heading>
          <Text color="neutral" fontSize="11px">
            Recommend 1200×628
          </Text>
        </Flex>
        <FileUpload />
      </VStack>
      <VStack spacing={2} width="100%">
        <Flex justifyContent="space-between" width="100%">
          <Heading as="h2" size="xs" color="neutral" fontWeight="500">
            Title
          </Heading>
          <Text color="neutral" fontSize="11px">
            {titleLetterCount}
          </Text>
        </Flex>
        <Textarea
          value={titleValue}
          resize="none"
          rows={2}
          onChange={handleTitleChange}
        />
      </VStack>
      <VStack spacing={2} width="100%">
        <Flex justifyContent="space-between" width="100%">
          <Heading as="h2" size="xs" color="neutral" fontWeight="500">
            Description
          </Heading>
          <Text color="neutral" fontSize="11px">
            {descriptionLetterCount}
          </Text>
        </Flex>
        <Textarea
          value={descriptionValue}
          resize="none"
          rows={5}
          onChange={handleDescriptionChange}
        />
      </VStack>
    </Flex>
  );
};

export default Metadata;
