import { useState } from "react";
import "./App.css";

import { Slider } from "@components/Slider";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      <main>
        <h1>Simulá tu crédito</h1>

        <div className="controls">
          <Slider title="Monto total" currency="$" />
          <Slider title="Plazo" currency="" />
        </div>

        <section className="installments">
          <span className="installments__label">Cuota fija por mes</span>{" "}
          <span className="installments__amount">$ amount</span>
          <div className="installments__actions">
            <button className="installments__get">Obtebé crédito</button>
            <button className="installments__view">
              Ver detalle de cuotas
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
