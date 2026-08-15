import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "../../components/Modal/Modal";
import { DiarioEmociones } from "../../components/ActivityCard/DiarioEmociones";
import { OrganizadorEstres } from "../../components/ActivityCard/OrganizadorEstres";
import { TestRedes } from "../../components/ActivityCard/TestRedes";
import styles from "./Actividades.module.css";

type ActividadId = "diario" | "organizador" | "test" | null;

const viewport = { once: true, margin: "-80px" };
const ease = [0.16, 1, 0.3, 1] as const;

const tarjetas = [
  {
    id: "diario" as const,
    numero: "A",
    titulo: "Diario de emociones",
    descripcion: "Nombrá lo que sentís hoy y por qué. Cuatro preguntas, dos minutos.",
    color: "green" as const,
  },
  {
    id: "organizador" as const,
    numero: "B",
    titulo: "Organizador anti-estrés",
    descripcion: "Ordená tus pendientes en la matriz urgente / importante.",
    color: "blue" as const,
  },
  {
    id: "test" as const,
    numero: "C",
    titulo: "Test de hábitos digitales",
    descripcion: "5 preguntas para revisar tu relación real con las redes.",
    color: "lav" as const,
  },
];

export function Actividades() {
  const [abierta, setAbierta] = useState<ActividadId>(null);

  const tarjetaAbierta = tarjetas.find((t) => t.id === abierta);

  return (
    <section id="actividades" className={styles.actividades} aria-label="Actividades">
      <div className="container">
        <motion.h2
          className={styles.titulo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease }}
        >
          Poné en práctica lo que leíste
        </motion.h2>
        <motion.p
          className={styles.bajada}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          Tres ejercicios cortos, uno por tema. Elegí uno y dale.
        </motion.p>

        <div className={styles.grid}>
          {tarjetas.map((tarjeta, i) => (
            <motion.button
              key={tarjeta.id}
              className={`${styles.tarjeta} ${styles[`tarjeta--${tarjeta.color}`]}`}
              onClick={() => setAbierta(tarjeta.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                ease,
              }}
            >
              <span className={styles.tarjetaNumero}>{tarjeta.numero}</span>
              <h3 className={styles.tarjetaTitulo}>{tarjeta.titulo}</h3>
              <p className={styles.tarjetaDescripcion}>{tarjeta.descripcion}</p>
              <span className={styles.tarjetaCta}>Empezar →</span>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={abierta !== null}
        onClose={() => setAbierta(null)}
        titulo={tarjetaAbierta?.titulo ?? ""}
      >
        {abierta === "diario" && <DiarioEmociones />}
        {abierta === "organizador" && <OrganizadorEstres />}
        {abierta === "test" && <TestRedes />}
      </Modal>
    </section>
  );
}
