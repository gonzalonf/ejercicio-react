import { useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./Slider.module.css";
import { numberFormatter, extractDigits } from "@utils/formatter";

export function SliderInput({
  currency,
  label,
  start,
  end,
  value,
  handleChange,
}) {
  useEffect(() => {
    /* Intialize input set */
    if (inputRef.current) {
      inputRef.current.value = !currency
        ? value
        : numberFormatter(value, ".", currency, false);
    }
  }, []);

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    let safeValue = Math.round(
      value <= end ? (value >= start ? value : start) : end
    );
    inputRef.current.value = !currency
      ? safeValue
      : numberFormatter(safeValue, ".", currency, false);
    handleChange(safeValue);
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };
  const handleFocus = (e) => {
    if (!currency) return;
    inputRef.current.value = extractDigits(e.target.value);
  };

  return (
    <div className={styles.slider}>
      <label className={styles.label}>
        {label}
        <input
          ref={inputRef}
          className={styles.input}
          type={!currency ? "number" : "text"}
          onFocus={handleFocus}
          onBlur={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </label>
      <div className={styles.sliderWrapper}>
        <Slider
          min={start}
          max={end}
          onChange={(e) => handleChange(e)}
          value={value}
        />
        <div className={styles.start}>
          {currency ? numberFormatter(start, ".", "$") : start}
        </div>
        <div className={styles.end}>
          {currency ? numberFormatter(end, ".", "$") : end}
        </div>
      </div>
    </div>
  );
}
