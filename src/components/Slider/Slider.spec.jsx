import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import { SliderInput } from "./index";

describe("SliderInput component", () => {
  test("Should sync input to slider", async () => {
    const handleChange = vi.fn();
    const { container, getByLabelText, getByRole } = render(
      <SliderInput
        currency=""
        label="Test Slider"
        start={0}
        end={100}
        value={50}
        handleChange={handleChange}
      />
    );

    const input = await getByLabelText("Test Slider");
    const slider = await getByRole("slider");
    // // Test input changes
    fireEvent.change(input, { target: { value: "75" } });
    fireEvent.blur(input);
    expect(input.value).toBe("75");

    expect(handleChange).toHaveBeenCalledWith(75);
  });
});
