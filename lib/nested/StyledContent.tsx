import { useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ReactNode } from "react";

export const StyledContent = ({children} : { children : ReactNode}) => {
  const { colorMode } = useColorMode();
  return (
  <div css={css`
    margin-top: 0.75em;
  h1 {margin-top: 0.75em; font-size : 2.3rem}
  h2 {margin-top: 0.75em; font-size : 2rem;}
  h3 {margin-top: 0.75em; font-size : 1.8rem;}
  h4 {margin-top: 0.75em; font-size : 1.6rem;}
  h5 {margin-top: 0.75em; font-size : 1.4rem;}
  h6 {margin-top: 0.75em; font-size : 1.2rem;}
  ul,
  ol {
    margin-top: 0.75em;
    padding: 0 1rem;
  }
  code {
    color: #616161;
  }

  pre {
    margin-top: 0.75em;
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }
  blockquote {
    margin-top: 0.75em;
    padding-left: 3rem;
    border-left-color: beige;
    border-left-style: solid;
    border-left-width: medium;
  }
  hr {
    border-top: 2px solid ${colorMode === 'light' ? '#0D0D0D' : 'white'};
    margin: 2rem 0;
  }
  p {margin-top: 0.75em;}
  `}>
    {children}
  </div>
)
}