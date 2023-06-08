import auditionJPG from '../../imgs/services/auditions.jpg'
import actingJPG from '../../imgs/services/acting.jpg'
import creativeWritingJPG from '../../imgs/services/creativeWriting.jpg'
import dramaturgyJPG from '../../imgs/services/dramaturgy.jpg'
import jugglingJPG from '../../imgs/services/juggling.jpg'
import puppetsJPG from '../../imgs/services/puppets.jpg'
import storytellingJPG from '../../imgs/services/storytelling.jpg'

export const serviceTypes = [
  {
    title: "Auditioning",
    timeLength: "40 minutes",
    img: auditionJPG,
    prices: [
      { price: 280, desc: "/package" },
      { price: 40, desc: "/additional class" },
    ],
  },
  {
    title: "Storytelling",
    timeLength: "1 hours",
    img: storytellingJPG,
    prices: [{ price: 35, desc: "/session" }],
  },
  {
    title: "Creative Writing",
    timeLength: "40 minutes",
    img: creativeWritingJPG,
    prices: [
      { price: 40, desc: "/session" },
      { price: 150, desc: "/4 sessions" },
      { price: 220, desc: "/6 sessions" },
    ],
  },
  {
    title: "Juggling",
    timeLength: "40 minutes",
    img: jugglingJPG,
    prices: [{ price: 30, desc: "/session" }],
  },
  {
    title: "Monologue and Acting",
    timeLength: "1 hours",
    img: actingJPG,
    prices: [
      { price: 45, desc: "/session" },
      { price: 360, desc: "/8 sessions" },
    ],
  },
  {
    title: "Dramaturgy and Theatre History",
    timeLength: "40 minutes",
    img: dramaturgyJPG,
    prices: [{ price: 45, desc: "/session" }],
  },
  {
    title: "Improvisation, Puppet and Role Playing",
    timeLength: "1 hours",
    img: puppetsJPG,
    prices: [{ price: 40, desc: "/session" }],
  },
];
