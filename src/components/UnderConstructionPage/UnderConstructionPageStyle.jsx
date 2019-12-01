import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

export default styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 799px) {
    margin: 10px 5px 5px 5px;
  }
  @media screen and (min-width: 800px) {
    margin: 40px 20px 40px 20px;
  }

  h1 {
    color: ${theme.colors.foreground_1};
    font-weight: 400;
    margin: 0;
    text-align: center;

    @media screen and (max-width: 799px) {
      font-size: 48px;
      margin-bottom: 10px;
    }
    @media screen and (min-width: 800px) {
      font-size: 72px;
      margin-bottom: 40px;
    }
  }

  .under_construction {
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (max-width: 799px) {
      background-image: url('https://assets.growme.fyi/under_construction_small.jpg');
    }
    @media screen and (min-width: 800px) {
      background-image: url('https://assets.growme.fyi/under_construction_large.jpg');
    }
  }
`;