export const initialState = {
  borrowAmount: 5000,
  installments: 3,
  modal: null,
};

/**
 * 
 * @param {{borrowAmount: number;installments: number;modal: any  }} state 
 * @param {{type: "set-installments" | "set-amount" | "modal-close" | "modal-open"; payload: any }} action
 * @returns 
 */
export function appReducer(state, action) {
  const { type, payload } = action;
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