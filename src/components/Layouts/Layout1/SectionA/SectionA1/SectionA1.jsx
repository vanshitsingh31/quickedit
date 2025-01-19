import React from "react";
import styled from "styled-components";
import CardsWrapper from "./CardsWrapper";

const StyledSection = styled.div`
  background: ${props => props.theme.color.dark};
  & *{
    color: ${props => props.theme.color.light};
  }
  text-align: center;
  & > div > p{
    margin-top: 16px;
  }
`;

const SectionA1 = (props) => {
  return (
    <StyledSection {...props}>
      <div className="maxWidth paddingVer paddingHor">
        <h2> You request, we make it happen </h2>
        <p>
          Subscribe to one of our plans and start making your design request.
          <br /> We will tackle each request one at a time and revise until you
          are 100% satisfied.
        </p>
        <CardsWrapper />
      </div>
    </StyledSection>
  );
};

export default SectionA1;
