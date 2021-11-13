import { ChangeEvent, useState } from 'react';
import {
  Flex,
  FlexProps,
  VStack,
  Text,
  Textarea,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { setInputValue, setImage } from '../../app/uiSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import FileUpload from '../elements/FileUpload';

const MotionFlex = motion<FlexProps>(Flex);

const Metadata = () => {
  const [titleLetterCount, setTitleLetterCount] = useState(38);
  const [descriptionLetterCount, setDescriptionLetterCount] = useState(139);
  const dispatch = useAppDispatch();

  const titleInput = useAppSelector((state) => state.ui.titleInput);
  const descriptionInput = useAppSelector((state) => state.ui.descriptionInput);

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setInputValue({ inputName: 'titleInput', value: e.target.value }));
    setTitleLetterCount(e.target.value.length);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      setInputValue({
        inputName: 'descriptionInput',
        value: e.target.value,
      })
    );
    setDescriptionLetterCount(e.target.value.length);
  };

  const handleImageChange = (file: File) => {
    const localImageUrl = window.URL.createObjectURL(file);
    dispatch(setImage(localImageUrl));
  };

  return (
    <MotionFlex
      as="section"
      flexDir="column"
      flex="0 0 400px"
      gridGap={8}
      paddingX={4}
      paddingY={8}
      borderX="1px solid"
      borderColor="icon.default"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      // @ts-ignore
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Heading as="h1" size="xs" alignSelf="start" fontSize="11px">
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
        <FileUpload onFileAccepted={handleImageChange} />
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
          variant="filled"
          _focus={{ boxShadow: '0 1px 3px 0 #cfd7df' }}
          value={titleInput}
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
          variant="filled"
          _focus={{ boxShadow: '0 1px 3px 0 #cfd7df' }}
          value={descriptionInput}
          resize="none"
          rows={5}
          onChange={handleDescriptionChange}
        />
      </VStack>
    </MotionFlex>
  );
};

export default Metadata;
