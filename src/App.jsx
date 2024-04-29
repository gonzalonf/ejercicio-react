import { useState } from "react";
import styles from "./App.module.css";

import { SliderInput } from "@components/Slider";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Simulá tu crédito</h1>

        <div classNames={styles.controls}>
          <SliderInput
            title="Monto total"
            currency="$"
            start={5000}
            end={50000}
          />
          <SliderInput title="Plazo" currency="" start={3} end={24} />
        </div>

        <section className={styles.installments}>
          <span className={styles.label}>Cuota fija por mes</span>{" "}
          <span className={styles.amount}>$ amount</span>
          <div className={styles.actions}>
            <button className={styles.get}>Obtené crédito</button>
            <button className={styles.view}>Ver detalle de cuotas</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
