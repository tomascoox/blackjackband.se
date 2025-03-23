interface ConcertProps {
  date: string;
  venue: string;
  city: string;
}

const Concert = ({ date, venue, city }: ConcertProps) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-lg font-medium">{date}</div>
        <div className="text-xl font-bold">{venue}</div>
        <div className="text-lg">{city}</div>
      </div>
    </div>
  );
};

const Turne = () => {
  const concerts = [
    { date: '2023-11-10', venue: 'Konserthuset', city: 'Stockholm' },
    { date: '2023-11-12', venue: 'Liseberg', city: 'Göteborg' },
    { date: '2023-11-15', venue: 'Kulturhuset', city: 'Malmö' },
    { date: '2023-11-18', venue: 'Folkparken', city: 'Umeå' },
    { date: '2023-12-01', venue: 'Stadsteatern', city: 'Uppsala' },
    { date: '2023-12-05', venue: 'Folkets Hus', city: 'Örebro' },
    { date: '2023-12-10', venue: 'Konserthallen', city: 'Växjö' },
  ];

  return (
    <section id="turne" className="section-container bg-beige">
      <h2 className="text-4xl font-bold mb-8 text-center">Turné</h2>
      <div className="max-w-4xl mx-auto">
        {concerts.map((concert, index) => (
          <Concert key={index} {...concert} />
        ))}
      </div>
    </section>
  );
};

export default Turne; 