import NFT from "@components/NFT";
import Post from "@components/Post";

import {
  StyledContainer,
  StyledContentGrid,
  StyledHeading,
} from "./home.styles";
import HomeNFTCards from "./HomeNFTCards";

interface Props {}

const Home = (props: Props) => {
  return (
    <StyledContainer>
      <StyledHeading>NFT Cards</StyledHeading>
      <HomeNFTCards />
      <StyledHeading>Post Card</StyledHeading>
      <Post />
    </StyledContainer>
  );
};

export default Home;
