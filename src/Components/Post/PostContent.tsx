import React, { useState } from "react";
import {
  StyledPostContentSlide,
  StyledPostContentSlider,
  StyledPostContentWrapper,
  StyledPostThumb,
  StyledPostThumbGrid,
  StyledPostThumbGridItem,
} from "./post.styles";

interface Props {}

const DEMO_SLIDES = [
  {
    id: 1,
    title: "mutant cat 1",
    img_url: "./assets/post/thumbs/1.png",
  },
  {
    id: 2,
    title: "mutant cat 2",
    img_url: "./assets/post/thumbs/2.png",
  },
  {
    id: 3,
    title: "mutant cat 3",
    img_url: "./assets/post/thumbs/3.png",
  },
  {
    id: 4,
    title: "mutant cat 4",
    img_url: "./assets/post/thumbs/4.png",
  },
  {
    id: 5,
    title: "mutant cat 5",
    img_url: "./assets/post/thumbs/5.png",
  },
  {
    id: 6,
    title: "mutant cat 6",
    img_url: "./assets/post/thumbs/6.png",
  },
  {
    id: 7,
    title: "mutant cat 7",
    img_url: "./assets/post/thumbs/7.png",
  },
];

const PostContent = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  return (
    <StyledPostContentWrapper>
      <StyledPostContentSlider>
        <StyledPostContentSlide
          src={`/assets/post/${activeSlide}.png`}
          alt="post"
        />
      </StyledPostContentSlider>
      <StyledPostThumbGrid>
        {DEMO_SLIDES.map(({ id, img_url, title }, index) => (
          <StyledPostThumbGridItem
            key={id}
            onClick={() => handleSlideChange(id)}
            style={{
              border: `2px solid ${
                id === activeSlide ? "#ffffff" : "transparent"
              }`,
            }}
          >
            <StyledPostThumb src={img_url} alt={title} />
          </StyledPostThumbGridItem>
        ))}
      </StyledPostThumbGrid>
    </StyledPostContentWrapper>
  );
};

export default PostContent;
