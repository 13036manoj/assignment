// import { initSheetData } from "./action";
const CustomMiddleware = (function() {
  return store => next => action => {
    switch (action.type) {
      case "VALIDATE_ON_NEXT":
        // store.dispatch(initSheetData());
        console.log("VALIDATE_ON_NEXT", action);
        let actionData = action.payloads;
        if (actionData.sc_name == "") {
          store.dispatch({
            type: "RENDER_APP1",
            payloads: { renderApp1: true, nameError: true }
          });
        } else if (actionData.sc_description == "") {
          store.dispatch({
            type: "RENDER_APP1",
            payloads: {
              renderApp1: true,
              descriptionError: true,
              nameError: false
            }
          });
        } else {
          store.dispatch({
            type: "RENDER_APP1",
            payloads: {
              renderApp1: false,
              nameError: false,
              descriptionError: false
            }
          });
        }
        break;
      case "VALIDATE_ON_FINISH":
        // store.dispatch(initSheetData());
        console.log("VALIDATE_ON_FINISH", action);
        let actionData_Onfinish = action.payloads;
        if (actionData_Onfinish.docType == "") {
          store.dispatch({
            type: "RENDER_APP2",
            payloads: { renderApp2: true, docTypeError: true }
          });
        } else if (actionData_Onfinish.docList.length < 1) {
          store.dispatch({
            type: "RENDER_APP2",
            payloads: {
              renderApp2: true,
              docListError: true,
              docTypeError: false
            }
          });
        } else {
          store.dispatch({
            type: "RENDER_APP2",
            payloads: {
              renderApp2: false,
              docListError: false,
              docTypeError: false
            }
          });
        }
        break;
      default:
        return next(action);
    }
  };
})();

export default CustomMiddleware;
