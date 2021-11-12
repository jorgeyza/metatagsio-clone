import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Center, Icon, Text, Flex } from '@chakra-ui/react';

import ArrowUpIcon from '../../Icons/ArrowUpIcon';

interface DropzoneProps {
  onFileAccepted: (file: File) => void;
}

export default function Dropzone({ onFileAccepted }: DropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileAccepted(acceptedFiles[0]);
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    multiple: false,
  });

  return (
    <Center
      position="relative"
      width="100%"
      height="200px"
      p={10}
      cursor="pointer"
      borderRadius="7px"
      border="1px solid"
      borderColor="icon.default"
      _hover={{ borderColor: 'primary' }}
      _before={{
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
        backgroundImage: 'url(./assets/metatags-image.png)',
        backgroundSize: 'cover',
      }}
      transition="all 0.25s ease-out"
      {...getRootProps()}
    >
      <input title="Upload an image file" {...getInputProps()} />
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
