import styled from 'styled-components';
import theme from '../../../styles/theme';

export default styled.div`
  width: 100%;

  > nav {
    display: flex;
    color: ${theme.colors.foreground};

    @media screen and (max-width: 799px) {
      font-size: ${theme.sizes.font_size_cozy};
    }
    @media screen and (min-width: 800px) {
      font-size: ${theme.sizes.font_size_spacious};
    }

    > * {
      flex-grow: 1;
      list-style: none;

      @media screen and (max-width: 799px) {
        padding: 5px 0 5px 0;
      }
      @media screen and (min-width: 800px) {
        padding: 20px 0 20px 0;
      }
    }

    a, a:visited {
      color: ${theme.colors.foreground};
      text-decoration: none;
      border-radius: 10px 5px 10px 5px;
      @media screen and (max-width: 799px) {
        padding: 5px 5px 5px 5px;
      }
      @media screen and (min-width: 800px) {
        padding: 10px 5px 10px 5px;
      }
    }

    a:hover, a:focus {
      background-color: ${theme.colors.foreground};
      color: ${theme.colors.background};
      outline: none;
    }

    ul {
      margin: 0;
    }
  }

  > nav ul.navigation {
    display: flex;
    align-items: center;

    @media screen and (max-width: 799px) {
      padding-left: 5px;
    }
    @media screen and (min-width: 800px) {
      padding-left: 20px;
    }

    > .logo {
      display: flex;
      align-items: center;

      a {
        padding: 0;
      }

      img {
        @media screen and (max-width: 799px) {
          height: 30px;
          width: 30px;
          margin-right: 5px;
        }
        @media screen and (min-width: 800px) {
          height: 50px;
          width: 50px;
          margin-right: 10px;
        }
      }
    }

    > li {
      @media screen and (max-width: 799px) {
        margin-right: 5px;
      }
      @media screen and (min-width: 800px) {
        margin-right: 40px;
      }

      > a {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        &.active {
          border-bottom: 1px solid white;
        }
      }
    }

    > li:first-child {
      > a:hover {
        background-color: ${theme.colors.background};
        color: ${theme.colors.foreground};
      }
    }
  }

  > nav ul.contextual {
    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;

    @media screen and (max-width: 799px) {
      padding-right: 5px;
    }
    @media screen and (min-width: 800px) {
      padding-right: 20px;
    }

    > li {
      @media screen and (max-width: 799px) {
        margin-left: 5px;
      }
      @media screen and (min-width: 800px) {
        margin-left: 40px;
      }
    }
  }
`;