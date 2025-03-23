const Kontakt = () => {
  return (
    <section id="kontakt" className="w-full bg-neutral-100">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl">Kontakt</h2>
        <div className="mt-8 text-center">
          <p className="font-bold">Mats Tigerström (Nöjeskallan)</p>
          <p>Seglarevägen 15</p>
          <p>352 55 Växjö</p>
          <p className="mt-4">Tel: 0470 - 72 87 00</p>
          <p>Mob: 070 - 66 70 970</p>
          <p className="mt-4">Email: <a href="mailto:mats@nojeskallan.se" className="text-black underline">mats@nojeskallan.se</a></p>
        </div>
      </div>
    </section>
  );
};

export default Kontakt; 