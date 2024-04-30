import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

export function Modal({ children, close }) {
  const closeModal = () => {
    close();
  };

  if (!children) return;

  return (
    <div className={styles.backdrop}>
      <dialog className={styles.dialog} onClose={closeModal} open>
        <div className={styles.head}>
          <button
            className={`${styles.close} btn-secondary`}
            onClick={closeModal}
            aria-label="close"
          >
            &#10539;
          </button>
        </div>
        {children}
      </dialog>
    </div>
  );
}
