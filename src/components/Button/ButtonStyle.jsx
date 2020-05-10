import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import PropTypes from 'prop-types';

const ButtonStyle = styled.span`
  && {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    > button, > a, > a:visited {
      display: inline-flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      background-color: ${props => {
        if (props.icon) return theme.colors.background;
        if (props.isCta) return theme.colors.secondary;
        return theme.colors.primary;
      }};
      border: none;
      margin: 10px 5px;
      cursor: pointer;
      border-radius: 10px 5px 10px 5px;
      padding-left: ${props => {
        if (props.icon) return '5px';
        return '20px';
      }};
      padding-right: ${props => {
        if (props.icon) return '5px';
        return '20px';
      }};
      color: ${theme.colors.foreground};
      text-decoration: none;
      text-align: center;
      outline: none;

      &:hover {
        background-color: ${props => {
          if (props.icon) return theme.colors.background_darken_2;
          if (props.isCta) return theme.colors.secondary_darken_2;
          return theme.colors.primary_darken_2;
        }};
      }

      &:focus {
        background-color: ${theme.colors.foreground};
        color: ${theme.colors.background};
      }

      &:active {
        background-color: ${props => {
          if (props.icon) return theme.colors.background;
          if (props.isCta) return theme.colors.secondary_darken_4;
          return theme.colors.primary_darken_4;
        }};
        color: ${theme.colors.foreground};
      }

      padding-top: ${props => {
        if (props.icon) return '5px';
        return '16px;';
      }};
      padding-bottom: ${props => {
        if (props.icon) return '5px';
        return '16px';
      }};

      @media (max-width: 799px) {
        font-size: ${theme.sizes.font_size_cozy};
      }
      @media (min-width: 800px) {
        font-size: ${theme.sizes.font_size_spacious};
      }

      > * {
        &:not(:first-child) {
          @media screen and (max-width: 799px) {
            margin-left: 2px;
          }
          @media screen and (min-width: 800px) {
            margin-left: 5px;
          }
        }
        &:not(:last-child) {
          @media screen and (max-width: 799px) {
            margin-right: 2px;
          }
          @media screen and (min-width: 800px) {
            margin-right: 5px;
          }
        }
      }

      > .loading {
        background-color: ${theme.colors.background};
        border-radius: ${theme.styles.border_radius};

        @media screen and (max-width: 799px) {
          padding: 2px;
          min-height: 12px;
          min-width: 12px;
        }
        @media screen and (min-width: 800px) {
          padding: 5px;
          min-height: 15px;
          min-width: 15px;
        }
      }
    }
  }
`;

ButtonStyle.propTypes = {
  isCta: PropTypes.bool
};

ButtonStyle.defaultProps = {
  isCta: false
};

export default ButtonStyle;
