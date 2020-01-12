import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton
} from "react-share";
import React from "react";
const SocialMediaData = [
  {
    id: 1,
    title: "twitter",
    address: "https://twitter.com",
    icon: <TwitterIcon size="32" round="true" />,
    share: (
      <TwitterShareButton
        url="https://twitter.com"
        children={<TwitterIcon size="32" round="true" />}
      />
    )
  },
  {
    id: 2,
    account: "facebook",
    address: "https://facebook.com",
    icon: <FacebookIcon size="32" round="true" />,
    share: (
      <FacebookShareButton
        url="https://facebook.com"
        children={<FacebookIcon size="32" round="true" />}
      />
    )
  },
  {
    id: 3,
    account: "whatsapp",
    address: "https://wa.me/923354904686",
    icon: <WhatsappIcon size="32" round="true" />,
    share: (
      <WhatsappShareButton
        url="https://wa.me/923354904686"
        children={<WhatsappIcon size="32" round="true" />}
      />
    )
  }
];
export default SocialMediaData;
