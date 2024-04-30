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
      console.log("ref chage");
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
    handleChange(safeValue);
    inputRef.current.value = safeValue;
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
      //Write you validation logic here
    }
  };

  return (
    <div className={styles.slider}>
      <label className={styles.label}>
        {label}
        {/* {currency} */}
        <input
          ref={inputRef}
          className={styles.input}
          type="number"
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
