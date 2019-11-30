import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

export default styled.div`
  a {
    color: ${theme.colors.foreground_1};
    text-decoration: none;
    border-radius: 10px 5px 10px 5px;
    padding: 10px 5px 10px 5px;
  }

  a:hover {
    background-color: ${theme.colors.foreground_1};
    color: ${theme.colors.background_1};
  }

  > nav {
    background-color: ${theme.colors.background_1};
    color: ${theme.colors.foreground_1};
    font-size: ${theme.sizes.font_size_spacious};
    display: flex;
    > * {
      flex-grow: 1;
      list-style: none;
      padding-left: 0;
      padding-right: 0;
    }
  }

  > nav ul.navigation {
    display: flex;
    align-items: center;
    padding-left: 20px;

    > .logo {
      display: flex;
      align-items: center;
    }

    > li {
      margin-right: 40px;

      > a {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        > img {
          margin-right: 10px;
        }
      }
    }

    > li:first-child {
      > a:hover {
        background-color: ${theme.colors.background_1};
        color: ${theme.colors.foreground_1};
      }
    }
  }

  > nav ul.contextual {
    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;
    padding-right: 20px;
  }
`;