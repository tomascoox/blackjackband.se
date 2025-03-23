import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Nyheter from '../components/Nyheter';
import Musik from '../components/Musik';
import Turne from '../components/Turne';
import Kontakt from '../components/Kontakt';
import Press from '../components/Press';
import Nyhetsarkiv from '../components/Nyhetsarkiv';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Nyheter />
      <Musik />
      <Turne />
      <Kontakt />
      <Press />
      <Nyhetsarkiv />
      <Footer />
    </main>
  );
}
