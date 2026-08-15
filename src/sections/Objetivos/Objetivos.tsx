import { motion } from "framer-motion";
import { objetivos } from "../../data/contenido";
import styles from "./Objetivos.module.css";

const viewport = { once: true, margin: "-80px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function Objetivos() {
  return (
    <section id="objetivos" className={styles.objetivos} aria-label="Objetivos">
      <div className={`container ${styles.contenido}`}>
        <h2 className={styles.titulo}>Lo que queremos lograr</h2>

        <motion.article
          className={`brutal-block ${styles.general}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease }}
        >
          <span className={styles.etiqueta}>Objetivo general</span>
          <p>{objetivos.general}</p>
        </motion.article>

        <div className={styles.especificos}>
          {objetivos.especificos.map((texto, i) => (
            <motion.article
              key={texto.slice(0, 20)}
              className={`brutal-block ${styles.especifico}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                ease,
              }}
            >
              <span className={styles.numero}>{i + 1}</span>
              <p>{texto}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
