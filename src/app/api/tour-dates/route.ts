import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

interface TourDate {
  date: string;
  venue: string;
  city: string;
  ticketLink?: string;
}

export async function GET() {
  try {
    const response = await fetch('https://www.spelplan.com/artist/p/c.aspx?id=9abd5e045cc54fa', {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error('Failed to fetch from spelplan.com:', response.status, response.statusText);
      throw new Error('Failed to fetch from spelplan.com');
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const tourDates: TourDate[] = [];
    let currentMonth = '';
    let currentYear = '';
    
    $('table tr').each((i: number, element: any) => {
      const row = $(element);
      
      // Check if this is a month header row
      const monthHeader = row.find('td[colspan="3"]').text().trim();
      if (monthHeader) {
        const headerParts = monthHeader.replace(/\s+/g, ' ').split(' ');
        currentMonth = headerParts[0];
        // Extract year if available, usually in format like "Mars 2025"
        if (headerParts.length > 1) {
          currentYear = headerParts[headerParts.length - 1];
        }
        return;
      }
      
      // Skip the "Datum/Plats" header rows
      if (row.find('td[style*="font-weight: bold"]').length > 0) {
        return;
      }
      
      const dateTd = row.find('td').first();
      const venueTd = row.find('td').eq(1);
      
      if (dateTd.length && venueTd.length) {
        const dateText = dateTd.text().trim();
        const venueText = venueTd.text().trim();
        
        if (dateText && venueText) {
          // Split venue into city and venue if possible
          const venueParts = venueText.split(',').map(part => part.trim());
          const city = venueParts[0] || '';
          const venue = venueParts[1] || venueText;
          
          // Keep the original date format with weekday and include year
          const dateNumber = dateText.replace(/[^\d-]/g, '');
          const weekday = dateText.split(' ')[0];
          const formattedDate = `${weekday} ${dateNumber} ${currentMonth} ${currentYear}`;
          
          tourDates.push({
            date: formattedDate,
            venue,
            city,
            ticketLink: undefined
          });
        }
      }
    });

    // Set cache headers to ensure fresh data (max 15 minutes cache)
    return NextResponse.json(
      tourDates,
      {
        headers: {
          'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=3600'
        }
      }
    );
  } catch (error) {
    console.error('Error fetching tour dates:', error);
    return NextResponse.json({ error: 'Failed to fetch tour dates' }, { status: 500 });
  }
} 