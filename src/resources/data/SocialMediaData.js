import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import React from "react";
const SocialMediaData = [
  {
    id: 1,
    title: "twitter",
    address: "https://twitter.com",
    icon: <TwitterIcon size="32" round="true" />,
    share: (
      <FacebookShareButton
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
  }
];
export default SocialMediaData;
