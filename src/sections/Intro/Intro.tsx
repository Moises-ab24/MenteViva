import { motion } from "framer-motion";
import styles from "./Intro.module.css";

const viewport = { once: true, margin: "-80px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function Intro() {
  return (
    <section id="intro" className={styles.intro} aria-label="Introducción">
      <div className={`container ${styles.contenido}`}>
        <motion.span
          className={`brutal-tag ${styles.tag}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease }}
        >
          Introducción
        </motion.span>

        <motion.p
          className={styles.parrafo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Hablar de salud mental todavía incomoda a mucha gente. Se asume
          que si no tenemos un diagnóstico clínico, todo está bien.{" "}
          <span className="brutal-marker">Pero no funciona así.</span>
        </motion.p>

        <motion.p
          className={styles.parrafo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          La OMS define la salud mental como un estado de bienestar en el
          que cada persona puede desarrollar su potencial, hacer frente al
          estrés de la vida, trabajar productivamente y
          contribuir a su comunidad.
        </motion.p>

        <motion.p
          className={styles.parrafo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          Este manual piensa en jóvenes que están en la
          misma situación que todos: luchando con materias, redes
          sociales, relaciones y presión familiar. Esto es una guía práctica con información real y actividades
          concretas.
        </motion.p>
      </div>
    </section>
  );
}
