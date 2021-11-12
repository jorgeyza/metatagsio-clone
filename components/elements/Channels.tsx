import {
  Heading,
  VStack,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import GoogleIcon from '../../Icons/GoogleIcon';
import FacebookIcon from '../../Icons/FacebookIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import LinkedinIcon from '../../Icons/LinkedinIcon';
import PinterestIcon from '../../Icons/PinterestIcon';
import SlackIcon from '../../Icons/SlackIcon';
import { ChannelsIconContainer } from '../../Icons/ChannelsIconContainer';

interface ChannelsItemsProps {
  channelName: string;
  isActive: boolean;
  handleActiveChannel: () => void;
  icon: JSX.Element;
}

const ChannelsItems = ({
  channelName,
  icon,
  isActive,
  handleActiveChannel,
}: ChannelsItemsProps) => {
  // TODO: Fix rerender of all list items when toggling channels
  // console.log(channelName, 'was rendered');
  return (
    <ListItem
      display="flex"
      position="relative"
      alignItems="center"
      cursor="pointer"
      borderLeft="3px solid transparent"
      paddingX={2}
      gridGap={4}
      _hover={{
        borderLeft: '3px solid',
        borderColor: 'primary',
      }}
      onClick={handleActiveChannel}
    >
      <ListIcon
        as={() => (
          <ChannelsIconContainer isActive={isActive}>
            {icon}
          </ChannelsIconContainer>
        )}
      />
      <Text as="div" color={isActive ? 'text' : 'neutral'}>
        {channelName}
      </Text>
    </ListItem>
  );
};

const Channels = () => {
  const [isGoogleActive, setIsGoogleActive] = useState(true);
  const [isFacebookActive, setIsFacebookActive] = useState(true);
  const [isTwitterActive, setIsTwitterActive] = useState(true);
  const [isLinkedinActive, setIsLinkedinActive] = useState(false);
  const [isPinterestActive, setIsPinterestActive] = useState(false);
  const [isSlasckActive, setIsSlasckActive] = useState(false);

  const listItems = [
    {
      channelName: 'Google',
      icon: <GoogleIcon />,
      isActive: isGoogleActive,
      handleActiveChannel: () => setIsGoogleActive(!isGoogleActive),
    },
    {
      channelName: 'Facebook',
      icon: <FacebookIcon />,
      isActive: isFacebookActive,
      handleActiveChannel: () => setIsFacebookActive(!isFacebookActive),
    },
    {
      channelName: 'Twitter',
      icon: <TwitterIcon />,
      isActive: isTwitterActive,
      handleActiveChannel: () => setIsTwitterActive(!isTwitterActive),
    },
    {
      channelName: 'Linkedin',
      icon: <LinkedinIcon />,
      isActive: isLinkedinActive,
      handleActiveChannel: () => setIsLinkedinActive(!isLinkedinActive),
    },
    {
      channelName: 'Pinterest',
      icon: <PinterestIcon />,
      isActive: isPinterestActive,
      handleActiveChannel: () => setIsPinterestActive(!isPinterestActive),
    },
    {
      channelName: 'Slack',
      icon: <SlackIcon />,
      isActive: isSlasckActive,
      handleActiveChannel: () => setIsSlasckActive(!isSlasckActive),
    },
  ];

  return (
    <VStack as="section" spacing={10}>
      <Heading as="h1" size="xs" alignSelf="start">
        CHANNELS
      </Heading>
      <List spacing={2} fontSize="18px">
        {listItems.map((item) => (
          <ChannelsItems key={item.channelName} {...item} />
        ))}
      </List>
    </VStack>
  );
};

export default Channels;
