import NFT from "@components/NFT";

import {
  StyledContainer,
  StyledContentGrid,
  StyledHeading,
} from "./home.styles";

interface Props {}

const Home = (props: Props) => {
  return (
    <StyledContainer>
      <StyledHeading>NFT Cards</StyledHeading>
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
    </StyledContainer>
  );
};

export default Home;
