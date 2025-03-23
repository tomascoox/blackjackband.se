'use client';

const Turne = () => {
  return (
    <section id="turne" className="w-full bg-beige">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl">Turné</h2>
        <div className="mt-8">
          <iframe 
            id="cal" 
            src="https://www.spelplan.com/artist/p/c.aspx?id=9abd5e045cc54fa" 
            width="100%" 
            height="800"
            title="Turnéplan"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Turne; 