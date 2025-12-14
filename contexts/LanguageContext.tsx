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
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.strengths': 'Atouts',
    'nav.hobbies': 'Loisirs',
    'nav.projects': 'Projets',
    'nav.jobs': 'Jobs',
    'nav.internships': 'Stages / Alternances',

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
    'projects.intro': 'Découvrez mes projets récents qui démontrent mes compétences en développement et ma passion pour la création d\'applications innovantes. Cliquez sur un projet pour accéder au Repository GitHub.',

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
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.strengths': 'Strengths',
    'nav.hobbies': 'Hobbies',
    'nav.projects': 'Projects',
    'nav.jobs': 'Jobs',
    'nav.internships': 'Internships / Apprenticeships',

    'navbar.letsTalk': 'Let\'s talk',
    'navbar.downloadCV': 'Download my CV',

    'hero.futureDeveloper': 'A Future Developer',
    'hero.alternant': 'Apprentice',
    'hero.description': '3rd year Computer Science student, passionate about full-stack development and UI/UX. I enjoy creating interactive experiences and building efficient applications.',
    'hero.buildingSkills': 'Building Skills',
    'hero.forFuture': 'For Future.',

    // About Page
    'about.title': 'About Me',
    'about.intro': 'Passionate about technology and development, I am constantly seeking new challenges and opportunities to learn and grow.',
    'about.personalInfo.title': 'Personal Information',
    'about.personalInfo.ageLabel': 'Age',
    'about.personalInfo.age': '20 years old',
    'about.personalInfo.locationLabel': 'Location',
    'about.personalInfo.location': 'Annecy / Lyon',
    'about.education.title': 'Education',
    'about.education1.period': '2023 - 2026',
    'about.education1.degree': 'Bachelor in Computer Science',
    'about.education1.school': 'University of Savoie Mont Blanc, IUT of Annecy',
    'about.education1.description': 'Track A: Application Development: design, development, validation',
    'about.education1.strength': 'Web and mobile application development, teamwork on a home automation project.',
    'about.education2.period': '2023',
    'about.education2.degree': 'Baccalaureate in Science and Technology of Industry and Sustainable Development (STI2D)',
    'about.education2.school': 'Louis Lachenal High School, Argonay',
    'about.education2.description': 'Information Systems and Digital Option (SIN), with Honors',
    'about.education2.strength': 'Teamwork on an end-of-year project, knowledge about sustainable development.',
    'about.bio.title': 'My Journey',
    'about.bio.paragraph1': 'Currently in my 3rd year of Computer Science Bachelor, I specialize in full-stack development with a particular interest in modern web technologies and user experience.',
    'about.bio.paragraph2': 'My journey has allowed me to develop strong skills in front-end and back-end development, while cultivating a passion for creating intuitive and aesthetic user interfaces.',
    'about.bio.paragraph3': 'Outside of coding, I am interested in drawing, which enriches my vision of development and allows me to bring a creative touch to my projects.',

    // Strengths
    'strengths.title': 'Strengths',
    'strengths.pageTitle': 'My Strengths',
    'strengths.intro': 'Check out my technical skills, my level in foreign languages, as well as my soft skills:',
    'strengths.tabs.digital': 'Technical Skills',
    'strengths.tabs.languages': 'Foreign Languages',
    'strengths.tabs.softSkills': 'Soft Skills',
    'strengths.digital.items': 'Front-end: React, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, CSS, WPF, WinForms. | Back-end: Node.js, Express.js, Python, Flask, C#. | Database: MongoDB, PostgreSQL, SQL Server. | Design: Figma, Canva.',
    'strengths.languages.items': 'English: Upper Intermediate B2 level (written and oral comprehension and expression). | Spanish: Elementary A1 level (basic written and oral comprehension and expression). | Portuguese: Elementary A1 level (basic written and oral comprehension and expression) | French: Native level.',
    'strengths.softSkills.items': 'Teamwork: ability to collaborate effectively in group projects. | Communication: ability to convey ideas clearly, both in writing and orally. | Adaptability: flexibility in the face of changes and new situations. | Time management: organization and prioritization of tasks to meet deadlines. | Problem solving: analytical approach to identify and resolve challenges. | Creativity: ability to propose innovative and original solutions.',

    // Skills
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
    'skills.levels.c1.level2.title': 'From requirements to a complete application',
    'skills.levels.c1.level3.title': 'Adapt applications across multiple platforms (embedded, web, mobile, IoT…)',
    'skills.levels.c1.level3.ac': 'AC31.01: Choose and implement appropriate architectures | AC31.02: Evolve an existing application | AC31.03: Integrate solutions into a production environment',

    // C2 Levels
    'skills.levels.c2.level1.title': 'Understand and build algorithms',
    'skills.levels.c2.level2.title': 'Select appropriate algorithms to solve a given problem',
    'skills.levels.c2.level3.title': 'Analyze and optimize applications',
    'skills.levels.c2.level3.ac': 'AC32.01: Anticipate the results of various metrics (execution time, memory usage, scalability...) | AC32.02: Profile, analyze and justify the behavior of existing code | AC32.03: Choose and use libraries and methods dedicated to the application domain (imaging, immersion, artificial intelligence, video games, parallelism, formal calculation...)',

    // C3 Levels
    'skills.levels.c3.level1.title': 'Install and configure a workstation',
    'skills.levels.c3.level2.title': 'Deploy services in a network architecture',

    // C4 Levels
    'skills.levels.c4.level1.title': 'Design and implement a database from client specifications',
    'skills.levels.c4.level2.title': 'Optimize a database, interact with an application and implement security',

    // C5 Levels
    'skills.levels.c5.level1.title': 'Identify business needs of clients and users',
    'skills.levels.c5.level2.title': 'Apply a project monitoring approach based on business needs of clients and users',

    // C6 Levels
    'skills.levels.c6.level1.title': 'Identify skills to work in a team',
    'skills.levels.c6.level2.title': 'Position your role and missions within an IT team',
    'skills.levels.c6.level3.title': 'Manage an IT team',
    'skills.levels.c6.level3.ac': 'AC36.01: Organize and share technological and informational watch | AC36.02: Identify challenges of digital innovation economy | AC36.03: Guide IT change management within an organization | AC36.04: Support IT project management',

    // Experiences
    'experiences.title': 'Experiences',

    // Projects
    'projects.title': 'Projects',
    'projects.pageTitle': 'My Projects',
    'projects.intro': 'Discover my recent projects that demonstrate my development skills and passion for creating innovative applications. Click on a project to access the GitHub Repository.',

    'projects.apiVinted.category': 'API',
    'projects.apiVinted.title': 'Vinted API',
    'projects.apiVinted.description': 'This is an academic project, carried out in a group of 5. It is an API developed in C# and ASP.NET Core that allows you to find clothing items and secondary accessories. It includes unit tests.',

    'projects.homeKit.category': 'Home Automation',
    'projects.homeKit.title': 'HomeKit',
    'projects.homeKit.description': 'Carried out in a group of 3, this project is still in development, but it is a simulation in a student studio connected to IoT sensors. The goal will be to set up a home automation system to control Z-Wave devices for the best working and concentration conditions. There will be an application developed in Kotlin to control Z-Wave devices. Also the integration of AI allowing voice recognition to facilitate input.',

    'projects.projetX.category': 'Web Application',
    'projects.projetX.title': 'Project X',
    'projects.projetX.description': 'Small web application developed by 4 people in one week, aiming to reproduce the X website (formerly Twitter). The main features are available, from login and registration to posting tweets, as well as the ability to follow users and like them.',

    'projects.IoTRaspberry.category': 'IoT',
    'projects.IoTRaspberry.title': 'IoT Raspberry',
    'projects.IoTRaspberry.description': 'Small IoT project developed in Python, aiming to make an impostor game with an AI used to detect abnormal temperature values among 3 interconnected raspberries. These are connected to an MQTT broker and transmit temperature data. Then, each raspberry sends a prompt to an AI so that it can determine if the temperature is abnormal, and votes for the player who has the most abnormal value. Temperatures are obtained by a Weather API.',

    // Jobs
    'jobs.title': 'Jobs',
    'jobs.pageTitle': 'My Jobs',

    'job.auchan.title': 'Summer Job',
    'job.auchan.company': 'Auchan',
    'job.auchan.period': 'July 2022 - September 2022',
    'job.auchan.location': 'Epagny, Haute-Savoie, France',
    'job.auchan.description': 'Summer job at Auchan Drive, as an order picker.',
    'job.auchan.tasks': 'Order preparation and customer relations.',

    'job.carrefour.title': 'Student Job',
    'job.carrefour.company': 'Carrefour',
    'job.carrefour.period': 'September 2024 - April 2025',
    'job.carrefour.location': 'Annecy, Haute-Savoie, France',
    'job.carrefour.description': 'Student job at Carrefour Drive, as an order picker.',
    'job.carrefour.tasks': 'Order preparation, product reception, stock management and customer relations.',

    // Internships
    'internships.title': 'Internships / Apprenticeships',
    'internships.pageTitle': 'My Internships / Apprenticeships',

    'internship.title': 'Software Developer Intern',
    'internship.company': 'Timet Savoie',
    'internship.period': 'April 2025 - June 2025',
    'internship.location': 'Ugine, Savoie, France',
    'internship.description': 'Software development internship in C# with WinForms to develop a software for tracking titanium production in the Metallurgical Control Workshop, used to test titanium compliance for the customer. (Still ongoing)',

    'apprentice.title': 'Software Developer Apprentice',
    'apprentice.company': 'Timet Savoie',
    'apprentice.period': 'August 2025 - Present',
    'apprentice.location': 'Ugine, Savoie, France',
    'apprentice.description': 'Software development apprenticeship in VB .Net with WinForms, taking over an existing software for an upgrade and also various improvements concerning a software for tracking titanium production in the different production workshops. (Still ongoing)',

    // Hobbies
    'hobbies.title': 'Hobbies',
    'hobbies.pageTitle': 'My Hobbies',
    'hobbies.intro': 'Outside of development, I cultivate various passions that enrich my creativity and personal balance.',
    'hobbies.scooter.title': 'Freestyle Scooter',
    'hobbies.scooter.description': 'I have been practicing freestyle scooter since I was 12 years old.',
    'hobbies.scooter.expandedDescription': 'I have been practicing freestyle scooter since I was 12 years old, allowing me to strengthen my balance and coordination, as well as my determination and perseverance. A video of me in action below.',
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

    // Footer
    'footer.rights': 'All rights reserved by Anthony Marques Felix',

    // Misc
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
