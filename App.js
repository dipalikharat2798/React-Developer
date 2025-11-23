import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child-1" },
      [
        React.createElement("h1", { key: "h1-1" }, "hello h1!!!!!!!!!!!!"),
        React.createElement("h2", { key: "h2-1" }, "hello h2!")
      ]
    ),
    React.createElement(
      "div",
      { id: "child", key: "child-2" },
      [
        React.createElement("h1", { key: "h1-2" }, "hello h1!"),
        React.createElement("h2", { key: "h2-2" }, "hello h2!")
      ]
    )
  ]
);

const root = createRoot(document.getElementById("root"));
root.render(heading);

