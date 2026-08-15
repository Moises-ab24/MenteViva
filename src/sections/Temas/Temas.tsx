import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { temas } from "../../data/contenido";
import styles from "./Temas.module.css";

const viewport = { once: true, margin: "-80px" };
const ease = [0.16, 1, 0.3, 1] as const;

export function Temas() {
  const [activo, setActivo] = useState(temas[0].id);
  const temaActivo = temas.find((t) => t.id === activo)!;

  return (
    <section id="temas" className={styles.temas} aria-label="Temas principales">
      <div className="container">
        <motion.h2
          className={styles.titulo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease }}
        >
          Tres temas, un mismo objetivo
        </motion.h2>

        <div className={styles.selector} role="tablist" aria-label="Elegir tema">
          {temas.map((tema) => (
            <button
              key={tema.id}
              role="tab"
              aria-selected={activo === tema.id}
              className={`${styles.tab} ${styles[`tab--${tema.color}`]} ${
                activo === tema.id ? styles.tabActivo : ""
              }`}
              onClick={() => setActivo(tema.id)}
            >
              <span className={styles.tabNumero}>{tema.numero}</span>
              <span className={styles.tabTitulo}>{tema.titulo}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={temaActivo.id}
            className={`${styles.panel} ${styles[`panel--${temaActivo.color}`]}`}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease }}
          >
            <p className={styles.panelSubtitulo}>{temaActivo.subtitulo}</p>

            <div className={styles.bloques}>
              {temaActivo.bloques.map((bloque) => (
                <div key={bloque.titulo} className={styles.bloque}>
                  <h3 className={styles.bloqueTitulo}>{bloque.titulo}</h3>
                  {bloque.texto.split("\n\n").map((parrafo) => (
                    <p key={parrafo.slice(0, 24)} className={styles.bloqueTexto}>
                      {parrafo}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
