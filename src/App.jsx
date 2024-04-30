import { useReducer } from "react";
import styles from "./App.module.css";

import { SliderInput } from "@components/Slider";
import { appReducer, initialState } from "@/App.reducer.js";

appReducer();
function App() {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  // derive from state
  const { borrowAmount, installments } = appState;
  const amount = Math.floor(
    borrowAmount / installments
  ); /* TO-do: format correctly */
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Simulá tu crédito</h1>

        <section className={styles.controls}>
          <SliderInput
            label="Monto total"
            currency="$"
            start={5000}
            end={50000}
            value={borrowAmount}
          />
          <SliderInput
            label="Plazo"
            currency=""
            start={3}
            end={24}
            value={installments}
          />
        </section>

        <section className={styles.installments}>
          <div className={styles.amountWrapper}>
            <span className={styles.label}>Cuota fija por mes</span>{" "}
            <span className={styles.amount}>$ {amount}</span>
          </div>
          <button className={styles.get}>Obtené crédito</button>
          <button className={styles.view}>Ver detalle de cuotas</button>
        </section>
      </main>
    </div>
  );
}

export default App;
