import React from "react";
import {
  StyledPostHeader,
  StyledPostHeaderDetail,
  StyledPostHeaderReshareContent,
  StyledPostHeaderReshareIcon,
  StyledPostHeaderReshareUserContent,
  StyledPostHeaderTimeStamp,
  StyledPostHeaderUserAvatar,
  StyledPostHeaderUserContent,
  StyledPostHeaderUserDetails,
  StyledPostHeaderUserName,
  StyledPostHeaderUserWrapper,
  StyledPostHeaderListDetails,
  StyledPostHeaderListIcon,
  StyledPostHeaderListDetail,
  StyledPostHeaderListDetailUnderlined,
} from "./post.styles";

interface Props {}

const PostHeader = (props: Props) => {
  return (
    <StyledPostHeader>
      <StyledPostHeaderReshareContent>
        <StyledPostHeaderReshareUserContent>
          <StyledPostHeaderReshareIcon src="/assets/icons/reshare.svg" />
          <StyledPostHeaderDetail>@Ash_uxi reshared</StyledPostHeaderDetail>
        </StyledPostHeaderReshareUserContent>
        <StyledPostHeaderTimeStamp>32 sec ago</StyledPostHeaderTimeStamp>
      </StyledPostHeaderReshareContent>
      <StyledPostHeaderUserWrapper>
        <StyledPostHeaderUserContent>
          <StyledPostHeaderUserAvatar
            src="/assets/avatar-post.png"
            alt="0xelvis"
          />
          <StyledPostHeaderUserDetails>
            <StyledPostHeaderUserName>@0xelvis</StyledPostHeaderUserName>
            <StyledPostHeaderListDetails>
              <StyledPostHeaderListIcon src="/assets/icons/listed.svg" />
              <StyledPostHeaderListDetail color="#FF9254">
                Listed
              </StyledPostHeaderListDetail>
              <StyledPostHeaderListDetail>
                4 items of
              </StyledPostHeaderListDetail>
              <StyledPostHeaderListDetailUnderlined>
                Mutant Cat
              </StyledPostHeaderListDetailUnderlined>
            </StyledPostHeaderListDetails>
          </StyledPostHeaderUserDetails>
        </StyledPostHeaderUserContent>
        <StyledPostHeaderTimeStamp>2h ago</StyledPostHeaderTimeStamp>
      </StyledPostHeaderUserWrapper>
    </StyledPostHeader>
  );
};

export default PostHeader;
