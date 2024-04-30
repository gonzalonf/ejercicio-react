import { expect, test, describe } from "vitest";
import { numberFormatter, extractDigits } from "./formatter";

describe("numberFormatter", () => {
  test("Should add delimiter to custom number", () => {
    expect(numberFormatter(1000, "#")).toBe("1#000");
  });
  test("Should add decimals if asked to custom number", () => {
    expect(numberFormatter(1000.2, ",", "$", true)).toBe("$ 1,000.20");
  });
  test("Should remove decimals if asked", () => {
    expect(numberFormatter(1000.2, ",", "$", false)).toBe("$ 1,000");
  });

  test("Should round decimals to 2 positions", () => {
    expect(numberFormatter(1000.239, ".", "", true)).toBe("1.000.24");
  });
});

describe("extractDigits", () => {
  test("Should extract all digits from a string", () => {
    expect(extractDigits("123#123")).toBe(123123);
    expect(extractDigits("12.3")).toBe(123);
    expect(extractDigits("$ 12.0")).toBe(120);
  });
});
