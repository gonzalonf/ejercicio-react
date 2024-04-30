export const initialState = {
  borrowAmount: 5000,
  installments: 3,
  modal: null,
};

export function appReducer(state, { type, payload }) {
  switch (type) {
    case "modal-open":
      return { ...state, modal: payload };
    case "modal-close":
      return { ...state, modal: null };
    case "set-amount":
      return { ...state, borrowAmount: payload };
    case "set-installments":
      return { ...state, installments: payload };
    default:
      return initialState;
  }
}