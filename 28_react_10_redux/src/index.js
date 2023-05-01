import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App4 from "./App4";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";

// store의 정의: 상태를 관리하는 공간
// 단, 하나의 프로젝트에는 하나의 store만 있어야함
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider 컴포넌트: store props를 반드시 가져야함
  // Provider 하위 컴포넌트들은 store에 저장된 state들을 사용가능!
  <Provider store={store}>
    <App4 />
  </Provider>
);
