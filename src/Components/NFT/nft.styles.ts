import { THEME } from "config";
import styled from "styled-components";

export const StyledWrapper = styled.article`
  margin: 0 0 0.75rem 0;
  border-radius: ${THEME.cardBorderRadius};
`;

export const StyledAuthorWrapper = styled.div`
  border-radius: calc(2 * ${THEME.cardBorderRadius});
  background-color: #111111;
  border: 1px solid #1a1a1a;
  padding: 0.75rem;
  display: grid;
  grid-template-columns: auto auto;
`;

export const StyledNFTShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  img {
    margin: 0 0.75rem 0 0;

    &:last-child {
      margin: 0;
    }
  }
`;

export const StyledAuthorContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledAuthor = styled.div`
  display: flex;
`;

export const StyledAuthorAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 0.5rem 0 0;
`;

export const StyledNFTActionIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const StyledAuthorName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  letter-spacing: 0.01em;
  color: #fafafa;
`;

export const StyledNFTContent = styled.div`
  padding: 0.875rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transform: translateY(40%);
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 3;
  pointer-events: none;
`;

export const StyledNFTImage = styled.img`
  height: 330px;
  min-height: 330px;
  width: 100%;
  z-index: 2;
  object-fit: cover;
  display: block;
  border-radius: ${THEME.cardBorderRadius};
`;

export const StyledNFTContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${THEME.cardBorderRadius};
`;

export const StyledNFTContentOverlay = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, #000000 100%);
  transition: opacity 0.3s ease-out;
  opacity: 0;
  pointer-events: none;
`;

export const StyledCardWrapper = styled.div`
  box-shadow: 8.01437px 19.2345px 19.2345px -8.01437px rgba(0, 0, 0, 0.3);
  border-radius: ${THEME.cardBorderRadius};
  cursor: pointer;
  min-height: 320px;
  margin: 0.75rem 0px;
  background: #757f9a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #d7dde8,
    #757f9a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #d7dde8,
    #757f9a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  &:hover ${StyledNFTContentOverlay} {
    opacity: 1;
    pointer-events: all;
  }

  &:hover ${StyledNFTContent} {
    opacity: 1;
    pointer-events: all;
    transform: translateX(0);
  }
`;

export const StyledNFTContentTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 0.35rem 0;
  letter-spacing: 0.01em;
  color: #fafafa;
`;

export const StyledNFTContentDetail = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #a2a2a2;
`;

export const StyledNFTCryptoIcon = styled.img`
  position: absolute;
  top: 0.875rem;
  left: 0.875rem;
  width: 2rem;
  height: 2rem;
`;

export const StyledNFTActions = styled.div`
  position: absolute;
  top: 0.875rem;
  right: 0.875rem;
  display: flex;
  align-items: center;

  p {
    margin: 0 0.5rem 0 0;

    &:last-child {
      margin: 0;
    }
  }
`;

export const StyledNFTLiveButton = styled.p`
  padding: 0.15rem 0.75rem;
  background: #dc3545;
  border-radius: 56px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: 0.01em;

  /* Text/High */

  color: #fafafa;
`;

export const StyledNFTStatsButton = styled.p`
  padding: 0.15rem 0.75rem;
  background: #080808;
  border-radius: 56px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: 0.01em;

  /* Text/High */

  color: #fafafa;
`;
