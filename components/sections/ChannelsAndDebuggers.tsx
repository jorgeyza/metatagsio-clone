import { Flex, FlexProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Channels from '../elements/Channels';
import OfficialDebuggers from '../elements/OfficialDebuggers';

const MotionFlex = motion<FlexProps>(Flex);

const ChannelsAndDebuggers = () => {
  return (
    <MotionFlex
      as="section"
      flexDir="column"
      flex="0 0 240px"
      gridGap={16}
      paddingX={4}
      paddingY={8}
      alignItems="center"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      // @ts-ignore
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Channels />
      <OfficialDebuggers />
    </MotionFlex>
  );
};

export default ChannelsAndDebuggers;
