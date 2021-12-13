import React from "react";
import {
  StyledNFTContent,
  StyledNFTContentDetail,
  StyledNFTContentTitle,
} from "./nft.styles";

interface ContentProps {
  title: string;
  description: string;
}

const NFTOverlayContent = ({ title = "", description = "" }: ContentProps) => {
  return (
    <StyledNFTContent>
      <StyledNFTContentTitle>{title}</StyledNFTContentTitle>
      <StyledNFTContentDetail>{description}</StyledNFTContentDetail>
    </StyledNFTContent>
  );
};

export default NFTOverlayContent;
