const master = [
  { question: "Seguir la misma rutina cada día me relaja", trait: "master" },
  {
    question: "Cuando planifico un viaje pienso en todas las opciones posibles",
    trait: "master"
  },
  {
    question: "Me gustaría que todo el mundo se comportara y fuese serio",
    trait: "master"
  },
  {
    question: "Disfruto planificando todo al detalle",
    trait: "master"
  },
  {
    question: "Me gusta seguir las reglas del juego",
    trait: "master"
  },
  { question: "Cuido mucho de lo que tengo", trait: "master" },
  {
    question: "Mi familia y amigos me considerarían un tipo tradicional",
    trait: "master"
  },
  {
    question: "Me considero precavido y cauto",
    trait: "master"
  },
  {
    question: "Es importante respetar la autoridad",
    trait: "master"
  },
  {
    question: "Valoro más una amistad leal a una interesante",
    trait: "master"
  }
];

const searcher = [
  { question: "Me resulta excitante probar cosas nuevas", trait: "searcher" },
  {
    question: "A veces, me dejo llevar por el calentón del momento",
    trait: "searcher"
  },
  { question: "Hacer siempre lo mismo es aburrido", trait: "searcher" },
  { question: "Me considero muy creativo", trait: "searcher" },
  {
    question: "Siempre estoy en busca de nuevas experiencias",
    trait: "searcher"
  },
  { question: "¡Soy muy entusiasta!", trait: "searcher" },
  {
    question: "No me importa tomar riesgos si con ello cumplo mis objetivos",
    trait: "searcher"
  },
  { question: "Pasar mucho tiempo en casa me aburre", trait: "searcher" },
  {
    question: "Mis amigos me describirían como alguien curioso",
    trait: "searcher"
  },
  { question: "Voy a tope de energía todos los días", trait: "searcher" }
];

const negotiator = [
  {
    question: "Me gusta conocer las necesidades y sentimientos de mis amigos",
    trait: "negotiator"
  },
  {
    question:
      "Generalmente, me guío por el corazón cuando tomo decisiones importantes",
    trait: "negotiator"
  },
  {
    question: "Con frecuencia me sorprendo a mí mismo soñando despierto",
    trait: "negotiator"
  },
  {
    question: "Puedo cambiar de opinión fácilmente",
    trait: "negotiator"
  },
  {
    question: "Las pelis emocionales me conmueven tiempo después de verlas",
    trait: "negotiator"
  },
  {
    question: "A menudo me pierdo en mis pensamientos",
    trait: "negotiator"
  },
  {
    question:
      "Siento las emociones más profundamente que la mayoría de la gente",
    trait: "negotiator"
  },
  { question: "Tengo una imaginación muy vívida", trait: "negotiator" },
  {
    question:
      "Al leer, me encanta cuando el escritor describe algo hermoso paralelamente al argumento",
    trait: "negotiator"
  },
  { question: "Me considero empático", trait: "negotiator" }
];

const analyst = [
  {
    question: "Controlo a la perfección mi Smartphone",
    trait: "analyst"
  },
  {
    question: "Disfruto de una conversación científica",
    trait: "analyst"
  },
  {
    question: "Me intriga conocer las reglas y patrones del Universo",
    trait: "analyst"
  },
  {
    question: "Soy más analítico y lógico que la mayoría de personas",
    trait: "analyst"
  },
  {
    question: "Leo sobre temas intelectuales con regularidad",
    trait: "analyst"
  },
  {
    question: "Me gusta averiguar cómo funcionan las cosas",
    trait: "analyst"
  },
  {
    question: "Soy muy poco flexible",
    trait: "analyst"
  },
  {
    question: "Tengo facilidad para elegir entre distintas alternativas",
    trait: "analyst"
  },
  {
    question:
      "Cuando me compro un móvil nuevo quiero saber todas sus características",
    trait: "analyst"
  },
  { question: "Siempre tomo las decisiones por mí mismo", trait: "analyst" }
];

const testTogether = { analyst, searcher, negotiator, master }

var test = testTogether.map(function(x) {
    return x
})