import React from "react";

import SocialMediaData from "../resources/data/SocialMediaData";

const ShareSocialMedia = () => {
  let Data = SocialMediaData.map(
    ({ id, title, address, icon, share }, index) => (
      <React.Fragment key={index}>{share}</React.Fragment>
    )
  );
  return <React.Fragment>{Data}</React.Fragment>;
};

export default ShareSocialMedia;
