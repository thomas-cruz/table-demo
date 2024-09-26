import { App } from "./App.js";
import React from "react";
import { createRoot } from "react-dom/client";
import { loadFonts } from "./loadFonts/index.js"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
);


loadFonts()