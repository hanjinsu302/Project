import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
//combineReducers(): 여러개의 reducer를 하나로 합치게 해줌

const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
});

// 다른 파일에서 여러 리듀서를 합친 최종 리듀서(rootReducer)
// 를 사용할수 있도록 내보냄
export default rootReducer;
