import { combineReducers } from "redux";
let initialState = {
  nameError: false,
  descriptionError: false,
  docTypeError: false,
  docListError: false,
  renderApp1: true,
  renderApp2: true,
  sc_name: "",
  sc_description: "",
  docType: "",
  docList: []
};
function redux_form(state = initialState, action) {
  console.log("in run_timer", action);
  switch (action.type) {
    case "RENDER_APP1":
      return { ...state, ...action.payloads };
    case "RENDER_APP2":
      return { ...state, ...action.payloads };
    case "PUSH_VALUE":
      return { ...state, ...action.payloads };
    case "INITIALLOADING":
      return {
        ...state,
        nameError: false,
        descriptionError: false,
        docTypeError: false,
        docListError: false,
        renderApp1: true,
        renderApp2: true,
        sc_name: "",
        sc_description: "",
        docType: "",
        docList: []
      };
    default:
      return state;
  }
}

export default combineReducers({
  redux_form
});
