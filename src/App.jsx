import { useReducer, useState } from "react";
import styles from "./App.module.css";

import { SliderInput } from "@components/Slider";
import { Modal } from "@components/Modal";
import { appReducer, initialState } from "@/App.reducer.js";

appReducer();

const CreditModalContent = () => (
  <div className={styles.modal}>
    <h2 className={styles.h2}>¡Crédito solicitado con éxito!</h2>
  </div>
);
const Installments = ({ installments, borrowAmount, amount }) => (
  <div className={styles.modal}>
    <h2 className={styles.h2}>Cuotas:</h2>
    <ul>
      <li>
        <strong>{installments}</strong> pagos de <strong>$ {amount}</strong>
      </li>
      <li>
        (<strong>$ {borrowAmount}</strong> monto total){" "}
      </li>
    </ul>
  </div>
);
function App() {
  const [appState, dispatch] = useReducer(appReducer, initialState);
  const [modalContent, setModalContent] = useState(null);

  const openCredit = () => {};

  // derive from state
  const { borrowAmount, installments, modal } = appState;

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
          <button
            className={styles.get}
            onClick={() =>
              dispatch({ type: "modal-open", payload: <CreditModalContent /> })
            }
          >
            Obtené crédito
          </button>
          <button
            className={styles.view}
            onClick={() =>
              dispatch({
                type: "modal-open",
                payload: (
                  <Installments
                    installments={installments}
                    borrowAmount={borrowAmount}
                    amount={amount}
                  />
                ),
              })
            }
          >
            Ver detalle de cuotas
          </button>
        </section>
      </main>
      <Modal close={() => dispatch({ type: "modal-close" })}>{modal}</Modal>
    </div>
  );
}

export default App;
