/* ==========================================================================
   content.js  -  ALL PUBLIC WEBSITE CONTENT LIVES HERE
   --------------------------------------------------------------------------
   Edit this file in your code editor, save, and re-upload the site. Every
   visitor on every device then sees the same content.

   PHOTOS: copy the image file into the matching folder, then write its path.
     assets/images/staff/      -> staff portraits   (600 x 700 px, portrait)
     assets/images/gallery/    -> gallery photos    (any size, under ~400 KB)
     assets/images/news/       -> news images       (800 x 500 px)
     assets/images/facilities/ -> facility photos   (800 x 600 px)
   Leave an image as "" to show a generated placeholder.

   School name, phone, colours, WhatsApp etc. are in js/config.js.
   The admin dashboard only manages admissions, students and messages.
   ========================================================================== */

const schoolContent = {

  /* ------------------------------- STAFF ------------------------------- */
  staff: [
    { name: "Principal's Name", position: "Principal", department: "Administration", photo: "",
      bio: "Add a short biography here: qualifications, years of experience and what this person brings to the school." },
    { name: "Vice Principal's Name", position: "Vice Principal", department: "Administration", photo: "",
      bio: "Add a short biography here." },
    { name: "Head Teacher's Name", position: "Head Teacher", department: "Primary", photo: "",
      bio: "Add a short biography here." },
    { name: "Class Teacher's Name", position: "Class Teacher", department: "Nursery", photo: "",
      bio: "Add a short biography here." },
    { name: "Subject Teacher's Name", position: "Subject Teacher", department: "Secondary", photo: "",
      bio: "Add a short biography here." },
    { name: "Administrator's Name", position: "Administrator", department: "School Office", photo: "",
      bio: "Add a short biography here." }
    // Example with a photo:
    // { name: "Mrs. A. Okafor", position: "Principal", department: "Administration",
    //   photo: "assets/images/staff/mrs-okafor.jpg", bio: "..." },
  ],

  /* ------------------------------ GALLERY ------------------------------ */
  // category must be one of: Classrooms, Students, Events, Sports, Graduation,
  // Cultural Activities, Facilities  (list is galleryCategories in config.js)
  gallery: [
    { image: "", caption: "Bright classroom", category: "Classrooms" },
    { image: "", caption: "Reading time", category: "Students" },
    { image: "", caption: "Sports day", category: "Sports" },
    { image: "", caption: "Graduation day", category: "Graduation" },
    { image: "", caption: "Cultural parade", category: "Cultural Activities" },
    { image: "", caption: "Science corner", category: "Facilities" },
    { image: "", caption: "Assembly", category: "Students" },
    { image: "", caption: "Inter-house relay", category: "Sports" },
    { image: "", caption: "Art lesson", category: "Classrooms" },
    { image: "", caption: "Open day", category: "Events" },
    { image: "", caption: "Playground", category: "Facilities" },
    { image: "", caption: "Traditional dance", category: "Cultural Activities" }
    // Example: { image: "assets/images/gallery/sports-day.jpg", caption: "Sports day", category: "Sports" },
  ],

  /* --------------------------- NEWS & EVENTS --------------------------- */
  // date: "YYYY-MM-DD".  published: false hides an article without deleting it.
  // content: full text; use a blank line between paragraphs.
  news: [
    { title: "School Resumption", category: "Announcement", date: "2026-09-14", image: "", published: true,
      excerpt: "Resumption dates, school hours and first-week arrangements are shared here once confirmed.",
      content: "Replace this sample text with the real announcement from the school.\n\nContact the school office or message us on WhatsApp if you have questions." },
    { title: "Inter-House Sports", category: "Sports", date: "2026-09-07", image: "", published: true,
      excerpt: "Highlights, house points and photos from the school's sports competition.",
      content: "Replace this sample text with the real report.\n\nContact the school office if you have questions." },
    { title: "Graduation Ceremony", category: "Events", date: "2026-08-30", image: "", published: true,
      excerpt: "Details of the ceremony for graduating pupils, with a guide for families.",
      content: "Replace this sample text with the real announcement.\n\nContact the school office if you have questions." },
    { title: "Parents Meeting", category: "Parents", date: "2026-08-23", image: "", published: true,
      excerpt: "Date, time and agenda for the next parents' meeting.",
      content: "Replace this sample text with the real announcement.\n\nContact the school office if you have questions." },
    { title: "Cultural Day", category: "Events", date: "2026-08-15", image: "", published: true,
      excerpt: "A day to celebrate Nigerian cultures through food, dress, music and dance.",
      content: "Replace this sample text with the real announcement.\n\nContact the school office if you have questions." },
    { title: "Excursion", category: "Events", date: "2026-08-07", image: "", published: true,
      excerpt: "Where our pupils are going, what to bring and how to give consent.",
      content: "Replace this sample text with the real announcement.\n\nContact the school office if you have questions." },
    { title: "Examination Timetable", category: "Academics", date: "2026-07-29", image: "", published: false,
      excerpt: "The examination timetable and guidance for parents and pupils.",
      content: "Replace this sample text with the real timetable.\n\nContact the school office if you have questions." },
    { title: "Admission Announcement", category: "Admissions", date: "2026-07-21", image: "", published: true,
      excerpt: "Admission is open. Read how to begin the process for your child.",
      content: "Admission is open for Crèche, Nursery, Primary and Secondary.\n\nUse the Apply Now button or message us on WhatsApp." }
  ],

  /* ----------------------------- FACILITIES ---------------------------- */
  facilities: [
    { title: "Modern Classrooms", description: "Bright, well-ventilated classrooms arranged for active learning.", image: "" },
    { title: "ICT Laboratory", description: "Computers for hands-on digital skills from the early years.", image: "" },
    { title: "Science Laboratory", description: "Safe space for experiments that bring science to life.", image: "" },
    { title: "Library", description: "A quiet reading space with age-appropriate books.", image: "" },
    { title: "Playground", description: "Safe outdoor play areas for the youngest learners.", image: "" },
    { title: "Sports Facilities", description: "Space for football, athletics and inter-house competitions.", image: "" },
    { title: "School Bus", description: "Safe, supervised transport on set routes.", image: "" },
    { title: "Security", description: "Controlled access and attentive staff on duty.", image: "" },
    { title: "Cafeteria", description: "Clean, supervised space for meals and snacks.", image: "" },
    { title: "Medical and First Aid", description: "First-aid support for minor injuries and emergencies.", image: "" },
    { title: "Creative Arts Area", description: "A dedicated area for art, music and drama.", image: "" }
  ],

  /* ----------------------------- ACADEMICS ----------------------------- */
  academicsApproach: [
    { title: "Curriculum", description: "A structured, age-appropriate curriculum that builds strong foundations in literacy, numeracy, science and the arts." },
    { title: "ICT education", description: "Computer skills, safe internet use and early coding ideas taught at each stage." },
    { title: "Co-curricular activities", description: "Clubs and societies that let pupils explore interests beyond the classroom." },
    { title: "Sports", description: "Regular physical education, team games and inter-house competitions." },
    { title: "Creative arts", description: "Art, music, drama and dance to build expression and confidence." },
    { title: "Leadership development", description: "Prefect roles, public speaking and service projects for every age group." },
    { title: "Moral and character education", description: "Lessons and daily routines that build honesty, respect and responsibility." }
  ],
  academicsSubjects: [
    "Mathematics", "English Language", "Basic Science", "Computer Studies", "Social Studies",
    "Civic Education", "Literature", "Creative Arts", "Physical Education", "Religious and Moral Education"
  ],

  /* ---------------------------- TESTIMONIALS --------------------------- */
  testimonials: [
    { name: "Parent Name", childClass: "Parent, Primary 4", photo: "",
      quote: "We are grateful for the quality of education and care our child receives." },
    { name: "Parent Name", childClass: "Parent, Nursery 2", photo: "",
      quote: "The teachers know every child by name, and our son looks forward to school every morning." },
    { name: "Parent Name", childClass: "Parent, JSS 2", photo: "",
      quote: "Discipline and academics go together here. We have seen real growth in confidence." },
    { name: "Parent Name", childClass: "Parent, Crèche", photo: "",
      quote: "Communication with the school is quick and clear, and the staff are always welcoming." }
  ],

  /* ------------------------------- FEES -------------------------------- */
  // Type an amount like "₦XX,XXX" or "Contact School". Keys match the "id" of
  // each school in config.js (creche, nursery, primary, secondary).
  fees: {
    levels: {
      creche:    { tuition: "Contact School", registration: "Contact School", levy: "Contact School", books: "Contact School", uniform: "Contact School", other: "Contact School" },
      nursery:   { tuition: "Contact School", registration: "Contact School", levy: "Contact School", books: "Contact School", uniform: "Contact School", other: "Contact School" },
      primary:   { tuition: "Contact School", registration: "Contact School", levy: "Contact School", books: "Contact School", uniform: "Contact School", other: "Contact School" },
      secondary: { tuition: "Contact School", registration: "Contact School", levy: "Contact School", books: "Contact School", uniform: "Contact School", other: "Contact School" }
    },
    payment: {
      note: "Fees and payment information can be updated by the school administrator.",
      bankName: "Bank Name",
      accountName: "Account Name",
      accountNumber: "XXXXXXXXXX",
      instructions: "Please use your child's full name and class as the payment reference, and send proof of payment to the school office or via WhatsApp.",
      methods: [
        { name: "Bank Transfer", desc: "Transfer to the school account shown below and keep your receipt." },
        { name: "POS", desc: "Pay by card at the school payment office." },
        { name: "School Payment Office", desc: "Pay in person at the bursary during opening hours." },
        { name: "Online Payment", desc: "Online payment link to be provided by the school." }
      ]
    }
  }
};
