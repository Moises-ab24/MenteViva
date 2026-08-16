import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IconoEmocion } from "./IconoEmocion";
import styles from "./DiarioEmociones.module.css";

interface Entrada {
  id: number;
  emocion: string;
  detalle: string;
}

const emociones = [
  "Alegría",
  "Tristeza",
  "Ira",
  "Miedo",
  "Calma",
  "Ansiedad",
];

export function DiarioEmociones() {
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [detalle, setDetalle] = useState("");
  const [error, setError] = useState("");
  const [entradas, setEntradas] = useLocalStorage<Entrada[]>(
    "mente-viva:diario-emociones",
    []
  );

  const guardar = () => {
    if (!seleccion) {
      setError("Elegí una emoción primero.");
      return;
    }
    if (detalle.trim().length === 0) {
      setError("Escribí algo, aunque sea una frase corta.");
      return;
    }

    setEntradas((prev) => [
      { id: Date.now(), emocion: seleccion, detalle: detalle.trim() },
      ...prev,
    ]);
    setDetalle("");
    setSeleccion(null);
    setError("");
  };

  const borrarTodo = () => {
    setEntradas([]);
  };

  return (
    <div className={styles.diario}>
      <p className={styles.paso}>Paso 1 — ¿Qué emoción predominó hoy?</p>
      <div className={styles.emociones}>
        {emociones.map((nombre) => (
          <button
            key={nombre}
            className={`${styles.chip} ${
              seleccion === nombre ? styles.chipActivo : ""
            }`}
            onClick={() => {
              setSeleccion(nombre);
              setError("");
            }}
            aria-pressed={seleccion === nombre}
          >
            <IconoEmocion nombre={nombre} size={20} />
            {nombre}
          </button>
        ))}
      </div>

      <p className={styles.paso}>Paso 2 — ¿Qué la provocó y cómo reaccionaste?</p>
      <textarea
        className={styles.textarea}
        value={detalle}
        onChange={(e) => {
          setDetalle(e.target.value);
          if (error) setError("");
        }}
        placeholder="Escribí un par de líneas..."
        rows={3}
        maxLength={280}
      />

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <button className={styles.guardar} onClick={guardar}>
        Guardar entrada
      </button>

      {entradas.length > 0 && (
        <div className={styles.historial}>
          <div className={styles.historialHeader}>
            <p className={styles.historialTitulo}>Tu diario</p>
            <button className={styles.borrar} onClick={borrarTodo}>
              Borrar todo
            </button>
          </div>
          <AnimatePresence initial={false}>
            {entradas.map((entrada) => (
              <motion.div
                key={entrada.id}
                className={styles.entrada}
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.entradaEmocion}>
                  <IconoEmocion nombre={entrada.emocion} size={16} />
                  {entrada.emocion}
                </span>
                <p className={styles.entradaTexto}>{entrada.detalle}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}