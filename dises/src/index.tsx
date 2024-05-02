import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppContainer from "./components/AppContainer";
import {ThemeProvider} from "@mui/material"
import theme from "./theme";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  
    <React.StrictMode>
      <ThemeProvider
            theme={theme}
            >
      <AppContainer />
      </ThemeProvider>
    </React.StrictMode>
  
);