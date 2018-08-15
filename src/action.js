export function pushValueInStore(field_key, value) {
  return async (dispatch, getState) => {
    dispatch({
      type: "PUSH_VALUE",
      payloads: { [field_key]: value }
    });
  };
}
export function validateOnNext() {
  return async (dispatch, getState) => {
    let state1 = getState().redux_form;
    let sc_name = state1.sc_name;
    let sc_description = state1.sc_description;
    console.log("in action getting  2", state1, getState());
    dispatch({
      type: "VALIDATE_ON_NEXT",
      payloads: {
        sc_name: sc_name,
        sc_description: sc_description
      }
    });
  };
}
export function validateOnFinish() {
  return async (dispatch, getState) => {
    let state1 = getState().redux_form;
    let docType = state1.docType;
    let docList = state1.docList;
    console.log("in action getting  2", state1, getState());
    dispatch({
      type: "VALIDATE_ON_FINISH",
      payloads: {
        docType: docType,
        docList: docList
      }
    });
  };
}
export function initialLoading() {
  return async (dispatch, getState) => {
    dispatch({
      type: "INITIALLOADING"
    });
  };
}

export default {
  pushValueInStore,
  validateOnNext
};
