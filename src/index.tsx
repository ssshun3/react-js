import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "./react/Page";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Page />
  </StrictMode>
);
