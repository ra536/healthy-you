import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const SocialShareButtons = (props) => {
  const link = props.link;

  return (
    <>
      <FacebookShareButton url={link}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>{" "}
      <TwitterShareButton url={link}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>{" "}
      <LinkedinShareButton url={link}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>{" "}
      <EmailShareButton url={link}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </>
  );
};

export default SocialShareButtons;
