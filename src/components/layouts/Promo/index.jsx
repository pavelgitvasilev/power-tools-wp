// libraries
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

export const Promo = ({ data }) => {
const { title } = data;

  return (
    <StyledPromo>
      <div>{title}</div>
    </StyledPromo>
  );
};

const StyledPromo = styled.div``;

export const query = graphql`
  fragment Promo on WpPage_Layouts_Layouts_Promo {
    title
  }
`;
