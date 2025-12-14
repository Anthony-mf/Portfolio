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
    // Hero
    'hero.futureDeveloper': 'Un Futur Développeur',
    'hero.alternant': 'Alternant',
    'hero.description': 'Étudiant en 3ème année de BUT Informatique, passionné par le développement full-stack, et l\'UI/UX. J\'aime créer des expériences interactives et construire des applications efficaces.',

    // About Page
    'about.title': 'À Propos De Moi',
    'about.intro': 'Passionné par la technologie et le développement, je suis constamment à la recherche de nouveaux défis et d\'opportunités pour apprendre et grandir. ',
    'about.personalInfo.title': 'Informations Personnelles',
    'about.personalInfo.ageLabel': 'Âge',
    'about.personalInfo.age': '20 ans',
    'about.personalInfo.locationLabel': 'Localisation',
    'about.personalInfo.location': 'Annecy / Lyon',
    'about.education.title': 'Formation',
    'about.education1.period': '2023 - 2026',
    'about.education1.degree': 'BUT Informatique',
    'about.education1.school': 'Université de Savoie Mont Blanc, IUT d\'Annecy',
    'about.education1.description': 'Parcours A : Réalisation d’applications : conception, développement, validation',
    'about.education1.strength': 'Développement d\'applications web et mobiles, travail d\'équipe sur un projet de domotique.',
    'about.education2.period': '2023',
    'about.education2.degree': 'Baccalauréat Sciences et Technologies de l\'Industrie et du Développement Durable ( STI2D )',
    'about.education2.school': 'Lycée Louis Lachenal, Argonay ',
    'about.education2.description': 'Option Systèmes d\'Information et Numérique ( SIN ), Mention Bien',
    'about.education2.strength': 'Travail d\'équipe sur un projet en fin d\'année, connaissances cncernant le développement durable.',
    'about.bio.title': 'Mon Parcours',
    'about.bio.paragraph1': 'Actuellement en 3ème année de BUT Informatique, je me spécialise dans le développement full-stack avec un intérêt particulier pour les technologies web modernes et l\'expérience utilisateur.',
    'about.bio.paragraph2': 'Mon parcours m\'a permis de développer des compétences solides en développement front-end et back-end, tout en cultivant une passion pour la création d\'interfaces utilisateur intuitives et esthétiques.',
    'about.bio.paragraph3': 'En dehors du code, je m\'intéresse au dessin, ce qui enrichit ma vision du développement et me permet d\'apporter une touche créative à mes projets.',

    // Strengths
    'strengths.title': 'Atouts',
    'strengths.pageTitle': 'Mes Atouts',
    'strengths.intro': 'Consultez ci-dessous mes atouts techniques, mon niveau en langues étrangères, ainsi que mes soft-skills :',
    'strengths.tabs.digital': 'Atouts techniques',
    'strengths.tabs.languages': 'Langues étrangères',
    'strengths.tabs.softSkills': 'Softs skills',
    'strengths.digital.items': 'Front-end : React, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, CSS, WPF, WinForms. | Back-end : Node.js, Express.js, Python, Flask, C#. | Base de données : MongoDB, PostgreSQL, SQL Server. | Design : Figma, Canva.',
    'strengths.languages.items': 'Anglais : niveau Intermédiaire supérieur B2 ( compréhension et expression écrite et orale ). | Espagnol : niveau Élémentaire A1 ( compréhension et expression écrite et orale de base ). | Portugais : niveau Élémentaire A1 ( compréhension et expression écrite et orale de base)| Français : niveau Natif.',
    'strengths.softSkills.items': 'Travail en équipe : capacité à collaborer efficacement dans des projets de groupe. | Communication : aptitude à transmettre des idées clairement, à l\'écrit comme à l\'oral. | Adaptabilité : flexibilité face aux changements et aux nouvelles situations. | Gestion du temps : organisation et priorisation des tâches pour respecter les délais. | Résolution de problèmes : approche analytique pour identifier et résoudre les défis. | Créativité : capacité à proposer des solutions innovantes et originales.',

    // Skills
    'skills.title': 'Compétences',
    'skills.pageTitle': 'Mes Compétences',
    'skills.intro': 'Etant en 3ème année de BUT Informatique, parcours Réalisation d\'applications : conception, développement, validation, je prépare uniquement les 2 premières compétences ainsi que la dernière compétence du programme national.',
    'skills.c1.title': 'Réaliser',
    'skills.c1.description': 'Développer, c\'est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un client.',
    'skills.c2.title': 'Optimiser',
    'skills.c2.description': 'Proposer des applications informatiques optimisées en fonction de critères spécifiques: temps d\'exécution, précision, consommation de ressources.',
    'skills.c3.title': 'Administrer',
    'skills.c3.description': 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d\'une organisation.',
    'skills.c4.title': 'Gérer',
    'skills.c4.description': 'Considérer, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l\'entreprise.',
    'skills.c5.title': 'Conduire',
    'skills.c5.description': 'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
    'skills.c6.title': 'Collaborer',
    'skills.c6.description': 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',

    // C1 Levels
    'skills.levels.c1.level1.title': 'Développer des applications informatiques simples',
    'skills.levels.c1.level2.title': 'Partir des exigences et aller jusqu\'à une application complète',
    'skills.levels.c1.level3.title': 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
    'skills.levels.c1.level3.ac': 'AC31.01 : Choisir et implémenter les architectures adaptées | AC31.02 : Faire évoluer une application existante | AC31.03 : Intégrer des solutions dans un environnement de production',

    // C2 Levels
    'skills.levels.c2.level1.title': 'Appréhender et construire des algorithmes',
    'skills.levels.c2.level2.title': 'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
    'skills.levels.c2.level3.title': 'Analyser et optimiser des applications',
    'skills.levels.c2.level3.ac': 'AC32.01 : Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge...) | AC32.02 : Profiler, analyser et justifier le comportement d\'un code existant | AC32.03 : Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d\'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)',

    // C3 Levels
    'skills.levels.c3.level1.title': 'Installer et configurer un poste de travail',
    'skills.levels.c3.level2.title': 'Déployer des services dans une architecture réseau',

    // C4 Levels
    'skills.levels.c4.level1.title': 'Concevoir et mettre en place une base de données à partir d\'un cahier des charges client',
    'skills.levels.c4.level2.title': 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',

    // C5 Levels
    'skills.levels.c5.level1.title': 'Identifier les besoins métiers des clients et des utilisateurs',
    'skills.levels.c5.level2.title': 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',

    // C6 Levels
    'skills.levels.c6.level1.title': 'Identifier ses aptitudes pour travailler dans une équipe',
    'skills.levels.c6.level2.title': 'Situer son rôle et ses missions au sein d\'une équipe informatique',
    'skills.levels.c6.level3.title': 'Manager une équipe informatique',
    'skills.levels.c6.level3.ac': 'AC36.01 : Organiser et partager une veille technologique et informationnelle | AC36.02 : Identifier les enjeux de l\'économie de l\'innovation numérique | AC36.03 : Guider la conduite du changement informatique au sein d\'une organisation | AC36.04 : Accompagner le management de projet informatique',


    // Experiences
    'experiences.title': 'Experiences',

    // Projects
    'projects.title': 'Projets',
    'projects.pageTitle': 'Mes Projets',
    'projects.intro': 'Découvrez mes projets récents qui démontrent mes compétences en développement et ma passion pour la création d\'applications innovantes.',

    'projects.apiVinted.category': 'API',
    'projects.apiVinted.title': 'API Vinted',
    'projects.apiVinted.description': 'C\'est un projet académique, réalisé en groupe de 5. Il s\'agit d\'une API développée en C# et ASP.NET Core qui permet de trouver des articles de vêtements et d\'accessoires secondaires. Elle inclut des tests unitaires.',
    'projects.apiVinted.skills': 'AC31.01 : Choisir et implémenter les architectures adaptées | AC32.01 : Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge...) | AC36.04 : Accompagner le management de projet informatique',

    'projects.homeKit.category': 'Domotique',
    'projects.homeKit.title': 'HomeKit',
    'projects.homeKit.description': 'Réalisé en groupe de 3, ce projet est encore en développement, mais il s\'agit d\'une mise en situation dans un studio d\'étudiant connecté à des capteurs IoT. Le but sera de mettre en place un système de domotique permettant de contrôler les appareils Z-Wave pour les meilleures conditions de travail et de concentration. Il y aura une application développée en Kotlin pour pouvoir contrôler les appareils Z-Wave. Egalement l\'intégration d\'IA permettant la reconnsaissance vocale pour faciliter la saisie',
    'projects.homeKit.skills': 'AC31.01 : Choisir et implémenter les architectures adaptées | AC32.01 : Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge...) | AC36.04 : Accompagner le management de projet informatique',

    'projects.projetX.category': 'Application Web',
    'projects.projetX.title': 'Projet X',
    'projects.projetX.description': 'Petit application web développée à 4 en une semaine, visant à reproduire le site web de X ( anciennement Twitter ). Les fonctionnalités principales sont disponibles, de la connexion et l\'inscription au post de tweet, ainsi que la possibilité de suivre des utilisateurs et de les liker.',
    'projects.projetX.skills': 'AC31.01 : Choisir et implémenter les architectures adaptées | AC32.01 : Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge...) | AC36.04 : Accompagner le management de projet informatique',

    'projects.IoTRaspberry.category': 'IoT',
    'projects.IoTRaspberry.title': 'IoT Raspberry',
    'projects.IoTRaspberry.description': 'Petit projet IoT développé en Python, visant à faire un jeu d\'imposteur avec une IA servant à détécter des valeurs de températures anormales parmi 3 raspberry interconnectés. Ces derniers sont connectés à un broker MQTT et transmettent des données de température. Ensuite, chaque raspberry envoie un prompt à une IA pour qu\'elle puisse déterminer si la température est anormale, et vote pour le joueur qui a la valeur la plus anormale. Les températures sont obtenues par une API Météo.',
    'projects.IoTRaspberry.skills': 'AC31.01 : Choisir et implémenter les architectures adaptées | AC32.01 : Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge...) | AC36.04 : Accompagner le management de projet informatique',

    // Jobs
    "jobs.title": "Jobs",
    'jobs.pageTitle': 'Mes Jobs',

    'job.auchan.title': 'Job d\'été',
    'job.auchan.company': 'Auchan',
    'job.auchan.period': 'Juillet 2022 - Septembre 2022',
    'job.auchan.location': 'Epagny, Haute-Savoie, France',
    'job.auchan.description': 'Job d\'été au sein d\'Auchan Drive, en tant que préparateur de commande.',
    'job.auchan.tasks': 'Préparation des commandes et relations clients.',

    'job.carrefour.title': 'Job étudiant',
    'job.carrefour.company': 'Carrefour',
    'job.carrefour.period': 'Septembre 2024 - Avril 2025',
    'job.carrefour.location': 'Annecy, Haute-Savoie, France',
    'job.carrefour.description': 'Job étudiant au sein de Carrefour Drive, en tant que préparateur de commande.',
    'job.carrefour.tasks': 'Préparation des commandes, réception de produits, gestion de stock et relations clients.',

    // Internships
    "internships.title": "Stages / Alternances",
    'internships.pageTitle': 'Mes Stages / Alternances',

    'internship.title': 'Stagiaire Développeur Logiciel',
    'internship.company': 'Timet Savoie',
    'internship.period': 'Avril 2025 - Juin 2025',
    'internship.location': 'Ugine, Savoie, France',
    'internship.description': 'Stage de développement logiciel en C# avec WinForms pour développer un logiciel de suivi de la production de titane dans l\'Atelier de Contrôle Métallurgique, servant à tester la conformité du titane pour le client. ( Toujours en cours )',

    'apprentice.title': 'Alternant Développeur Logiciel',
    'apprentice.company': 'Timet Savoie',
    'apprentice.period': 'Août 2025 - Présent',
    'apprentice.location': 'Ugine, Savoie,France',
    'apprentice.description': 'Alternance de développement logiciel en VB .Net avec WinForms, reprise d\'un logiciel existant pour une remise à niveau et également différentes améliorations concernant un logiciel de suivi de la production de titane dans les différents ateliers de production. ( Toujours en cours )',

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

    // Strengths
    'strengths.title': 'Strengths',
    'strengths.pageTitle': 'My Strengths',
    'strengths.intro': 'Check out my technical skills, my level in foreign languages, as well as my soft skills:',
    'strengths.tabs.digital': 'Digital Tools',
    'strengths.tabs.languages': 'Foreign Languages',
    'strengths.tabs.softSkills': 'Soft Skills',
    'strengths.digital.items': 'Microsoft Office Suite (Word, Excel, PowerPoint): advanced level (creating dynamic pivot tables in Excel, interactive slideshows). | Canva: proficiency in creating visuals and communication materials. | WordPress: solid foundations (creating and customizing web pages). | Google Workspace: collaborative use (Docs, Sheets, Drive, etc.). | Sphinx iQ3: solid foundations (questionnaire creation, response entry, data processing with flat and cross tabulations)',
    'strengths.languages.items': 'English: B2 level (written and oral comprehension and expression). | Spanish: A2 level (basic written and oral comprehension and expression).',
    'strengths.softSkills.items': 'Teamwork: ability to collaborate effectively in group projects. | Communication: ability to convey ideas clearly, both in writing and orally. | Adaptability: flexibility in the face of changes and new situations. | Time management: organization and prioritization of tasks to meet deadlines. | Problem solving: analytical approach to identify and resolve challenges. | Creativity: ability to propose innovative and original solutions.',

    'skills.title': 'Skills',
    'skills.pageTitle': 'My Skills',
    'skills.intro': 'Being in 3rd year of Computer Science Bachelor, Application Development track: design, development, validation, I am preparing only the first 2 competencies and the last competency of the national program.',
    'skills.c1.title': 'Develop',
    'skills.c1.description': 'Develop, that is to say design, code, test and integrate a computer solution for a client.',
    'skills.c2.title': 'Optimize',
    'skills.c2.description': 'Propose optimized computer applications according to specific criteria: execution time, precision, resource consumption.',
    'skills.c3.title': 'Administrate',
    'skills.c3.description': 'Install, configure, make available, maintain operational infrastructures, services and networks and optimize an organization\'s IT system.',
    'skills.c4.title': 'Manage',
    'skills.c4.description': 'Consider, manage, administer and exploit company data and make all information available for proper company management.',
    'skills.c5.title': 'Lead',
    'skills.c5.description': 'Satisfy user needs with regard to the customer\'s value chain, organize and manage an IT project with classic or agile methods.',
    'skills.c6.title': 'Collaborate',
    'skills.c6.description': 'Acquire, develop and exploit the skills necessary to work effectively in an IT team.',

    // C1 Levels
    'skills.levels.c1.level1.title': 'Develop simple computer applications',
    'skills.levels.c1.level1.ac': 'AC11.01 | Implement simple designs | AC11.02 | Develop simple designs | AC11.03 | Perform tests and evaluate their results against specifications | AC11.04 | Develop user interfaces',
    'skills.levels.c1.level2.title': 'From requirements to a complete application',
    'skills.levels.c1.level2.ac': 'AC21.01 | Develop and implement functional and non-functional specifications from requirements | AC21.02 | Apply accessibility and ergonomics principles | AC21.03 | Adopt good design and programming practices | AC21.04 | Verify and validate application quality through testing',
    'skills.levels.c1.level3.title': 'Adapt applications across multiple platforms (embedded, web, mobile, IoT…)',
    'skills.levels.c1.level3.ac': 'AC31.01 | Choose and implement appropriate architectures | AC31.02 | Evolve an existing application | AC31.03 | Integrate solutions into a production environment',

    // C2 Levels
    'skills.levels.c2.level1.title': 'Understand and build algorithms',
    'skills.levels.c2.level1.ac': 'AC12.01: Analyze a problem methodically (breaking down into simple algorithmic elements, data structure...) | AC12.02: Compare algorithms for classic problems (simple sorts, search...) | AC12.03: Formalize and implement mathematical tools for computer science',
    'skills.levels.c2.level2.title': 'Select appropriate algorithms to solve a given problem',
    'skills.levels.c2.level2.ac': 'AC22.01: Choose complex data structures adapted to the problem | AC22.02: Use appropriate algorithmic techniques for complex problems (e.g. operational research, tree methods, global optimization, artificial intelligence...) | AC22.03: Understand the challenges and means of securing data and code | AC22.04: Evaluate the environmental and societal impact of proposed solutions',
    'skills.levels.c2.level3.title': 'Analyze and optimize applications',
    'skills.levels.c2.level3.ac': 'AC32.01: Anticipate the results of various metrics (execution time, memory usage, scalability...) | AC32.02: Profile, analyze and justify the behavior of existing code | AC32.03: Choose and use libraries and methods dedicated to the application domain (imaging, immersion, artificial intelligence, video games, parallelism, formal calculation...)',

    // C3 Levels
    'skills.levels.c3.level1.title': 'Install and configure a workstation',
    'skills.levels.c3.level1.ac': 'AC13.01: Identify different components (hardware and software) of a digital system | AC13.02: Use basic functionalities of a multitasking / multiuser system | AC13.03: Install and configure an operating system and development tools | AC13.04: Configure a workstation in a corporate network',
    'skills.levels.c3.level2.title': 'Deploy services in a network architecture',
    'skills.levels.c3.level2.ac': 'AC23.01: Design and develop communicating applications | AC23.02: Use virtualized servers and network services | AC23.03: Secure services and data of a system',

    // C4 Levels
    'skills.levels.c4.level1.title': 'Design and implement a database from client specifications',
    'skills.levels.c4.level1.ac': 'AC14.01: Update and query a relational database (in direct queries or through an application) | AC14.02: Visualize data | AC14.03: Design a relational database from specifications',
    'skills.levels.c4.level2.title': 'Optimize a database, interact with an application and implement security',
    'skills.levels.c4.level2.ac': 'AC24.01: Optimize company data models | AC24.02: Ensure data security (integrity and confidentiality) | AC24.03: Organize data restitution through programming and visualization | AC24.04: Manipulate heterogeneous data',

    // C5 Levels
    'skills.levels.c5.level1.title': 'Identify business needs of clients and users',
    'skills.levels.c5.level1.ac': 'AC15.01: Understand client and user needs | AC15.02: Set up project management tools | AC15.03: Identify actors and different phases of a development cycle',
    'skills.levels.c5.level2.title': 'Apply a project monitoring approach based on business needs of clients and users',
    'skills.levels.c5.level2.ac': 'AC25.01: Identify processes present in an organization to improve information systems | AC25.02: Formalize client and user needs | AC25.03: Identify feasibility criteria for an IT project | AC25.04: Define and implement a project monitoring approach',

    // C6 Levels
    'skills.levels.c6.level1.title': 'Identify skills to work in a team',
    'skills.levels.c6.level1.ac': 'AC16.01: Understand the digital ecosystem | AC16.02: Discover required skills according to different IT sectors | AC16.03: Identify statuses, functions and roles of each member of a multidisciplinary team | AC16.04: Acquire interpersonal skills to work in a team',
    'skills.levels.c6.level2.title': 'Position your role and missions within an IT team',
    'skills.levels.c6.level2.ac': 'AC26.01: Understand the diversity, structure and dimension of IT in an organization (ESN, DSI,...) | AC26.02: Apply an approach to integrate an IT team within an organization | AC26.03: Mobilize interpersonal skills to work in an IT team | AC26.04: Report on professional activity',
    'skills.levels.c6.level3.title': 'Manage an IT team',
    'skills.levels.c6.level3.ac': 'AC36.01: Organize and share technological and informational watch | AC36.02: Identify challenges of digital innovation economy | AC36.03: Guide IT change management within an organization | AC36.04: Support IT project management',

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
    'hobbies.scooter.expandedDescription': 'I have been practicing scooter freestyle since I was 12 years old, allowing me to strengthen my balance and coordination, as well as my determination and perseverance. A video of me in action below.',
    'hobbies.gaming.title': 'Video Games',
    'hobbies.gaming.description': 'Passionate about video games, especially Open-Worlds.',
    'hobbies.gaming.expandedDescription': 'Passionate about video games, especially Open-Worlds, this has allowed me to discover new worlds and new stories, fueling my curiosity and imagination. For example, the game "Minecraft" shown below is a good example.',
    'hobbies.music.title': 'Music',
    'hobbies.music.description': 'Listening and discovering new music genres.',
    'hobbies.music.expandedDescription': 'Listening and discovering new music genres, from Hip Hop to Soul and many others. A carousel of my favorite songs below.',
    'hobbies.drawing.title': 'Drawing',
    'hobbies.drawing.description': 'Drawing allows me to express myself freely.',
    'hobbies.drawing.expandedDescription': 'Drawing allows me to express myself freely, with meticulousness and precision. Some examples below with my favorite drawings.',
    'hobbies.audiovisual.title': 'Audiovisual',
    'hobbies.audiovisual.description': 'The world of audiovisual.',
    'hobbies.audiovisual.expandedDescription': 'The world of audiovisual is fascinating, with stories and characters that inspire me. I watch a lot of series and movies, as well as anime.',
    'hobbies.reading.title': 'Reading',
    'hobbies.reading.description': 'Reading books.',
    'hobbies.reading.expandedDescription': 'Reading horror and science-fiction books, as shown below with the "Goosebumps" books.',

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
