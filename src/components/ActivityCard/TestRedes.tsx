import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TestRedes.module.css";

const preguntas = [
  "¿Revisás el celular antes de levantarte de la cama?",
  "¿Sentís ansiedad cuando no tenés señal o batería?",
  "¿Scrolleás redes sin un objetivo específico por más de 30 minutos seguidos?",
  "¿Después de estar en redes te sentís generalmente peor que antes?",
  "¿Has ignorado a personas presentes para revisar el teléfono?",
];

function interpretar(puntaje: number) {
  if (puntaje <= 1) {
    return {
      nivel: "En buen punto",
      texto: "Tu relación con las redes está en buen punto. Seguí monitoreándola de vez en cuando.",
      color: "var(--green-500)",
    };
  }
  if (puntaje <= 3) {
    return {
      nivel: "Vale la pena revisar",
      texto: "Hay algunos patrones que vale la pena ajustar. Probá con una sola estrategia del manual, como una zona sin celular al día.",
      color: "var(--amber-500)",
    };
  }
  return {
    nivel: "Prestale atención",
    texto: "Considerá una semana de desintoxicación digital: límites de tiempo, sin celular la primera hora, y hablar con alguien de confianza sobre cómo te sentís.",
    color: "var(--coral-500)",
  };
}

export function TestRedes() {
  const [respuestas, setRespuestas] = useState<boolean[]>([]);
  const [terminado, setTerminado] = useState(false);

  const actual = respuestas.length;

  const responder = (si: boolean) => {
    const nuevas = [...respuestas, si];
    setRespuestas(nuevas);
    if (nuevas.length === preguntas.length) {
      setTerminado(true);
    }
  };

  const reiniciar = () => {
    setRespuestas([]);
    setTerminado(false);
  };

  const puntaje = respuestas.filter(Boolean).length;
  const resultado = interpretar(puntaje);

  return (
    <div className={styles.test}>
      {!terminado ? (
        <>
          <div className={styles.progreso}>
            <span>
              Pregunta {actual + 1} de {preguntas.length}
            </span>
            <div className={styles.barra}>
              <motion.div
                className={styles.barraLlena}
                animate={{ width: `${(actual / preguntas.length) * 100}%` }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={actual}
              className={styles.pregunta}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {preguntas[actual]}
            </motion.p>
          </AnimatePresence>

          <div className={styles.opciones}>
            <button className={styles.opcion} onClick={() => responder(true)}>
              Sí
            </button>
            <button className={styles.opcion} onClick={() => responder(false)}>
              No
            </button>
          </div>
        </>
      ) : (
        <motion.div
          className={styles.resultado}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={styles.resultadoBadge}
            style={{ background: resultado.color }}
          >
            {puntaje} / {preguntas.length}
          </div>
          <p className={styles.resultadoNivel}>{resultado.nivel}</p>
          <p className={styles.resultadoTexto}>{resultado.texto}</p>
          <button className={styles.reiniciar} onClick={reiniciar}>
            Repetir test
          </button>
        </motion.div>
      )}
    </div>
  );
}
