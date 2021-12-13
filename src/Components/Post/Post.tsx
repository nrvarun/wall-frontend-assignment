import React from "react";
import { StyledPostWrapper } from "./post.styles";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

interface Props {}

const Post = (props: Props) => {
  return (
    <StyledPostWrapper>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </StyledPostWrapper>
  );
};

export default Post;
