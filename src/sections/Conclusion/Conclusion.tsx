import { motion } from "framer-motion";
import { conclusion } from "../../data/contenido";
import styles from "./Conclusion.module.css";

const viewport = { once: true, margin: "-80px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function Conclusion() {
  return (
    <section id="cierre" className={styles.cierre} aria-label="Conclusión">
      <div className={`container ${styles.contenido}`}>
        <motion.span
          className="brutal-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.4 }}
        >
          Para cerrar
        </motion.span>

        {conclusion.split("\n\n").map((parrafo, i) => (
          <motion.p
            key={parrafo.slice(0, 24)}
            className={styles.parrafo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{
              duration: 0.55,
              delay: 0.1 + i * 0.08,
              ease,
            }}
          >
            {parrafo}
          </motion.p>
        ))}

        <motion.button
          className={styles.boton}
          onClick={() =>
            document.getElementById("actividades")?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.5, ease }}
        >
          Volver a las actividades
        </motion.button>
      </div>
    </section>
  );
}
