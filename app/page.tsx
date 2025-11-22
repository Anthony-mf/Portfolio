export default function Home() {
  return (
    <main className="container mx-auto p-8 pt-16">
      
      <section className="text-center py-20 bg-white rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Salut, je suis Anthony MARQUES FELIX!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
        </p>
        
        <a 
          href="/projets"
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Découvrir mes Projets
        </a>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Quelques Chiffres Clés
        </h2>
      </section>

    </main>
  );
}