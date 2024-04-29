import sliderStyles from "./Slider.module.css";
/**
 * Represents a Slider component.
 * @param {Object} props - The props object containing properties for the Slider component.
 * @param {string} props.currency - The currency symbol to display.
 * @param {string} props.title - The title of the slider.
 * @param {number} props.start - The starting value of the slider.
 * @param {number} props.end - The ending value of the slider.
 * @returns {JSX.Element} A React JSX element representing the Slider component.
 */
export function Slider({ currency, title, start, end }) {
  return (
    <div className="slider">
      <span className={sliderStyles.tag}>{title}</span>
      {currency}
      <b style={{ fontWeight: "bold" }}>slider</b>
    </div>
  );
}
