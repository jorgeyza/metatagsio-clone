import { Flex } from '@chakra-ui/react';
import Channels from '../elements/Channels';
import OfficialDebuggers from '../elements/OfficialDebuggers';

const ChannelsAndDebuggers = () => {
  return (
    <Flex
      as="section"
      flexDir="column"
      gridGap={16}
      paddingX={4}
      paddingY={8}
      justifyContent="center"
      alignItems="center"
    >
      <Channels />
      <OfficialDebuggers />
    </Flex>
  );
};

export default ChannelsAndDebuggers;
