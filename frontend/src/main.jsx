import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import App from "./App.jsx";
import {store} from "./app/store.js";
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";

// const persistor = persistStore(store); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}

      <Toaster richColors position="top-center" />
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>

//       <Toaster richColors position="top-center" />
//       <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
