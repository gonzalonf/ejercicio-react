import { expect, test, describe } from "vitest";
import { appReducer } from "./App.reducer.js";

const initialState = {
  borrowAmount: 5000,
  installments: 3,
  modal: null,
};

describe("App Reducer", () => {
  test("When modal action set to open, should set modal content", () => {
    expect(
      appReducer(initialState, { type: "modal-open", payload: "asd" })
    ).toEqual({
      borrowAmount: 5000,
      installments: 3,
      modal: "asd",
    });
  });
  test("When modal action set to close, should clear modal content", () => {
    expect(
      appReducer(
        {
          borrowAmount: 5000,
          installments: 3,
          modal: "asd",
        },
        { type: "modal-close" }
      )
    ).toEqual({
      borrowAmount: 5000,
      installments: 3,
      modal: null,
    });
  });
  test("Should set installment", () => {
    expect(
      appReducer(initialState, { type: "set-installments", payload: 12 })
    ).toEqual({
      borrowAmount: 5000,
      installments: 12,
      modal: null,
    });
  });
  test("Should set borrow amount", () => {
    expect(
      appReducer(initialState, { type: "set-amount", payload: 6000 })
    ).toEqual({
      borrowAmount: 6000,
      installments: 3,
      modal: null,
    });
  });
});
