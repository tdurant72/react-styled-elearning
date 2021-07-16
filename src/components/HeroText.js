import React from "react";
import styled from "styled-components";
import { H2, H5 } from '../styles/TextStyles';
import { themes } from '../styles/ColorStyles';
const HeroText = () => {
    return (
        <Container>
            <HeroByline>Online education for people of all ages</HeroByline>
            <HeroCallouts>Learn</HeroCallouts>
            <HeroCallouts>Anything.</HeroCallouts>
            <HeroCallouts>Anytime.</HeroCallouts>
            <HeroCallouts>Anywhere.</HeroCallouts>
            <BtnContainer>
                <button className="readmore">Read More</button>
                <button>7 Day Free Trial</button>
            </BtnContainer>
        </Container>
    );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: ${themes.primary.dark};
    border: none;
    padding: 0.9rem 1.1rem;
    color: ${themes.primary.lightText};
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px ${themes.primary.dark};
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px ${themes.primary.dark};
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: ${themes.primary.dark};
    background: transparent;
    border: 3px solid ${themes.primary.dark};
    font-weight:400;
    &:hover {
      box-shadow: 0px 17px 16px -11px ${themes.primary.dark};
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
`;
const HeroCallouts = styled(H2) `
  &:nth-of-type(1) {
      color: #af60ff;
      /* font-weight: 700; */
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
`;
const HeroByline = styled(H5) `
    color: #515151;
    margin-bottom: 1rem;
`;
export default HeroText;