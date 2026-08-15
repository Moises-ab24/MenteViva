import { useState } from "react";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { Intro } from "./sections/Intro/Intro";
import { Objetivos } from "./sections/Objetivos/Objetivos";
import { Temas } from "./sections/Temas/Temas";
import { Actividades } from "./sections/Actividades/Actividades";
import { Conclusion } from "./sections/Conclusion/Conclusion";
import { Fuentes } from "./pages/Fuentes";

function App() {
  const [mostrarFuentes, setMostrarFuentes] = useState(false);

  const abrirFuentes = () => {
    setMostrarFuentes(true);
    window.scrollTo({ top: 0 });
  };

  const cerrarFuentes = () => {
    setMostrarFuentes(false);
  };

  if (mostrarFuentes) {
    return <Fuentes onVolver={cerrarFuentes} />;
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Objetivos />
        <Temas />
        <Actividades />
        <Conclusion />
      </main>
      <Footer onAbrirFuentes={abrirFuentes} />
    </>
  );
}

export default App;
