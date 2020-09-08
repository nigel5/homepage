import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto Mono', monospace;
  }
  html {
    margin: 0;
    padding: 0;
  }
  code {
    font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  a {
    color: ${({ theme }) => theme.a.color};
  }
`;
