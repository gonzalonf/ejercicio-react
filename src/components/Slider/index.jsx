import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./Slider.module.css";
import { useState } from "react";

export function SliderInput({
  currency,
  label,
  start,
  end,
  value,
  handleChange,
}) {
  const [localState, setLocalState] = useState(3);

  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log();
    setLocalState(value);
  };

  return (
    <div className={styles.slider}>
      <label className={styles.label}>
        {label}
        {/* {currency} */}
        <input
          className={styles.input}
          type="number"
          onChange={handleInputChange}
          value={localState}
        />
      </label>
      <div className={styles.sliderWrapper}>
        <Slider
          min={start}
          max={end}
          onChange={(e) => setLocalState(e)}
          value={localState}
        />
        <div className={styles.start}>{start}</div>
        <div className={styles.end}>{end}</div>
      </div>
    </div>
  );
}
