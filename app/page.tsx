// app/page.tsx

export default function Home() {
  return (
    <main className="ml-5 min-h-screen bg-gray-50"> 
        
        {/* Section 1: Accueil (Hero) */}
        <section id="home" className="min-h-screen">
            {/* Contenu de ta section Hero (avec l'image de fond) */}
        </section>

        {/* Section 2: À Propos */}
        <section id="about" className="min-h-screen p-20">
            <h2 className="text-4xl">À Propos de moi</h2>
            {/* Contenu de la section About */}
        </section>

        {/* Section 3: CV */}
        <section id="resume" className="min-h-screen p-20">
            <h2 className="text-4xl">Mon CV</h2>
        </section>
        
        {/* ... et ainsi de suite pour Portfolio et Contact ... */}

    </main>
  );
}