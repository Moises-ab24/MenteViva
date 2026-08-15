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
export const periodo = "2026 · II Período";

export const objetivos = {
  general:
    "Brindar a jóvenes estudiantes información accesible y herramientas prácticas para el cuidado de su salud mental y bienestar emocional.",
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
          "Las emociones son respuestas automáticas del cuerpo y la mente ante lo que vivimos. No son buenas ni malas por sí solas. El miedo te puede proteger. La rabia te puede decir que algo no está bien. La tristeza te puede ayudar a procesar pérdidas. El problema no es sentirlas, sino no saber qué hacer con ellas.\n\nSegún el psicólogo Paul Ekman, existen seis emociones básicas universales: alegría, tristeza, ira, miedo, sorpresa y asco. A partir de estas se construyen emociones más complejas como los celos, la vergüenza o la gratitud (Ekman, 1999). La rueda de las emociones de Robert Plutchik es otra herramienta muy usada para entender cómo se relacionan entre sí.",
      },
      {
        titulo: "¿Qué pasa cuando no las gestionamos bien?",
        texto:
          "Reprimir emociones tiene consecuencias reales. Suprimirlas de forma crónica se asocia con mayor riesgo de enfermedades cardiovasculares, peor memoria y mayor dificultad para tomar decisiones (Gross & John, 2003, citado en Harvard Health Publishing, 2021).\n\nEn jóvenes, la desregulación emocional se manifiesta de formas muy distintas: algunos se aíslan, otros reaccionan de forma exagerada, algunos recurren al celular como escape constante. Ninguna de esas cosas es un defecto de carácter. Son señales de que algo necesita atención.",
      },
      {
        titulo: "Estrategias reales",
        texto:
          "Nombrar lo que sentís (etiquetado emocional) reduce la actividad en la amígdala, la parte del cerebro responsable de las reacciones emocionales intensas — ponerle nombre lo hace menos abrumador (Lieberman et al., 2007).\n\nLa respiración diafragmática activa el sistema nervioso parasimpático, que calma el cuerpo. Probá la técnica 4-7-8: inhalá 4 segundos, sostené 7, exhalá 8.\n\nEscribir sobre lo que sentís, aunque sea unos minutos al día, se asocia con reducción de síntomas de ansiedad (Pennebaker & Chung, 2011). Hay una distancia entre sentir y reaccionar, y en esa distancia está la regulación emocional.",
      },
    ],
  },
  {
    id: "estres",
    numero: "02",
    titulo: "Estrés académico",
    subtitulo: "Cuando el cole se come tu cabeza",
    color: "blue",
    bloques: [
      {
        titulo: "Qué es (y por qué es distinto al estrés normal)",
        texto:
          "El estrés no es intrínsecamente malo. En dosis pequeñas activa la concentración. El problema es cuando se vuelve crónico, cuando el cuerpo está en alerta semana tras semana sin recuperarse.\n\nEl investigador Jesús Barraza Macías desarrolló el Inventario SISCO del Estrés Académico y encontró que entre el 67% y el 75% de los estudiantes latinoamericanos reportan niveles moderados a altos de estrés académico (Barraza, 2007). Síntomas frecuentes: dolores de cabeza, problemas para dormir, dificultad para concentrarse, irritabilidad.",
      },
      {
        titulo: "Por qué se siente tan agotador",
        texto:
          "Una parte del problema es real: el sistema educativo exige mucho. Otra parte tiene que ver con cómo nos organizamos. Cuando todo parece urgente al mismo tiempo, el cerebro entra en modo supervivencia y la capacidad de pensar con claridad baja.\n\nLa investigadora Candice Odgers, de la Universidad de Duke, señala que los adolescentes hoy enfrentan una combinación de presiones académicas, sociales y digitales que generaciones anteriores no tuvieron simultáneamente (Odgers, 2018). No es que seamos más débiles. Es que el contexto es objetivamente más complejo.",
      },
      {
        titulo: "Estrategias que funcionan",
        texto:
          "Técnica Pomodoro: 25 minutos de trabajo sin distracciones, 5 de descanso (Cirillo, 2018). Matriz de Eisenhower: dividir tareas entre urgente e importante para dejar de sentir que todo urge al mismo tiempo.\n\nDormir no es opcional. Un adolescente necesita entre 8 y 10 horas. La privación crónica de sueño aumenta el cortisol y deteriora la memoria (Walker, 2017). El movimiento físico reduce el cortisol y ayuda al cerebro a aprender más eficientemente, sin necesidad de que sea intenso (Ratey & Hagerman, 2008).",
      },
    ],
  },
  {
    id: "redes",
    numero: "03",
    titulo: "Uso saludable de redes sociales",
    subtitulo: "El scroll infinito y tu mente",
    color: "lav",
    bloques: [
      {
        titulo: "La situación real",
        texto:
          "El usuario promedio global pasa más de 6 horas al día frente a pantallas, y los adolescentes están por encima de ese promedio (We Are Social & Hootsuite, 2024). Las redes no son el enemigo: tienen beneficios reales, conexión, información, comunidades de apoyo. El problema es el uso que ocurre en piloto automático.",
      },
      {
        titulo: "Qué dice la investigación",
        texto:
          "Un análisis de más de 350,000 adolescentes encontró que el uso de redes sociales tiene un efecto negativo en el bienestar, pero pequeño y comparable al de usar anteojos o comer papas (Orben & Przybylski, 2019). El efecto existe pero ha sido exagerado por medios.\n\nJonathan Haidt, en cambio, argumenta en The Anxious Generation que el giro hacia smartphones desde 2012 correlaciona con el aumento en depresión y ansiedad adolescente, sobre todo en chicas (Haidt, 2024). Lo consistente: el uso pasivo (scrollear sin interactuar) se asocia con peor ánimo; el uso activo (crear, conectar) tiene efectos neutros o positivos.",
      },
      {
        titulo: "Uso consciente vs. uso compulsivo",
        texto:
          "La diferencia no está en cuánto tiempo usás. Está en si vos controlás el tiempo o el tiempo te controla a vos. Auditá tu tiempo de pantalla real, definí zonas sin celular, dejá de seguir cuentas que te hacen sentir mal, y priorizá crear sobre solo consumir.",
      },
    ],
  },
];

export const conclusion =
  "Cuidar la salud mental no requiere que algo esté roto. No tenés que estar en crisis para prestarle atención a cómo estás emocionalmente.\n\nLo que sí requiere es honestidad con vos mismo, algo de información para entender qué te está pasando, y herramientas concretas para actuar. Eso intentamos hacer con este manual.\n\nLas tres áreas que cubrimos no son temas separados. Se afectan entre sí constantemente: un día de estrés alto te hace más vulnerable a las redes, las redes mal usadas amplifican las emociones difíciles, y las emociones no gestionadas aumentan la percepción de estrés. El ciclo va para los dos lados, lo que también significa que mejorar en uno tiene efecto positivo en los otros.\n\nSi algo de lo que leíste te resonó, ese es el punto de partida. No tenés que implementar todo a la vez.";

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
