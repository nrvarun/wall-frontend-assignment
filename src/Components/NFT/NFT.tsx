import {
  StyledAuthorAvatar,
  StyledAuthorContent,
  StyledAuthorName,
  StyledAuthorWrapper,
  StyledCardWrapper,
  StyledNFTActionIcon,
  StyledNFTActions,
  StyledNFTContent,
  StyledNFTContentDetail,
  StyledNFTContentOverlay,
  StyledNFTContentTitle,
  StyledNFTContentWrapper,
  StyledNFTCryptoIcon,
  StyledNFTImage,
  StyledNFTLiveButton,
  StyledNFTShare,
  StyledNFTStatsButton,
  StyledWrapper,
} from "./nft.styles";
import NFTOverlayContent from "./NFTOverlayContent";

interface NFTCardProps {
  title: string;
  description: string;
  img_url: string;
}

const NFT = ({ title, description, img_url }: NFTCardProps) => {
  return (
    <StyledWrapper>
      <StyledCardWrapper>
        <StyledNFTContentWrapper>
          <StyledNFTCryptoIcon
            src="/assets/icons/crypto.svg"
            alt="crypto icon"
          />
          <StyledNFTActions>
            <StyledNFTLiveButton>Live</StyledNFTLiveButton>
            <StyledNFTStatsButton>10.5Ξ</StyledNFTStatsButton>
          </StyledNFTActions>
          <StyledNFTImage src={img_url} alt="nft" />
          <StyledNFTContentOverlay />
          <NFTOverlayContent title={title} description={description} />
        </StyledNFTContentWrapper>
      </StyledCardWrapper>
      <StyledAuthorWrapper>
        <StyledAuthorContent>
          <StyledAuthorAvatar src="/assets/avatar-nft.png" alt="@ash_uxi" />
          <StyledAuthorName>@ash_uxi</StyledAuthorName>
        </StyledAuthorContent>
        <StyledNFTShare>
          <StyledNFTActionIcon src="/assets/icons/reshare.svg" alt="share" />
          <StyledNFTActionIcon src="/assets/icons/share.svg" alt="share" />
        </StyledNFTShare>
      </StyledAuthorWrapper>
    </StyledWrapper>
  );
};

export default NFT;
