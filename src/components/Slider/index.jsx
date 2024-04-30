import { useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./Slider.module.css";

export function SliderInput({
  currency,
  label,
  start,
  end,
  value,
  handleChange,
}) {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    console.log("blur", e.target.value);
    const { value } = e.target;
    let safeValue = Math.round(
      value <= end ? (value >= start ? value : start) : end
    );
    handleChange(safeValue); // send to reducer
    // TO-DO: do formatting here (if has currency symbol)
    inputRef.current.value = !currency
      ? safeValue
      : /* call formatter */ "$ " + safeValue;
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };
  const handleFocus = (e) => {
    console.log("focus");
    // to-do: add format cleanup here (inverse)
  };

  return (
    <div className={styles.slider}>
      <label className={styles.label}>
        {label}
        {/* {currency} */}
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
        <div className={styles.start}>{start}</div>
        <div className={styles.end}>{end}</div>
      </div>
    </div>
  );
}
