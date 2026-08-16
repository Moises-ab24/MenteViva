import { motion } from "framer-motion";
import { equipo, institucion, periodo } from "../../data/contenido";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Portada">
      <div className={styles.grano} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        <div className={styles.columnaTexto}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Proyecto de Psicología
          </motion.p>

          <motion.h1
            className={styles.titulo}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Mente
            <br />
            <span className={styles.tituloAcento}>Viva</span>
          </motion.h1>

          <motion.p
            className={styles.bajada}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Un manual de salud mental para jóvenes. Porque cuidar tu cabeza
            también es parte del plan.
          </motion.p>
        </div>

        <div className={styles.columnaFicha}>
          <motion.div
            className={styles.ficha}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.fichaLabel}>Elaborado por</p>
            <ul className={styles.fichaLista}>
              {equipo.map((persona) => (
                <li key={persona.nombre}>{persona.nombre}</li>
              ))}
            </ul>
            <div className={styles.fichaPie}>
              <span>{institucion}</span>
              <span>{periodo}</span>
            </div>
          </motion.div>

          <motion.button
            className={styles.scrollHint}
            onClick={() =>
              document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Bajar a la introducción"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Empezar</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}