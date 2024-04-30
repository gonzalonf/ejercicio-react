export const initialState = {
  borrowAmount: 5000,
  installments: 3,
  modal: null,
};

export function appReducer(state, action) {
  switch (action?.type) {
    case "modal-open":
      return { ...state, modal: action.payload };
    case "modal-close":
      return { ...state, modal: null };
    default:
      return initialState;
  }

  // if (action.type === 'incremented_age') {
  //   return {
  //     age: state.age + 1
  //   };
  console.log("reduce");
}
