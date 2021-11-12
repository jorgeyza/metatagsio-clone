import { Flex } from '@chakra-ui/react';

import ChannelsAndDebuggers from './ChannelsAndDebuggers';
import Metadata from './Metadata';
import Preview from './Preview';

interface Props {}

const MainSection = (props: Props) => {
  return (
    <Flex as="main" borderY="1px solid" borderColor="icon.default">
      <ChannelsAndDebuggers />
      <Metadata />
      <Preview />
    </Flex>
  );
};

export default MainSection;
