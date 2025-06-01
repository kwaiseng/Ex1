//2. Component Creation and Reusability (5 Marks)
//
//a) Using CodeSandbox, create two reusable components, such as a Button and a Card.
//
//b) Demonstrate how each component can be reused within different parts of a simple web page.
//.  For instance, use the Button in multiple sections to trigger different actions, or display the Card component with different content.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
