import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: inline-flex;
  overflow: hidden;

  @media screen and (max-width: 799px) {
    min-width: 13px;
    min-height: 13px;
  }
  @media screen and (min-width: 800px) {
    min-width: 22px;
    min-height: 22px;
  }
`;

const Animation = styled.span`
  flex-grow: 1;
  background: url('https://assets.growme.fyi/loading_small.png') center/contain no-repeat;
  animation: spin 1s linear infinite;
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

export default function LoadingInlineStyle(props) {
  const className = props && props.className
    ? `${props.className} loading`
    : 'loading';
  return <Container className={className} {...props}><Animation /></Container>;
}