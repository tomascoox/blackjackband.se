'use client';

import { useState, useEffect } from 'react';

interface TourDate {
  date: string;
  venue: string;
  city: string;
  ticketLink?: string;
}

const Turne = () => {
  const [tourDates, setTourDates] = useState<TourDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTourDates = async () => {
      try {
        const response = await fetch('/api/tour-dates');
        if (!response.ok) throw new Error('Failed to fetch tour dates');
        const data = await response.json();
        setTourDates(data);
      } catch (err) {
        setError('Could not load tour dates');
        console.error('Error fetching tour dates:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTourDates();
  }, []);

  // Group dates by month and year
  const groupedDates = tourDates.reduce<Record<string, TourDate[]>>((acc, date) => {
    // Format: "sön 2 Mars 2025" - extract "Mars 2025"
    const dateParts = date.date.split(' ');
    const monthYear = `${dateParts[2]} ${dateParts[3]}`;
    
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(date);
    return acc;
  }, {});

  return (
    <section id="turne" className="w-full bg-beige">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl">Turné</h2>
        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-4">{error}</div>
          ) : tourDates.length === 0 ? (
            <p className="text-center text-xl py-4">Inga spelningar planerade för tillfället.</p>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedDates).map(([monthYear, dates]) => (
                <div key={monthYear} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-black text-white px-4 py-2">
                    <h3 className="text-lg font-semibold">{monthYear}</h3>
                  </div>
                  <div>
                    <table className="w-full">
                      <tbody>
                        {dates.map((date, index) => (
                          <tr 
                            key={index}
                            className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <td className="px-4 py-3 w-24 font-medium">
                              {date.date.split(' ').slice(0, 2).join(' ')}
                            </td>
                            <td className="px-4 py-3">
                              <div className="hidden sm:block font-medium">
                                {date.city} {date.venue !== date.city && `- ${date.venue}`}
                              </div>
                              <div className="sm:hidden">
                                <div className="font-medium">
                                  {date.city}
                                </div>
                                {date.venue !== date.city && (
                                  <div className="text-sm text-gray-600">
                                    - {date.venue}
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Turne; 