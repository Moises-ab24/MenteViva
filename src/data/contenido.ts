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
  { cita: "Barraza Macías, A. (2007). El campo de estudio del estrés: del programa de investigación estímulo-respuesta al programa de investigación persona-entorno. Revista Internacional de Psicología, 8(2), 1–24." },
  { cita: "Cirillo, F. (2018). The Pomodoro Technique: The acclaimed time-management system that has transformed how we work. Currency." },
  { cita: "Ekman, P. (1999). Basic emotions. En T. Dalgleish & T. Power (Eds.), The handbook of cognition and emotion (pp. 45–60). John Wiley & Sons." },
  { cita: "Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. Journal of Personality and Social Psychology, 85(2), 348–362." },
  { cita: "Haidt, J. (2024). The anxious generation: How the great rewiring of childhood is causing an epidemic of mental illness. Penguin Press." },
  { cita: "Harvard Health Publishing. (2021, marzo 8). Repressing emotions may be a health risk. Harvard Medical School. https://www.health.harvard.edu/mind-and-mood/repressing-emotions-may-be-a-health-risk" },
  { cita: "Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421–428." },
  { cita: "Odgers, C. (2018). Smartphones are bad for some teens, not all. Nature, 554(7693), 432–434." },
  { cita: "Organización Mundial de la Salud. (2022, junio 17). Salud mental: fortalecer nuestra respuesta. https://www.who.int/es/news-room/fact-sheets/detail/mental-health-strengthening-our-response" },
  { cita: "Orben, A., & Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. Nature Human Behaviour, 3(2), 173–182." },
  { cita: "Pennebaker, J. W., & Chung, C. K. (2011). Expressive writing and its links to mental and physical health. En H. S. Friedman (Ed.), Oxford handbook of health psychology (pp. 417–437). Oxford University Press." },
  { cita: "Ratey, J. J., & Hagerman, E. (2008). Spark: The revolutionary new science of exercise and the brain. Little, Brown and Company." },
  { cita: "Walker, M. (2017). Why we sleep: Unlocking the power of sleep and dreams. Scribner." },
  { cita: "We Are Social & Hootsuite. (2024). Digital 2024: Global overview report. https://wearesocial.com/global-digital-report" },
];
