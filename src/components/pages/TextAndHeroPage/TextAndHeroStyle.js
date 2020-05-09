import styled from 'styled-components';
import theme from '../../../../styles/theme';

export default styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;

  > .content {
    flex-grow: 1;
    width: 100%;
    display: flex;
    box-sizing: border-box;

    @media (max-width: 799px) {
      flex-flow: column nowrap;
      padding: 20px;
      padding-bottom: 50px;

      > * {
        height: 50%;
      }
    }
    @media (min-width: 800px) {
      flex-flow: row nowrap;
      padding: 50px;

      > * {
        width: 50%;
      }
    }

    > main {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      h1 {
        @media (max-width: 799px) {
          font-size: 10vw;
        }
        @media (min-width: 800px) {
          font-size: 5vw;
        }
      }
      h2 {
        @media (max-width: 799px) {
          font-size: 5vw;
        }
        @media (min-width: 800px) {
          font-size: 2.5vw;
        }
      }
    }

    > figure {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      .image {
        background: url('${props => props.imageSource}') center/contain no-repeat;
        width: 100%;
        flex-grow: 1;
      }
    }

    @media (max-height: 700px) and (max-width: 799px) {
      > main {
        height: 100%;
      }
      > figure {
        display: none;
      }
    }
  }
`;