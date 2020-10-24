import { h, render } from "preact";
import { setup, glob } from "goober";
import { Root } from "./root";

setup(h);

glob`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
  }
`;

render(<Root></Root>, document.body);
