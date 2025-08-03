import {
  mobile,
  backend,
  web,
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  nti,
  praktik,
  kod,
  threejs,
  minkuk,
  hora,
  NET,
  car,
  nice,
  lager
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "python Developer",
    icon: python,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: minkuk,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: hora,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  
 
];

const experiences = [
  {
    title: "Utbildning",
    company_name: "NTI Gymnasiet",
    icon: nti,
    iconBg: "#383E56",
    date: "Augusti 2022- juni 2025",
    points: [
      "Gick El- och energiprogrammet med inriktning Data och kommunikation.",
      "Fick grundläggande kunskaper inom nätverk, system och datorhårdvara..",
      "Lärde mig grunderna i programmering och teknisk problemlösning.",
      "Utvecklade mitt intresse för webbutveckling och mjukvara.",
    ],
  },
  {
    title: "Praktik",
    company_name: "Frisörgrossen",
    icon: praktik,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Maj 2025",
    points: [
      "Genomförde praktik som webbutvecklare på ett e-handelsföretag.",
      "Byggde och uppdaterade företagets hemsida med HTML, CSS och JavaScript..",
      "Analyserade användarflöden och förbättrade sidans struktur.",
      "Fick erfarenhet av att arbeta mot deadlines och kundbehov.",
    ],
  },
  {
    title: "Utveckling",
    company_name: "",
    icon: kod,
    iconBg: "#383E56",
    date: "",
    points: [
      "Började med grunder i HTML, CSS och JavaScript under gymnasietiden.",
      ".Gick vidare till att lära mig React och Node.js genom egna projekt",
      "Utvecklade mindre webbaserade appar och lärde mig versionshantering med Git.",
      "Blev trygg i att arbeta både frontend och backend i fullstack-miljöer.",
    ],
  },
  {
    title: "Teknik 4",
    company_name: "NTI Södertörn",
    icon: nti,
    iconBg: "#E6DEDD",
    date: "Augusti 2025 - Nutid",
    points: [
      "Antagen till ett ettårigt tekniskt fördjupningsår på NTI Södertörn.",
      "Fokus på avancerad programmering, systemutveckling och projektledning.",
      "Målet är att stärka teknisk kompetens inför högre studier eller yrkesliv.",
      "Ser fram emot att jobba med verkliga projekt och utveckla portföljen.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Under sin praktik hos oss visade Michell stort engagemang och teknisk skicklighet inom webbutveckling. " +
      "Han uppdaterade och förbättrade vår hemsida med moderna tekniker som HTML, CSS och JavaScript. " +
      "Michell visade även god förmåga att analysera användarflöden och föreslå förbättringar som ökade användarvänligheten. " +
      "Han var punktlig, ansvarstagande och arbetade självständigt med att leverera resultat enligt våra behov och tidsramar. " +
      "Vi är mycket nöjda med hans insats.",
    Name: "Lemar Hanna",
    designation: "Handledare",
    company: "Frissörgrossen",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQH5DkIG5J9Fiw/profile-framedphoto-shrink_800_800/B4DZfwfzmVGsAo-/0/1752086559505?e=1754773200&v=beta&t=H9G7MIETFo3464hxYz-1XpHTw6BIlGSgzR_-yNURoMw",
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Interaktiv hemsida med startsida och kontaktformulär för förfrågningar, responsiv design, ren layout och smidiga animationer – visar moderna webbutvecklingskunskaper",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/Michell145/bil-hemsida",
  },
  {
    name: "BildGalleri",
    description:
      "Jag har byggt en bildhemsida med HTML, CSS och JavaScript. Den visar ett galleri med bilder, har en stilren design, animerad text och interaktiva funktioner som scroll-effekter och en scroll to top-knapp. Sidan är responsiv och användarvänlig.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: nice,
    source_code_link: "https://github.com/Michell145/portfolio-prototyp",
  },
  {
    name: "Lager system",
    description:
      "Jag har byggt ett lagerhanteringssystem i HTML, CSS och JavaScript. Användaren kan söka, lägga till och visa produkter i ett lager. All data hämtas från en JSON-fil och visas i en tabell. Systemet innehåller även två interaktiva diagram (Chart.js) för lagersaldo och försäljning.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: lager,
    source_code_link: "https://github.com/Michell145/Michells-lager",
  },
];

export { services, technologies, experiences, testimonials, projects};
