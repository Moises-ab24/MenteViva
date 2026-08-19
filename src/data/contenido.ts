export interface Fuente {
  cita: string;
}

export interface Autor {
  nombre: string;
}

export const equipo: Autor[] = [
  { nombre: "Moisés Abarca A." },
  { nombre: "Sebastián Chacón V." },
  { nombre: "Sebastián Espinoza G." },
  { nombre: "Deyker Lanza V." },
];

export const institucion = "C.T.P. San Rafael de Alajuela";
export const periodo = "II Período 2026";

export const objetivos = {
  general:
    "Brindar a jóvenes estudiantes información accesible y herramientas prácticas para el cuidado de su salud mental.",
  especificos: [
    "Explicar qué son las emociones y cómo manejarlas de forma saludable, identificando estrategias concretas para regularlas en situaciones cotidianas.",
    "Describir el impacto del estrés académico en los jóvenes y presentar técnicas organizativas para reducirlo sin afectar el rendimiento.",
  ],
};

export interface Tema {
  id: string;
  numero: string;
  titulo: string;
  subtitulo: string;
  color: "green" | "blue" | "lav";
  bloques: { titulo: string; texto: string }[];
}

export const temas: Tema[] = [
  {
    id: "emociones",
    numero: "01",
    titulo: "Manejo de emociones",
    subtitulo: "¿Cómo se llama lo que sentís?",
    color: "green",
    bloques: [
      {
        titulo: "¿Qué son las emociones y por qué importan?",
        texto:
          "Las emociones son respuestas automáticas del cuerpo y la mente contra lo que vivimos. No son buenas ni malas. El miedo nos puede proteger. La ira nos puede decir que algo no está bien. La tristeza nos puede ayudar a procesar pérdidas. El problema no es sentirlas, sino no saber qué hacer con ellas.\n\nSegún el psicólogo Paul Ekman, existen seis emociones básicas universales: alegría, tristeza, ira, miedo, sorpresa y asco. A partir de estas se construyen emociones más complejas como los celos, la vergüenza o la gratitud.",
      },
      {
        titulo: "¿Qué pasa cuando no las gestionamos bien?",
        texto:
          "Reprimir emociones tiene consecuencias. Suprimirlas se asocia con mayor riesgo de enfermedades cardiovasculares, peor memoria y mayor dificultad para tomar decisiones.\n\nEn jóvenes, la desregulación emocional se manifiesta de formas distintas: algunos se aíslan, otros reaccionan exageradamente, algunos recurren al celular como escape. Estas son señales de que algo necesita atención.",
      },
      {
        titulo: "Estrategias reales",
        texto:
          "Nombrar lo que sentís reduce la actividad en la amígdala, la parte del cerebro responsable de las reacciones emocionales intensas.\n\nLa respiración diafragmática activa el sistema nervioso parasimpático, que calma el cuerpo. La técnica 4-7-8: inhalar 4 segundos, sostener 7 y exhalar 8.\n\nEscribir sobre lo que sentís reduce síntomas de ansiedad.",
      },
    ],
  },
  {
    id: "estres",
    numero: "02",
    titulo: "Estrés académico",
    subtitulo: "Cuando el cole se come nuestra cabeza",
    color: "blue",
    bloques: [
      {
        titulo: "Qué es (y por qué es distinto al estrés normal)",
        texto:
          "El estrés no es malo. Muy poco puede activar la concentración. El problema es cuando se vuelve eterno, cuando el cuerpo está en estrés semana tras semana sin recuperarse.\n\nEl investigador Jesús Barraza Macías desarrolló el Inventario SISCO del Estrés Académico y encontró que entre el 67% y el 75% de los estudiantes latinoamericanos reportan niveles moderados a altos de estrés académico. Síntomas frecuentes: dolores de cabeza, problemas para dormir o dificultad para concentrarse.",
      },
      {
        titulo: "Por qué se siente tan agotador",
        texto:
          "Una parte del problema es real: el sistema educativo exige mucho. Otra parte tiene que ver con cómo nos organizamos. Cuando todo parece urgente, el cerebro entra en modo supervivencia y la capacidad de pensar con baja claridad.\n\nLa investigadora Candice Odgers, de la Universidad de Duke, señala que los jóvenes enfrentan presiones académicas, sociales y digitales que generaciones anteriores no tuvieron. No es debilidad, es el contexto que es más complejo.",
      },
      {
        titulo: "Estrategias que funcionan",
        texto:
          "Técnica Pomodoro: 25 minutos de trabajo sin distracción, 5 de descanso. Matriz de Eisenhower: dividir tareas entre urgente e importante para dejar de sentir urgencia al mismo tiempo.\n\nDormir no es opcional. Se necesita entre 8 y 10 horas. No dormir bien aumenta el cortisol y daña la memoria. El ejercicio reduce el cortisol y ayuda al cerebro a aprender eficientemente.",
      },
    ],
  },
  {
    id: "redes",
    numero: "03",
    titulo: "Uso saludable de redes sociales",
    subtitulo: "El scroll infinito y nuestra mente",
    color: "lav",
    bloques: [
      {
        titulo: "La situación real",
        texto:
          "El usuario promedio pasa más de 6 horas al día frente a pantallas, y los jóvenes están por encima de ese promedio. Las redes no son el enemigo. El problema es el uso que les damos.",
      },
      {
        titulo: "Qué dice la investigación",
        texto:
          "Un análisis de más de 350,000 adolescentes encontró que el uso de redes sociales tiene un efecto negativo en el bienestar, muy pequeño. El efecto existe pero ha sido exagerado por medios.\n\nJonathan Haidt, en cambio, argumenta en The Anxious Generation que el giro hacia smartphones desde 2012 se relaciona con el aumento en depresión y ansiedad, sobre todo en mujeres. Lo consistente: scrollear sin interactuar se asocia con peor ánimo; el uso activo tiene efectos neutros o positivos.",
      },
      {
        titulo: "Uso consciente vs. uso compulsivo",
        texto:
          "La diferencia no está en cuánto tiempo se usa. Está en si controlamos el tiempo o el tiempo nos controla. Controlemos el tiempo de pantalla real y prioricemos crear en vez de solo consumir.",
      },
    ],
  },
];

export const conclusion =
  "Cuidar la salud mental no requiere que algo esté malo. No hay que estar en crisis para prestarle atención a cómo estamos emocionalmente.\n\nLo que sí se requiere es honestidad con uno mismo, algo de información para entender qué está pasando, y herramientas concretas para actuar.\n\nEstos no son temas separados. Se afectan entre sí constantemente: un día de estrés alto nos hace más vulnerable a las redes, las redes mal usadas aumentan las emociones difíciles, y las emociones no gestionadas aumentan la percepción de estrés. Significa que mejorar en uno tiene efecto positivo en los otros.\n\nSi algo de lo que leíste te gustó, ese es el punto de partida para empezar a cuidar tu salud mental.";

export const fuentes: Fuente[] = [
  { cita: "Organización Mundial de la Salud. (2022). Salud mental. https://www.who.int/es/news-room/fact-sheets/detail/mental-health-strengthening-our-response" },
  { cita: "Organización Mundial de la Salud. (2025). La salud mental de los adolescentes. https://www.who.int/es/news-room/fact-sheets/detail/adolescent-mental-health" },
  { cita: "Berrío García, N., & Mazo Zea, R. (2011). Estrés académico. Revista de Psicología Universidad de Antioquia, 3(2), 65–82. https://pepsic.bvsalud.org/scielo.php?pid=S2145-48922011000200006&script=sci_arttext" },
  { cita: "Orben, A., & Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3(2), 173–182. https://www.nature.com/articles/s41562-018-0506-1" },
  { cita: "Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428. https://doi.org/10.1111/j.1467-9280.2007.01916.x" },
  { cita: "Martínez, E. S., & Díaz, D. A. (2007). Una aproximación psicosocial al estrés escolar. Educación y Educadores, 10(2), 11–22. https://educacionyeducadores.unisabana.edu.co/index.php/eye/article/view/687" },
  { cita: "Jiménez-Boraita, R., Arriscado-Alsina, D., Dalmau-Torres, J. M., & Gargallo-Ibort, E. (2022). Factores asociados al sueño nocturno de los adolescentes. Pediatría Atención Primaria, 24(96), 375–384. https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1139-76322022000400004" },
  { cita: "Velez Sancarranco, M. A. (2025). Impacto de las redes sociales en la salud mental de adolescentes: Una revisión sistemática de la literatura. Universidad, Ciencia y Tecnología, 29(129), 86–94. https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1316-48212025000400086" },
  { cita: "Universidad Pablo de Olavide. (2025). Método Pomodoro: planificación y gestión del tiempo. Biblioteca UPO. https://guiasbib.upo.es/planificacion-y-gestion-del-tiempo/metodo-pomodoro" },
];
