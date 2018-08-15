import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App1 from "./App1";
// import App2 from "./App2";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import CustomMiddleware from "./CustomMiddleware";
import registerServiceWorker from "./registerServiceWorker";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { BrowserRouter } from "react-router-dom";
import Main from "./main";
const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(
  persistedReducer,
  applyMiddleware(thunk, CustomMiddleware)
);
let persistor = persistStore(store);

// const store = createStore(rootReducer, applyMiddleware(CustomMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
