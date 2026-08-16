import { useEffect, useState } from "react";

/**
 * Estado sincronizado con localStorage. Si localStorage no está disponible
 * (modo incógnito estricto, storage lleno, etc.) se degrada a estado normal
 * en memoria sin romper la app.
 */
export function useLocalStorage<T>(clave: string, valorInicial: T) {
  const [valor, setValor] = useState<T>(() => {
    try {
      const guardado = window.localStorage.getItem(clave);
      return guardado ? (JSON.parse(guardado) as T) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor));
    } catch {
      // Storage lleno o no disponible: seguimos funcionando solo en memoria.
    }
  }, [clave, valor]);

  return [valor, setValor] as const;
}
