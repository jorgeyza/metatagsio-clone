import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Center, useColorModeValue, Icon, Text, Flex } from '@chakra-ui/react';
import ArrowUpIcon from '../../Icons/ArrowUpIcon';

export default function Dropzone({ onFileAccepted }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileAccepted(acceptedFiles[0]);
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    multiple: false,
  });

  return (
    <Center
      width="100%"
      height="200px"
      p={10}
      cursor="pointer"
      bg="transparent"
      _hover={{ bg: 'secondary' }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="1px solid"
      borderColor="neutral"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        gridGap={4}
      >
        <Icon as={ArrowUpIcon} />
        <Text color="text" fontWeight="700" fontSize="11px">
          {'DRAG & DROP OR CLICK'}
        </Text>
      </Flex>
    </Center>
  );
}
