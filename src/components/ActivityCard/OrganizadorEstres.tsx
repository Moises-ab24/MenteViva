import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./OrganizadorEstres.module.css";

interface Tarea {
  id: number;
  texto: string;
  cuadrante: Cuadrante;
}

type Cuadrante = "hacer" | "agendar" | "delegar" | "eliminar";

const cuadrantes: { id: Cuadrante; titulo: string; ayuda: string }[] = [
  { id: "hacer", titulo: "Hacé esto ya", ayuda: "Urgente e importante" },
  { id: "agendar", titulo: "Agendalo", ayuda: "Importante, no urgente" },
  { id: "delegar", titulo: "Delegalo o rapidito", ayuda: "Urgente, no importante" },
  { id: "eliminar", titulo: "Eliminalo", ayuda: "Ni urgente ni importante" },
];

export function OrganizadorEstres() {
  const [texto, setTexto] = useState("");
  const [cuadrante, setCuadrante] = useState<Cuadrante>("hacer");
  const [error, setError] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregar = () => {
    if (texto.trim().length === 0) {
      setError("Escribí una tarea primero.");
      return;
    }
    setTareas((prev) => [...prev, { id: Date.now(), texto: texto.trim(), cuadrante }]);
    setTexto("");
    setError("");
  };

  const quitar = (id: number) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className={styles.organizador}>
      <div className={styles.formulario}>
        <input
          className={styles.input}
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            if (error) setError("");
          }}
          placeholder="Ej: Estudiar para el examen de mate"
          maxLength={80}
          onKeyDown={(e) => e.key === "Enter" && agregar()}
        />
        <select
          className={styles.select}
          value={cuadrante}
          onChange={(e) => setCuadrante(e.target.value as Cuadrante)}
          aria-label="Elegir cuadrante"
        >
          {cuadrantes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.titulo}
            </option>
          ))}
        </select>
        <button className={styles.agregar} onClick={agregar}>
          Agregar
        </button>
      </div>

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <div className={styles.matriz}>
        {cuadrantes.map((c) => (
          <div key={c.id} className={`${styles.cuadrante} ${styles[c.id]}`}>
            <p className={styles.cuadranteTitulo}>{c.titulo}</p>
            <p className={styles.cuadranteAyuda}>{c.ayuda}</p>
            <AnimatePresence initial={false}>
              {tareas
                .filter((t) => t.cuadrante === c.id)
                .map((t) => (
                  <motion.button
                    key={t.id}
                    className={styles.tarea}
                    onClick={() => quitar(t.id)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    title="Clic para quitar"
                  >
                    {t.texto}
                  </motion.button>
                ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
