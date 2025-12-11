'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const translations = {
  fr: {
    // Navbar
    'navbar.letsTalk': 'Discutons',
    'navbar.downloadCV': 'Télécharger mon CV',
    // Hero
    'hero.futureDeveloper': 'Un Futur Développeur',
    'hero.alternant': 'Alternant',
    'hero.description': 'Étudiant en 3ème année de BUT Informatique, passionné par le développement full-stack, et l\'UI/UX. J\'aime créer des expériences interactives et construire des applications efficaces.',
    // Skills
    'skills.title': 'Compétences',
    'skills.pageTitle': 'Mes Compétences',
    'skills.intro': 'Etant en 3ème année de BUT Informatique, parcours Réalisation d\'applications : conception, développement, validation, je prépare uniquement les 2 premières compétences ainsi que la dernière compétence du programme national.',
    'skills.ce1.title': 'Réaliser',
    'skills.ce1.description': 'Développer, c\'est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un client.',
    'skills.ce2.title': 'Optimiser',
    'skills.ce2.description': 'Proposer des applications informatiques optimisées en fonction de critères spécifiques: temps d\'exécution, précision, consommation de ressources.',
    'skills.ce3.title': 'Administrer',
    'skills.ce3.description': 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d\'une organisation.',
    'skills.ce4.title': 'Gérer',
    'skills.ce4.description': 'Considérer, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l\'entreprise.',
    'skills.ce5.title': 'Conduire',
    'skills.ce5.description': 'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
    'skills.ce6.title': 'Collaborer',
    'skills.ce6.description': 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',

    // CE1 Levels
    'skills.levels.ce1.level1.title': 'Développer des applications informatiques simples',
    'skills.levels.ce1.level2.title': 'Partir des exigences et aller jusqu\'à une application complète',
    'skills.levels.ce1.level3.title': 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
    'skills.levels.ce1.level3.ac': 'AC31.01 : Choisir et implémenter les architectures adaptées | AC31.02 : Faire évoluer une application existante | AC31.03 : Intégrer des solutions dans un environnement de production',

    // CE2 Levels
    'skills.levels.ce2.level1.title': 'Appréhender et construire des algorithmes',
    'skills.levels.ce2.level1.ac': 'AC12.01 : Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...) | AC12.02 : Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...) | AC12.03 : Formaliser et mettre en œuvre des outils mathématiques pour l\'informatique',
    'skills.levels.ce2.level2.title': 'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
    'skills.levels.ce2.level2.ac': 'AC22.01 : Choisir des structures de données complexes adaptées au problème | AC22.02 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...) | AC22.03 : Comprendre les enjeux et moyens de sécurisation des données et du code | AC22.04 : Évaluer l\'impact environnemental et sociétal des solutions proposées',
    'skills.levels.ce2.level3.title': 'Analyser et optimiser des applications',
    'skills.levels.ce2.level3.ac': 'AC32.01 : Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge...) | AC32.02 : Profiler, analyser et justifier le comportement d\'un code existant | AC32.03 : Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d\'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)',

    // CE3 Levels
    'skills.levels.ce3.level1.title': 'Installer et configurer un poste de travail',
    'skills.levels.ce3.level1.ac': 'AC13.01 : Identifier les différents composants (matériels et logiciels) d\'un système numérique | AC13.02 : Utiliser les fonctionnalités de base d\'un système multitâches / multiutilisateurs | AC13.03 : Installer et configurer un système d\'exploitation et des outils de développement | AC13.04 : Configurer un poste de travail dans un réseau d\'entreprise',
    'skills.levels.ce3.level2.title': 'Déployer des services dans une architecture réseau',
    'skills.levels.ce3.level2.ac': 'AC23.01 : Concevoir et développer des applications communicantes | AC23.02 : Utiliser des serveurs et des services réseaux virtualisés | AC23.03 : Sécuriser les services et données d\'un système',

    // CE4 Levels
    'skills.levels.ce4.level1.title': 'Concevoir et mettre en place une base de données à partir d\'un cahier des charges client',
    'skills.levels.ce4.level1.ac': 'AC14.01 : Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application) | AC14.02 : Visualiser des données | AC14.03 : Concevoir une base de données relationnelle à partir d\'un cahier des charges',
    'skills.levels.ce4.level2.title': 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
    'skills.levels.ce4.level2.ac': 'AC24.01 : Optimiser les modèles de données de l\'entreprise | AC24.02 : Assurer la sécurité des données (intégrité et confidentialité) | AC24.03 : Organiser la restitution de données à travers la programmation et la visualisation | AC24.04 : Manipuler des données hétérogènes',

    // CE5 Levels
    'skills.levels.ce5.level1.title': 'Identifier les besoins métiers des clients et des utilisateurs',
    'skills.levels.ce5.level1.ac': 'AC15.01 : Appréhender les besoins du client et de l\'utilisateur | AC15.02 : Mettre en place les outils de gestion de projet | AC15.03 : Identifier les acteurs et les différentes phases d\'un cycle de développement',
    'skills.levels.ce5.level2.title': 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
    'skills.levels.ce5.level2.ac': 'AC25.01 : Identifier les processus présents dans une organisation en vue d\'améliorer les systèmes d\'information | AC25.02 : Formaliser les besoins du client et de l\'utilisateur | AC25.03 : Identifier les critères de faisabilité d\'un projet informatique | AC25.04 : Définir et mettre en œuvre une démarche de suivi de projet',

    // CE6 Levels
    'skills.levels.ce6.level1.title': 'Identifier ses aptitudes pour travailler dans une équipe',
    'skills.levels.ce6.level1.ac': 'AC16.01 : Appréhender l\'écosystème numérique | AC16.02 : Découvrir les aptitudes requises selon les différents secteurs informatiques | AC16.03 : Identifier les statuts, les fonctions et les rôles de chaque membre d\'une équipe pluridisciplinaire | AC16.04 : Acquérir les compétences interpersonnelles pour travailler en équipe',
    'skills.levels.ce6.level2.title': 'Situer son rôle et ses missions au sein d\'une équipe informatique',
    'skills.levels.ce6.level2.ac': 'AC26.01 : Comprendre la diversité, la structure et la dimension de l\'informatique dans une organisation (ESN, DSI,...) | AC26.02 : Appliquer une démarche pour intégrer une équipe informatique au sein d\'une organisation | AC26.03 : Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique | AC26.04 : Rendre compte de son activité professionnelle',
    'skills.levels.ce6.level3.title': 'Manager une équipe informatique',
    'skills.levels.ce6.level3.ac': 'AC36.01 : Organiser et partager une veille technologique et informationnelle | AC36.02 : Identifier les enjeux de l\'économie de l\'innovation numérique | AC36.03 : Guider la conduite du changement informatique au sein d\'une organisation | AC36.04 : Accompagner le management de projet informatique',
    // Projects
    'projects.title': 'Projets',
    'projects.pageTitle': 'Mes Projets',
    'projects.intro': 'Découvrez mes projets récents qui démontrent mes compétences en développement et ma passion pour la création d\'applications innovantes.',
    'projects.webApplication': 'Application Web',
    'projects.fullStack': 'Full Stack',
    'projects.3dArt': 'Art 3D',
    'projects.meditation.title': 'Cours de Méditation',
    'projects.meditation.description': 'Application web interactive pour l\'apprentissage de la méditation avec des sessions guidées et un suivi de progression.',
    'projects.ecommerce.title': 'Plateforme E-commerce',
    'projects.ecommerce.description': 'Solution e-commerce complète avec gestion des produits, panier d\'achat, et système de paiement sécurisé.',
    'projects.portfolio.title': 'Portfolio Personnel',
    'projects.portfolio.description': 'Site portfolio moderne et responsive présentant mes compétences, projets et expériences professionnelles.',
    // Hobbies
    'hobbies.title': 'Loisirs',
    'hobbies.pageTitle': 'Mes Loisirs',
    'hobbies.intro': 'En dehors du développement, je cultive diverses passions qui enrichissent ma créativité et mon équilibre personnel.',
    'hobbies.scooter.title': 'Trottinette Freestyle',
    'hobbies.scooter.description': 'Je pratique la trotinette freestyle depuis mes 12 ans.',
    'hobbies.scooter.expandedDescription': 'Je pratique la trotinette freestyle depuis mes 12 ans, me permetttant ainsi de renforcer mon équilibre et ma coordination, ainsi que ma détermination et ma persévérance. Une vidéo de moi en action ci-dessous.',
    'hobbies.gaming.title': 'Jeux Vidéo',
    'hobbies.gaming.description': 'Passionné par les jeux vidéo, notamment les Open-Worlds.',
    'hobbies.gaming.expandedDescription': 'Passionné par les jeux vidéo, notamment les Open-Worlds, cela m\'a permis de découvrir de nouveaux mondes et de nouvelles histoires, attisant ma curiosité et mon imagination. Par exemple, le jeu "Minecraft" présent ci-dessous en est un bon exemple.',
    'hobbies.music.title': 'Musique',
    'hobbies.music.description': 'Écoute et découverte de nouveaux genres musicaux.',
    'hobbies.music.expandedDescription': 'Écoute et découverte de nouveaux genres musicaux, du Hip Hop au Soul en passant par de nombreux autres. Un carrousel de mes chansons préférées ci-dessous.',
    'hobbies.drawing.title': 'Dessin',
    'hobbies.drawing.description': 'Le dessin me permet de m\'exprimer librement.',
    'hobbies.drawing.expandedDescription': 'Le dessin me permet de m\'exprimer librement, avec minutie et précision. Quelques exemples de dessous avec mes dessins préférés.',
    'hobbies.audiovisual.title': 'Audiovisuel',
    'hobbies.audiovisual.description': 'Le monde de l\'audiovisuel.',
    'hobbies.audiovisual.expandedDescription': 'Le monde de l\'audiovisuel est passionnant, avec des histoires et des personnages qui m\'inspirent. Je regarde beaucoup de séries et de films, ainsi que des animes.',
    'hobbies.reading.title': 'Lecture',
    'hobbies.reading.description': 'Lecture de livres.',
    'hobbies.reading.expandedDescription': 'Lecture de livres d\'épouvantes et science-fiction, comme ci-dessous avec les livres "Chair de poule".',
    // Experiences
    'experiences.title': 'Expériences',
    'experiences.pageTitle': 'Mon Expérience Professionnelle',
    'experiences.intro': 'Mon parcours professionnel m\'a permis d\'acquérir des compétences pratiques et de contribuer à des projets concrets.',
    'experiences.exp1.title': 'Développeur Full-Stack',
    'experiences.exp1.company': 'Entreprise XYZ',
    'experiences.exp1.period': 'Sept 2023 - Présent',
    'experiences.exp1.location': 'Lens, France',
    'experiences.exp1.description': 'Développement d\'applications web modernes en alternance, participation à toutes les phases du cycle de développement.',
    'experiences.exp1.tasks': 'Développement de fonctionnalités front-end avec React et Next.js | Création d\'APIs RESTful avec Node.js | Optimisation des performances et de l\'expérience utilisateur | Collaboration en équipe agile avec Git',
    'experiences.exp2.title': 'Stagiaire Développeur Web',
    'experiences.exp2.company': 'Startup ABC',
    'experiences.exp2.period': 'Avril 2023 - Juin 2023',
    'experiences.exp2.location': 'Lille, France',
    'experiences.exp2.description': 'Stage de découverte du développement web au sein d\'une startup innovante.',
    'experiences.exp2.tasks': 'Développement de pages web responsives | Intégration de maquettes UI/UX | Tests et débogage d\'applications | Apprentissage des bonnes pratiques de développement',
    // About Page
    'about.title': 'À Propos',
    'about.intro': 'Passionné par la technologie et le développement, je suis constamment à la recherche de nouveaux défis et d\'opportunités pour apprendre et grandir. ',
    'about.personalInfo.title': 'Informations Personnelles',
    'about.personalInfo.ageLabel': 'Âge',
    'about.personalInfo.age': '20 ans',
    'about.personalInfo.locationLabel': 'Localisation',
    'about.personalInfo.location': 'Annecy / Lyon',
    'about.education.title': 'Formation',
    'about.education.period': '2022 - 2025',
    'about.education.degree': 'BUT Informatique',
    'about.education.school': 'IUT de Lens',
    'about.education.description': 'Spécialisation en développement d\'applications et réalisation d\'applications',
    'about.bio.title': 'Mon Parcours',
    'about.bio.paragraph1': 'Actuellement en 3ème année de BUT Informatique, je me spécialise dans le développement full-stack avec un intérêt particulier pour les technologies web modernes et l\'expérience utilisateur.',
    'about.bio.paragraph2': 'Mon parcours m\'a permis de développer des compétences solides en développement front-end et back-end, tout en cultivant une passion pour la création d\'interfaces utilisateur intuitives et esthétiques.',
    'about.bio.paragraph3': 'En dehors du code, je m\'intéresse à l\'art 3D et au design, ce qui enrichit ma vision du développement et me permet d\'apporter une touche créative à mes projets.',
    // Footer
    'footer.rights': 'Tous droits réservés par Anthony Marques Felix',
    // Misc
    'misc.cvLink': '/cvs/CV_MARQUES_FELIX_Anthony.pdf',
  },
  en: {
    'navbar.letsTalk': 'Let\'s talk',
    'navbar.downloadCV': 'Download my CV',
    'hero.futureDeveloper': 'A Future Developer',
    'hero.alternant': 'Apprentice',
    'hero.description': '3rd year Computer Science student, passionate about full-stack development and UI/UX. I enjoy creating interactive experiences and building efficient applications.',
    'hero.buildingSkills': 'Building Skills',
    'hero.forFuture': 'For Future.',
    'skills.title': 'Skills',
    'skills.pageTitle': 'My Skills',
    'skills.intro': 'Being in 3rd year of Computer Science Bachelor, Application Development track: design, development, validation, I am preparing only the first 2 competencies and the last competency of the national program.',
    'skills.ce1.title': 'Develop',
    'skills.ce1.description': 'Develop, that is to say design, code, test and integrate a computer solution for a client.',
    'skills.ce2.title': 'Optimize',
    'skills.ce2.description': 'Propose optimized computer applications according to specific criteria: execution time, precision, resource consumption.',
    'skills.ce3.title': 'Administrate',
    'skills.ce3.description': 'Install, configure, make available, maintain operational infrastructures, services and networks and optimize an organization\'s IT system.',
    'skills.ce4.title': 'Manage',
    'skills.ce4.description': 'Consider, manage, administer and exploit company data and make all information available for proper company management.',
    'skills.ce5.title': 'Lead',
    'skills.ce5.description': 'Satisfy user needs with regard to the customer\'s value chain, organize and manage an IT project with classic or agile methods.',
    'skills.ce6.title': 'Collaborate',
    'skills.ce6.description': 'Acquire, develop and exploit the skills necessary to work effectively in an IT team.',

    // CE1 Levels
    'skills.levels.ce1.level1.title': 'Develop simple computer applications',
    'skills.levels.ce1.level1.ac': 'AC11.01 | Implement simple designs | AC11.02 | Develop simple designs | AC11.03 | Perform tests and evaluate their results against specifications | AC11.04 | Develop user interfaces',
    'skills.levels.ce1.level2.title': 'From requirements to a complete application',
    'skills.levels.ce1.level2.ac': 'AC21.01 | Develop and implement functional and non-functional specifications from requirements | AC21.02 | Apply accessibility and ergonomics principles | AC21.03 | Adopt good design and programming practices | AC21.04 | Verify and validate application quality through testing',
    'skills.levels.ce1.level3.title': 'Adapt applications across multiple platforms (embedded, web, mobile, IoT…)',
    'skills.levels.ce1.level3.ac': 'AC31.01 | Choose and implement appropriate architectures | AC31.02 | Evolve an existing application | AC31.03 | Integrate solutions into a production environment',

    // CE2 Levels
    'skills.levels.ce2.level1.title': 'Understand and build algorithms',
    'skills.levels.ce2.level1.ac': 'AC12.01: Analyze a problem methodically (breaking down into simple algorithmic elements, data structure...) | AC12.02: Compare algorithms for classic problems (simple sorts, search...) | AC12.03: Formalize and implement mathematical tools for computer science',
    'skills.levels.ce2.level2.title': 'Select appropriate algorithms to solve a given problem',
    'skills.levels.ce2.level2.ac': 'AC22.01: Choose complex data structures adapted to the problem | AC22.02: Use appropriate algorithmic techniques for complex problems (e.g. operational research, tree methods, global optimization, artificial intelligence...) | AC22.03: Understand the challenges and means of securing data and code | AC22.04: Evaluate the environmental and societal impact of proposed solutions',
    'skills.levels.ce2.level3.title': 'Analyze and optimize applications',
    'skills.levels.ce2.level3.ac': 'AC32.01: Anticipate the results of various metrics (execution time, memory usage, scalability...) | AC32.02: Profile, analyze and justify the behavior of existing code | AC32.03: Choose and use libraries and methods dedicated to the application domain (imaging, immersion, artificial intelligence, video games, parallelism, formal calculation...)',

    // CE3 Levels
    'skills.levels.ce3.level1.title': 'Install and configure a workstation',
    'skills.levels.ce3.level1.ac': 'AC13.01: Identify different components (hardware and software) of a digital system | AC13.02: Use basic functionalities of a multitasking / multiuser system | AC13.03: Install and configure an operating system and development tools | AC13.04: Configure a workstation in a corporate network',
    'skills.levels.ce3.level2.title': 'Deploy services in a network architecture',
    'skills.levels.ce3.level2.ac': 'AC23.01: Design and develop communicating applications | AC23.02: Use virtualized servers and network services | AC23.03: Secure services and data of a system',

    // CE4 Levels
    'skills.levels.ce4.level1.title': 'Design and implement a database from client specifications',
    'skills.levels.ce4.level1.ac': 'AC14.01: Update and query a relational database (in direct queries or through an application) | AC14.02: Visualize data | AC14.03: Design a relational database from specifications',
    'skills.levels.ce4.level2.title': 'Optimize a database, interact with an application and implement security',
    'skills.levels.ce4.level2.ac': 'AC24.01: Optimize company data models | AC24.02: Ensure data security (integrity and confidentiality) | AC24.03: Organize data restitution through programming and visualization | AC24.04: Manipulate heterogeneous data',

    // CE5 Levels
    'skills.levels.ce5.level1.title': 'Identify business needs of clients and users',
    'skills.levels.ce5.level1.ac': 'AC15.01: Understand client and user needs | AC15.02: Set up project management tools | AC15.03: Identify actors and different phases of a development cycle',
    'skills.levels.ce5.level2.title': 'Apply a project monitoring approach based on business needs of clients and users',
    'skills.levels.ce5.level2.ac': 'AC25.01: Identify processes present in an organization to improve information systems | AC25.02: Formalize client and user needs | AC25.03: Identify feasibility criteria for an IT project | AC25.04: Define and implement a project monitoring approach',

    // CE6 Levels
    'skills.levels.ce6.level1.title': 'Identify skills to work in a team',
    'skills.levels.ce6.level1.ac': 'AC16.01: Understand the digital ecosystem | AC16.02: Discover required skills according to different IT sectors | AC16.03: Identify statuses, functions and roles of each member of a multidisciplinary team | AC16.04: Acquire interpersonal skills to work in a team',
    'skills.levels.ce6.level2.title': 'Position your role and missions within an IT team',
    'skills.levels.ce6.level2.ac': 'AC26.01: Understand the diversity, structure and dimension of IT in an organization (ESN, DSI,...) | AC26.02: Apply an approach to integrate an IT team within an organization | AC26.03: Mobilize interpersonal skills to work in an IT team | AC26.04: Report on professional activity',
    'skills.levels.ce6.level3.title': 'Manage an IT team',
    'skills.levels.ce6.level3.ac': 'AC36.01: Organize and share technological and informational watch | AC36.02: Identify challenges of digital innovation economy | AC36.03: Guide IT change management within an organization | AC36.04: Support IT project management',
    'projects.title': 'Projects',
    'projects.pageTitle': 'My Projects',
    'projects.intro': 'Discover my recent projects that demonstrate my development skills and passion for creating innovative applications.',
    'projects.webApplication': 'Web Application',
    'projects.fullStack': 'Full Stack',
    'projects.3dArt': '3D Art',
    'projects.meditation.title': 'Meditation Course',
    'projects.meditation.description': 'Interactive web application for learning meditation with guided sessions and progress tracking.',
    'projects.ecommerce.title': 'E-commerce Platform',
    'projects.ecommerce.description': 'Complete e-commerce solution with product management, shopping cart, and secure payment system.',
    'projects.portfolio.title': 'Personal Portfolio',
    'projects.portfolio.description': 'Modern and responsive portfolio website showcasing my skills, projects and professional experiences.',
    'hobbies.title': 'Hobbies',
    'hobbies.pageTitle': 'My Hobbies',
    'hobbies.intro': 'Outside of development, I cultivate various passions that enrich my creativity and personal balance.',
    'hobbies.scooter.title': 'Scooter Freestyle',
    'hobbies.scooter.description': 'I practice Scooter Freestyle since my 12 years old.',
    'hobbies.gaming.title': 'Video Games',
    'hobbies.gaming.description': 'Passionate about video games, especially Open-Worlds.',
    'hobbies.music.title': 'Music',
    'hobbies.music.description': 'Listening and discovering new music genres.',
    'hobbies.drawing.title': 'Drawing',
    'hobbies.drawing.description': 'Drawing allows me to express myself freely.',
    'hobbies.audiovisual.title': 'Audiovisual',
    'hobbies.audiovisual.description': 'The world of audiovisual.',
    'hobbies.reading.title': 'Reading',
    'hobbies.reading.description': 'Reading books.',
    'experiences.title': 'Experiences',
    'experiences.pageTitle': 'My Professional Experience',
    'experiences.intro': 'My professional journey has allowed me to acquire practical skills and contribute to concrete projects.',
    'experiences.exp1.title': 'Full-Stack Developer',
    'experiences.exp1.company': 'Company XYZ',
    'experiences.exp1.period': 'Sept 2023 - Present',
    'experiences.exp1.location': 'Lens, France',
    'experiences.exp1.description': 'Development of modern web applications in apprenticeship, participation in all phases of the development cycle.',
    'experiences.exp1.tasks': 'Development of front-end features with React and Next.js | Creation of RESTful APIs with Node.js | Performance and user experience optimization | Collaboration in agile team with Git',
    'experiences.exp2.title': 'Web Developer Intern',
    'experiences.exp2.company': 'Startup ABC',
    'experiences.exp2.period': 'April 2023 - June 2023',
    'experiences.exp2.location': 'Lille, France',
    'experiences.exp2.description': 'Discovery internship in web development within an innovative startup.',
    'experiences.exp2.tasks': 'Development of responsive web pages | Integration of UI/UX mockups | Application testing and debugging | Learning development best practices',
    'about.title': 'About Me',
    'about.intro': 'Passionate about technology and development, I am constantly seeking new challenges and opportunities to learn and grow.',
    'about.personalInfo.title': 'Personal Information',
    'about.personalInfo.ageLabel': 'Age',
    'about.personalInfo.age': '20 years old',
    'about.personalInfo.locationLabel': 'Location',
    'about.personalInfo.location': 'Annecy / Lyon',
    'about.education.title': 'Education',
    'about.education.period': '2022 - 2025',
    'about.education.degree': 'Bachelor in Computer Science',
    'about.education.school': 'IUT de Lens',
    'about.education.description': 'Specialization in application development and implementation',
    'about.bio.title': 'My Journey',
    'about.bio.paragraph1': 'Currently in my 3rd year of Computer Science Bachelor, I specialize in full-stack development with a particular interest in modern web technologies and user experience.',
    'about.bio.paragraph2': 'My journey has allowed me to develop strong skills in front-end and back-end development, while cultivating a passion for creating intuitive and aesthetic user interfaces.',
    'about.bio.paragraph3': 'Outside of coding, I am interested in 3D art and design, which enriches my vision of development and allows me to bring a creative touch to my projects.',
    'footer.rights': 'All rights reserved by Anthony Marques Felix',
    'misc.cvLink': '/cvs/CV_Anthony_MARQUES_FELIX.pdf',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('portfolio-language') as Language | null;
      if (savedLanguage === 'fr' || savedLanguage === 'en') {
        return savedLanguage;
      }
    }
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
