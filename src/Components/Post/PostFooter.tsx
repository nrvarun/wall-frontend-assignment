import React from "react";
import {
  StyledPostActionIcon,
  StyledPostActionsWrapper,
  StyledPostFooterCollectCTA,
  StyledPostFooterCollectIcon,
  StyledPostFooterStat,
  StyledPostFooterStatData,
  StyledPostFooterStats,
  StyledPostFooterStatTitle,
  StyledPostFooterWrapper,
  StyledPostShare,
} from "./post.styles";

interface Props {}

const PostFooter = (props: Props) => {
  return (
    <StyledPostFooterWrapper>
      <StyledPostFooterStats>
        <StyledPostFooterStat>
          <StyledPostFooterStatTitle>current bid</StyledPostFooterStatTitle>
          <StyledPostFooterStatData>1.00 ETH</StyledPostFooterStatData>
        </StyledPostFooterStat>
        <StyledPostFooterStat>
          <StyledPostFooterStatTitle>ENDING IN</StyledPostFooterStatTitle>
          <StyledPostFooterStatData>
            <span>23h</span>
            <span>26m</span>
            <span>9s</span>
          </StyledPostFooterStatData>
        </StyledPostFooterStat>
        <StyledPostFooterStat>
          <StyledPostFooterCollectCTA>
            Collect
            <StyledPostFooterCollectIcon
              src="/assets/icons/collect.svg"
              alt="collect the item"
            />
          </StyledPostFooterCollectCTA>
        </StyledPostFooterStat>
      </StyledPostFooterStats>
      <StyledPostActionsWrapper>
        <StyledPostShare>
          <StyledPostActionIcon src="/assets/icons/reshare.svg" alt="share" />
          <StyledPostActionIcon src="/assets/icons/share.svg" alt="share" />
        </StyledPostShare>
      </StyledPostActionsWrapper>
    </StyledPostFooterWrapper>
  );
};

export default PostFooter;
