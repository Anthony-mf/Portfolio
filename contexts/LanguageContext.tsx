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
    'skills.intro': 'Voici un aperçu des technologies et outils que je maîtrise, acquis au cours de ma formation et de mes projets personnels.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Base de données',

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
    'hobbies.art3d.title': 'Art 3D',
    'hobbies.art3d.description': 'Création de modèles 3D et d\'environnements immersifs avec Blender et autres outils de modélisation.',
    'hobbies.gaming.title': 'Jeux Vidéo',
    'hobbies.gaming.description': 'Passionné par les jeux vidéo, notamment les RPG et les jeux de stratégie qui stimulent la réflexion.',
    'hobbies.music.title': 'Musique',
    'hobbies.music.description': 'Écoute et découverte de nouveaux genres musicaux, de l\'électronique au rock progressif.',
    'hobbies.photography.title': 'Photographie',
    'hobbies.photography.description': 'Capture de moments et de paysages, exploration de la composition et de la lumière.',
    'hobbies.fitness.title': 'Sport',
    'hobbies.fitness.description': 'Pratique régulière d\'activités sportives pour maintenir un équilibre corps-esprit.',
    'hobbies.reading.title': 'Lecture',
    'hobbies.reading.description': 'Lecture de livres techniques, science-fiction et développement personnel.',

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
    'about.intro': 'Passionné par la technologie et le développement, je suis constamment à la recherche de nouveaux défis et d\'opportunités pour apprendre et grandir.',
    'about.personalInfo.title': 'Informations Personnelles',
    'about.personalInfo.ageLabel': 'Âge',
    'about.personalInfo.age': '20 ans',
    'about.personalInfo.locationLabel': 'Localisation',
    'about.personalInfo.location': 'France',
    'about.personalInfo.interestsLabel': 'Centres d\'intérêt',
    'about.personalInfo.interests': 'Développement, UI/UX, Art 3D',
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
  },
  en: {
    // Navbar
    'navbar.letsTalk': 'Let\'s talk',
    'navbar.downloadCV': 'Download my CV',

    // Hero
    'hero.futureDeveloper': 'A Future Developer',
    'hero.alternant': 'Apprentice',
    'hero.description': '3rd year Computer Science student, passionate about full-stack development and UI/UX. I enjoy creating interactive experiences and building efficient applications.',
    'hero.buildingSkills': 'Building Skills',
    'hero.forFuture': 'For Future.',

    // Skills
    'skills.title': 'Skills',
    'skills.pageTitle': 'My Skills',
    'skills.intro': 'Here\'s an overview of the technologies and tools I master, acquired through my education and personal projects.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',

    // Projects
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

    // Hobbies
    'hobbies.title': 'Hobbies',
    'hobbies.pageTitle': 'My Hobbies',
    'hobbies.intro': 'Outside of development, I cultivate various passions that enrich my creativity and personal balance.',
    'hobbies.art3d.title': '3D Art',
    'hobbies.art3d.description': 'Creating 3D models and immersive environments with Blender and other modeling tools.',
    'hobbies.gaming.title': 'Video Games',
    'hobbies.gaming.description': 'Passionate about video games, especially RPGs and strategy games that stimulate thinking.',
    'hobbies.music.title': 'Music',
    'hobbies.music.description': 'Listening and discovering new music genres, from electronic to progressive rock.',
    'hobbies.photography.title': 'Photography',
    'hobbies.photography.description': 'Capturing moments and landscapes, exploring composition and light.',
    'hobbies.fitness.title': 'Fitness',
    'hobbies.fitness.description': 'Regular practice of sports activities to maintain body-mind balance.',
    'hobbies.reading.title': 'Reading',
    'hobbies.reading.description': 'Reading technical books, science fiction and personal development.',

    // Experiences
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

    // About Page
    'about.title': 'About Me',
    'about.intro': 'Passionate about technology and development, I am constantly seeking new challenges and opportunities to learn and grow.',
    'about.personalInfo.title': 'Personal Information',
    'about.personalInfo.ageLabel': 'Age',
    'about.personalInfo.age': '20 years old',
    'about.personalInfo.locationLabel': 'Location',
    'about.personalInfo.location': 'France',
    'about.personalInfo.interestsLabel': 'Interests',
    'about.personalInfo.interests': 'Development, UI/UX, 3D Art',
    'about.education.title': 'Education',
    'about.education.period': '2022 - 2025',
    'about.education.degree': 'Bachelor in Computer Science',
    'about.education.school': 'IUT de Lens',
    'about.education.description': 'Specialization in application development and implementation',
    'about.bio.title': 'My Journey',
    'about.bio.paragraph1': 'Currently in my 3rd year of Computer Science Bachelor, I specialize in full-stack development with a particular interest in modern web technologies and user experience.',
    'about.bio.paragraph2': 'My journey has allowed me to develop strong skills in front-end and back-end development, while cultivating a passion for creating intuitive and aesthetic user interfaces.',
    'about.bio.paragraph3': 'Outside of coding, I am interested in 3D art and design, which enriches my vision of development and allows me to bring a creative touch to my projects.',

    // Footer
    'footer.rights': 'All rights reserved by Anthony Marques Felix',
  },
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

