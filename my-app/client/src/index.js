import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataProvider from './redux/store'

ReactDOM.render(
    <React>
        <DataProvider>
        <App />
        </DataProvider>
    </React>, 
    document.getElementById("root")
);
