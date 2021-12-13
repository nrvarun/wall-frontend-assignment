import NFT from "@components/NFT";
import React from "react";
import { StyledContentGrid } from "./home.styles";

interface Props {}

const HomeNFTCards = (props: Props) => {
  return (
    <StyledContentGrid>
      <NFT
        img_url="/assets/cards/1.png"
        title="NFT name here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat fames ipsum sagittis. Elementum ullamcorper nibh nunc enim ipsum...more"
      />
      <NFT
        img_url="/assets/cards/2.png"
        title="NFT name here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat fames ipsum sagittis. Elementum ullamcorper nibh nunc enim ipsum...more"
      />
      <NFT
        img_url="/assets/cards/3.png"
        title="NFT name here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat fames ipsum sagittis. Elementum ullamcorper nibh nunc enim ipsum...more"
      />
      <NFT
        img_url="/assets/cards/4.png"
        title="NFT name here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat fames ipsum sagittis. Elementum ullamcorper nibh nunc enim ipsum...more"
      />
      <NFT
        img_url="/assets/cards/5.png"
        title="NFT name here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat fames ipsum sagittis. Elementum ullamcorper nibh nunc enim ipsum...more"
      />
      <NFT
        img_url="/assets/cards/6.png"
        title="NFT name here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat fames ipsum sagittis. Elementum ullamcorper nibh nunc enim ipsum...more"
      />
      <NFT
        img_url="/assets/cards/7.png"
        title="NFT name here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat fames ipsum sagittis. Elementum ullamcorper nibh nunc enim ipsum...more"
      />
    </StyledContentGrid>
  );
};

export default HomeNFTCards;
