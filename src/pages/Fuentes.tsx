import { motion } from "framer-motion";
import { fuentes } from "../data/contenido";
import styles from "./Fuentes.module.css";

interface FuentesProps {
  onVolver: () => void;
}

export function Fuentes({ onVolver }: FuentesProps) {
  return (
    <motion.main
      className={styles.pagina}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`container ${styles.contenido}`}>
        <button className={styles.volver} onClick={onVolver}>
          ⭠ Volver al manual
        </button>

        <h1 className={styles.titulo}>Fuentes bibliográficas</h1>

        <ol className={styles.lista}>
          {fuentes.map((f) => (
            <li key={f.cita.slice(0, 30)} className={styles.item}>
              {f.cita}
            </li>
          ))}
        </ol>
      </div>
    </motion.main>
  );
}
