import { equipo, institucion } from "../../data/contenido";
import styles from "./Footer.module.css";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onAbrirFuentes: () => void;
}

export function Footer({ onAbrirFuentes }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.contenido}`}>
        <div className={styles.bloque}>
          <p className={styles.marca}>Mente Viva</p>
          <p className={styles.desc}>
            Manual de salud mental para jóvenes.
          </p>
        </div>

        <div className={styles.bloque}>
          <p className={styles.label}>Equipo</p>
          <ul className={styles.lista}>
            {equipo.map((p) => (
              <li key={p.nombre}>{p.nombre}</li>
            ))}
          </ul>
        </div>

        <div className={styles.bloque}>
          <p className={styles.label}>Institución</p>
          <p className={styles.texto}>{institucion}</p>
          <button className={styles.linkFuentes} onClick={onAbrirFuentes}>
            Ver fuentes bibliográficas <ArrowRight></ArrowRight>
          </button>
        </div>
      </div>

      <div className={styles.copy}>
        <span>© 2026 Mente Viva. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
