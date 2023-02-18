import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  isActive: boolean;
  children: React.ReactNode;
}

const MotionBox = motion<BoxProps>(Box);

const circleAnimation = {
  active: { opacity: 1 },
  inactive: {
    opacity: 0,
  },
};

export const ChannelsIconContainer: React.FC<Props> = ({ isActive, children }) => {
  return (
    <>
      <MotionBox
        position="absolute"
        top={0}
        left={2}
        width="44px"
        height="44px"
        borderRadius="50%"
        backgroundColor="primary"
        variants={circleAnimation}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      />
      <MotionBox
        as="span"
        display="flex"
        color={isActive ? "icon.active" : "icon.default"}
        position="relative"
        alignItems="center"
        justifyContent="center"
        width="44px"
        height="44px"
      >
        {children}
      </MotionBox>
    </>
  );
};
