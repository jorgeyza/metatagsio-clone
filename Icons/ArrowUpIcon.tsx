import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion<BoxProps>(Box);

const ArrowUpIcon = () => {
  return (
    <>
      <MotionBox
        position="absolute"
        top={0}
        width="56px"
        height="56px"
        borderRadius="50%"
        backgroundColor="arrowBackground"
      />
      <MotionBox
        as="span"
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        width="56px"
        height="56px"
        whileHover={{ scale: 1.1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="24"
          viewBox="0 0 22 24"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#2A81FB"
            strokeWidth="4"
            transform="translate(2 3)"
          >
            <polyline points="0 9 9 0 18 9"></polyline>
            <path d="M9,0 L9,21"></path>
          </g>
        </svg>
      </MotionBox>
    </>
  );
};

export default ArrowUpIcon;
