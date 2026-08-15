import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const secciones = [
  { id: "hero", label: "Inicio" },
  { id: "intro", label: "Intro" },
  { id: "objetivos", label: "Objetivos" },
  { id: "temas", label: "Temas" },
  { id: "actividades", label: "Actividades" },
  { id: "cierre", label: "Cierre" },
];

export function Nav() {
  const [activo, setActivo] = useState("hero");
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivo(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    secciones.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const irA = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setAbierto(false);
  };

  return (
    <>
      <nav className={styles.nav} aria-label="Navegación del manual">
        <button
          className={styles.marca}
          onClick={() => irA("hero")}
          aria-label="Ir al inicio"
        >
          MV
        </button>

        <ul className={styles.lista}>
          {secciones.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`${styles.item} ${activo === id ? styles.itemActivo : ""}`}
                onClick={() => irA(id)}
                aria-current={activo === id ? "true" : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.botonMovil}
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-label="Abrir menú"
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {abierto && (
        <div className={styles.menuMovil} role="menu">
          {secciones.map(({ id, label }) => (
            <button
              key={id}
              className={styles.itemMovil}
              onClick={() => irA(id)}
              role="menuitem"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
