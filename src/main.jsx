import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./ContextApi/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
