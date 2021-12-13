import styled from "styled-components";

export const StyledContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  min-height: 100vh;
`;

export const StyledContent = styled.div`
  margin: auto;
`;

export const StyledContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  grid-gap: 0rem 1.5rem;
  margin: 0 0 4rem 0;
  min-height: 320px;
`;

export const StyledHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111111;
  margin: 0 0 1rem 0;
`;
