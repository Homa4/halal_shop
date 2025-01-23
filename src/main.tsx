import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import OverviewContext from "./Context/OverviewContext.tsx";
import FilterContext from "./Context/FilterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OverviewContext>
      <FilterContext>
        <App />
      </FilterContext>
    </OverviewContext>
  </StrictMode>
);
