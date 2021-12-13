import styled from "styled-components";

export const StyledPostWrapper = styled.article`
  background: #111111;
  padding: 1.5rem;
  border-radius: 24px;
  max-width: 1045px;
`;

export const StyledPostHeader = styled.div`
  position: relative;
  margin: 0 0 1.75rem 0;
`;

export const StyledPostHeaderReshareUserContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0.75rem 0;
`;

export const StyledPostHeaderReshareIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0 0.3rem 0 0;
`;

export const StyledPostHeaderDetail = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  /* Text/Medium */
  color: #a2a2a2;
`;

export const StyledPostHeaderTimeStamp = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  /* Text/Medium */
  color: #a2a2a2;
  text-align: right;
  margin: 0 0 0.75rem 0;
`;

export const StyledPostHeaderReshareContent = styled.div`
  border-bottom: 1px solid #494949;
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 0 1.5rem 0;
`;

export const StyledPostHeaderUserWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const StyledPostHeaderUserContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPostHeaderUserAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 0.75rem 0 0;
`;

export const StyledPostHeaderUserDetails = styled.div`
  position: relative;
`;

export const StyledPostHeaderUserName = styled.p`
  /* Body/Large 16•24 */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fafafa;
`;

export const StyledPostHeaderListDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPostHeaderListIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.3rem 0 0;
`;

export const StyledPostHeaderListDetail = styled.p`
  /* Regular/Body */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin: 0 0.5rem 0 0;
  line-height: 150%;
  /* identical to box height, or 24px */
  letter-spacing: 0.005em;
  color: ${(props) => props.color || "#ffffff"};
`;

export const StyledPostHeaderListDetailUnderlined = styled(
  StyledPostHeaderListDetail
)`
  text-decoration: underline;
`;

export const StyledPostFooterWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const StyledPostFooterStats = styled.div`
  display: flex;
`;

export const StyledPostFooterStat = styled.div`
  margin: 0 2rem 0 0;
`;

export const StyledPostFooterStatTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-transform: uppercase;
  letter-spacing: 0.01em;

  /* Text/Medium */

  color: #a2a2a2;
  margin: 0 0 0.25rem 0;
`;

export const StyledPostFooterStatData = styled(StyledPostFooterStatTitle)`
  font-size: 1rem;
  color: #ffffff;

  span {
    margin: 0 0.75rem 0 0;
  }
`;

export const StyledPostFooterCollectCTA = styled.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  padding: 12px 18px 12px 24px;
  border: 1px solid #494949;
  box-sizing: border-box;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:focus,
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const StyledPostFooterCollectIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0 0 0.5rem;
`;

export const StyledPostShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 4rem;

  img {
    margin: 0 0.75rem 0 0;

    &:last-child {
      margin: 0;
    }
  }
`;

export const StyledPostActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPostActionIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const StyledPostContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-gap: 2rem;
  align-items: start;
  margin: 0 0 1.5rem 0;
`;

export const StyledPostContentSlider = styled.div`
  position: relative;
`;

export const StyledPostContentSlide = styled.img`
  height: 532px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const StyledPostThumbGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StyledPostThumbGridItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const StyledPostThumbGridItem = styled.li`
  position: relative;
  border-radius: 0.25rem;
  height: 116px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${StyledPostThumbGridItemOverlay} {
    opacity: 1;
  }
`;

export const StyledPostThumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
  transition: transform 0.3s ease;
`;
