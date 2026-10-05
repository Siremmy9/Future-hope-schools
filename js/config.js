/* ==========================================================================
   config.js  -
  
   ========================================================================== */

const schoolConfig = {
  name: "Future Hope Schools",
  tagline: "Home of Scholars... Where The Future Begins!",
  heroTitle: "Home of Scholars",
  heroSubtitle: "Where The Future Begins!",
  heroText:
    "Building confident, knowledgeable and responsible young minds through quality education, discipline and character.",

  location: "Estate 21,Olufemi Akintunde St,Bashorun Ave, Ajah Lagos",
  addressLines: [
    "Sangotedo, Majek,",
    "Epe-Ajah Expressway,",
    "Lagos, Nigeria.",
  ],

  phone: "+234 803 320 4175",
  email: "info@futurehopeschool.com",
  whatsapp: "2348032304175",
  whatsappMessage:
    "Hello Future Hope Schools, I would like to make an enquiry about admission.",
  openingHours: "Monday to Friday, 8:00am to 4:00pm (edit here)",

  /* ---- Media ---- */

  logo: "assets/logo/logo.jpg",
  heroVideo: "assets/videos/school-hero.mp4",

  heroPoster: "assets/images/logo.jpg",
  // Optional section images (paths). Empty = generated placeholders you can spot and replace.
  images: {
    about: "assets/images/session.jpg",
    creche: "assets/images/library.jpg",
    nursery: "assets/images/creche.jpg",
    primary: "assets/images/primary.jpg",
    secondary: "assets/images/secondary.jpg",
  },

  /* ---- Google Maps ---- */
  // PASTE GOOGLE MAP EMBED URL HERE (Google Maps > Share > Embed a map > copy the src="..." value)
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3722800322716!2d3.6549174999999936!3d6.474440799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf97701b5005f%3A0x37869155214ae318!2sFuture%20Hope%20school!5e0!3m2!1sen!2sng!4v1790959554085!5m2!1sen!2sng",

  /* ---- Social links (leave empty to show a "not set" placeholder) ---- */
  social: { facebook: "", instagram: "", youtube: "", tiktok: "" },

  /* ---- Brand colours   ---- */
  colors: { primary: "#6D1230", secondary: "#D4A017" },

  designer: "Emmanuel | Softech Digitals",

  stats: { years: 10, students: 500, staff: 12, programs: 12 },

  /* ---- Sections of the school ---- */
  levels: [
    {
      id: "creche",
      name: "Crèche",
      age: "Ages 0 to 2 ",
      desc: "A safe, nurturing and stimulating environment for our youngest learners.",
      focus: [
        "Caring, closely supervised daily routines",
        "Sensory play and early movement",
        "First words, songs and stories",
      ],
      classes: ["Crèche"],
    },
    {
      id: "nursery",
      name: "Nursery",
      age: "Ages 3 to 5 ",
      desc: "Building strong foundations through play, discovery and early learning.",
      focus: [
        "Early literacy and numeracy through play",
        "Creative arts, rhymes and music",
        "Social skills, sharing and good manners",
      ],
      classes: ["Nursery 1", "Nursery 2", "Nursery 3"],
    },
    {
      id: "primary",
      name: "Primary",
      age: "Primary 1 to Primary 6",
      desc: "Developing academic knowledge, confidence, creativity and character.",
      focus: [
        "Strong core subjects: English, Mathematics and Science",
        "ICT, sports and creative arts every week",
        "Moral education and leadership roles",
      ],
      classes: [
        "Primary 1",
        "Primary 2",
        "Primary 3",
        "Primary 4",
        "Primary 5",
        "Primary 6",
      ],
    },
    {
      id: "secondary",
      name: "Secondary",
      age: "JSS 1 to SS 3",
      desc: "Preparing students for higher education, leadership and future opportunities.",
      focus: [
        "Rigorous subject teaching and examination preparation",
        "Mentoring, clubs and student leadership",
        "Guidance towards university and career paths",
      ],
      classes: ["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"],
    },
  ],

  /* ---- About page copy (sample text, edit freely) ---- */
  about: {
    intro:
      "Future Hope Schools is a family-focused school offering Crèche, Nursery, Primary and Secondary education. We partner with parents to raise children who are confident, knowledgeable and responsible, and who are ready to lead.",
    mission:
      "To provide quality education in a safe, disciplined and caring environment that develops the whole child: mind, character and talent.",
    vision:
      "To be the home of leaders: a school where every child discovers their potential and is prepared for the future.",
    philosophy:
      "Children learn best when they feel safe, known and challenged. We combine firm discipline with warm relationships, and strong academics with character, creativity and service.",
  },

  values: [
    {
      title: "Discipline",
      icon: "shield",
      text: "Clear routines and high standards that help children grow in self-control.",
    },
    {
      title: "Excellence",
      icon: "target",
      text: "We aim for the best in every lesson, every activity and every result.",
    },
    {
      title: "Integrity",
      icon: "scale",
      text: "Honesty and fairness guide how our pupils and staff behave.",
    },
    {
      title: "Leadership",
      icon: "crown",
      text: "Every child gets chances to lead, speak up and serve others.",
    },
    {
      title: "Character",
      icon: "heart",
      text: "Respect, kindness and responsibility are taught as carefully as mathematics.",
    },
    {
      title: "Innovation",
      icon: "bulb",
      text: "Curious minds are encouraged to ask questions and try new ideas.",
    },
  ],

  admissionSteps: [
    {
      title: "Submit enquiry",
      text: "Fill in the enquiry form below or message us on WhatsApp.",
    },
    {
      title: "Schedule a visit",
      text: "Tour the school and meet our team at a time that suits you.",
    },
    {
      title: "Complete admission form",
      text: "Provide your child's details and the required documents.",
    },
    {
      title: "Assessment or interview",
      text: "A friendly, age-appropriate assessment for your child.",
    },
    {
      title: "Admission confirmation",
      text: "We confirm the outcome and share the next steps.",
    },
    {
      title: "Enrollment",
      text: "Complete payment and welcome your child to the school.",
    },
  ],

  galleryCategories: [
    "Classrooms",
    "Students",
    "Events",
    "Sports",
    "Graduation",
    "Cultural Activities",
    "Facilities",
  ],
  newsCategories: [
    "Announcement",
    "Admissions",
    "Events",
    "Sports",
    "Academics",
    "Parents",
  ],

  /* ---- Demo admin account: see js/admin.js (DEMO AUTH ONLY) ---- */
  siteUrl: "", // e.g. "https://www.Future Hope.com" (used for SEO; update canonical tags in the HTML too)
};
