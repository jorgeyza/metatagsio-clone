import { Heading, VStack, List, ListItem, Text } from "@chakra-ui/react";

import GoogleIcon from "../../Icons/GoogleIcon";
import FacebookIcon from "../../Icons/FacebookIcon";
import TwitterIcon from "../../Icons/TwitterIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import PinterestIcon from "../../Icons/PinterestIcon";
import SlackIcon from "../../Icons/SlackIcon";
import { ChannelsIconContainer } from "../../Icons/ChannelsIconContainer";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleChannel } from "../../app/uiSlice";

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
        borderLeft: "3px solid",
        borderColor: "primary",
      }}
      onClick={handleActiveChannel}
    >
      <ChannelsIconContainer isActive={isActive}>{icon}</ChannelsIconContainer>
      <Text as="div" color={isActive ? "text" : "neutral"}>
        {channelName}
      </Text>
    </ListItem>
  );
};

const Channels = () => {
  const dispatch = useAppDispatch();
  const googleChannel = useAppSelector((state) => state.ui.googleChannel);
  const facebookChannel = useAppSelector((state) => state.ui.facebookChannel);
  const twitterChannel = useAppSelector((state) => state.ui.twitterChannel);
  const linkedinChannel = useAppSelector((state) => state.ui.linkedinChannel);
  const pinterestChannel = useAppSelector((state) => state.ui.pinterestChannel);
  const slackChannel = useAppSelector((state) => state.ui.slackChannel);

  const listItems = [
    {
      channelName: "Google",
      icon: <GoogleIcon />,
      isActive: googleChannel,
      handleActiveChannel: () => dispatch(toggleChannel({ channelName: "googleChannel" })),
    },
    {
      channelName: "Facebook",
      icon: <FacebookIcon />,
      isActive: facebookChannel,
      handleActiveChannel: () => dispatch(toggleChannel({ channelName: "facebookChannel" })),
    },
    {
      channelName: "Twitter",
      icon: <TwitterIcon />,
      isActive: twitterChannel,
      handleActiveChannel: () => dispatch(toggleChannel({ channelName: "twitterChannel" })),
    },
    {
      channelName: "Linkedin",
      icon: <LinkedinIcon />,
      isActive: linkedinChannel,
      handleActiveChannel: () => dispatch(toggleChannel({ channelName: "linkedinChannel" })),
    },
    {
      channelName: "Pinterest",
      icon: <PinterestIcon />,
      isActive: pinterestChannel,
      handleActiveChannel: () => dispatch(toggleChannel({ channelName: "pinterestChannel" })),
    },
    {
      channelName: "Slack",
      icon: <SlackIcon />,
      isActive: slackChannel,
      handleActiveChannel: () => dispatch(toggleChannel({ channelName: "slackChannel" })),
    },
  ];

  return (
    <VStack as="section" spacing={10} alignItems="start">
      <Heading as="h1" fontSize="11px">
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
