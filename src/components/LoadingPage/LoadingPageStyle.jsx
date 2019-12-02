import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Animation = styled.div`
  flex-grow: 1;
  animation: spin 20s linear infinite;
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  margin: 10%;

  @media screen and (max-width: 799px) {
    background: url('https://assets.growme.fyi/loading_medium.png') center/contain no-repeat;
  }
  @media screen and (min-width: 800px) {
    background: url('https://assets.growme.fyi/loading_large.png') center/contain no-repeat;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
`;

export default function LoadingPageStyle(props) {
  return (
    <Wrapper {...props}>
      <Animation />
    </Wrapper>
  );
}