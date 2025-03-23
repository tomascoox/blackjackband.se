import Image from 'next/image';

const Nyhetsarkiv = () => {
  return (
    <section id="nyhetsarkiv" className="w-full bg-white">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl">Nyhetsarkiv</h2>
        
        <div className="mt-8">
          <p className="mb-4">
            Black Jack behöver nog inte någon längre presentation utan tillhör ett av Sveriges största och populäraste dansband. Mycket tack vare mastodont hiten <strong>&quot;Inatt Inatt-Inget stoppar oss nu&quot;</strong> som är den dansbandslåt som streamat i särklass mest på Spotify.
          </p>
          
          <p className="mb-4">
            Bandet startades 1990-91 i samband med Colin Nutleys film &quot;Black Jack&quot;. Det var just med låten &quot;Inget kan stoppa oss nu&quot; även kallad &quot;Inatt Inatt&quot; som bandet fick sitt genombrott, signerad Lasse Holm och Ingela &quot;Pling&quot; Forsman.
          </p>
          
          <p className="mb-4">
            2008 framröstad genom SVT som Sveriges bästa dansbandslåt i samband med Dansbandskampen.
          </p>
          
          <p className="mb-4">
            EPA remixer har det också blivit och under &quot;Inatt&quot; ( Inget stoppar oss nu) lever låten återigen ett nytt liv genom Ellen Krauss tolkning i &quot;Så mycket bättre&quot;.
          </p>
          
          <p className="mb-4">
            &quot;Corrine, Corrina&quot;, &quot;Sista dansen, &quot;Får jag låna din fru i kväll&quot;, &quot;Om det känns rätt&quot; är för att nämna några av de hitlåtar som är starkt förknippade med bandet.
          </p>
          
          <p className="mb-4">
            Black Jack har gjort ett flertal album och haft ett tiotal låtar med på Svensktoppen. Den mest framgångsrika är &quot; Om det känns rätt &quot; som låg etta 1996.
          </p>
          
          <p className="mb-4">
            2020 största dansbandslåt på Spotify var Black Jacks och det med låten <strong>&quot;Kåt, glad och tacksam.&quot;</strong> En titel hämtad från filmen &quot;Ogifta par&quot; och Peter Dalles klassiska kommentar.
          </p>
          
          <p className="mb-4">
            Under åren har Black Jack varit med i flera underhållningsprogram i TV, bl.a. Sommarkrysset, QX – Galan, Jeopardy, Mat Tina, Gokväll, Bingolotto, Nyhetsmorgon etc.2016 sände SVT dokumentären <strong>&quot;Black Jack – från film till verklighet&quot;</strong> som sågs av en miljonpublik.
          </p>
          
          <div className="mt-6">
            <p className="font-bold mb-2">Black Jack består av:</p>
            <p>Ola Jonsson, sång, bas</p>
            <p>Peder Matz, keyboard, dragspel</p>
            <p>Morgan Östlin, saxofon, keyboard</p>
            <p>Niss Olsson, gitarr, sång, munspel</p>
            <p>Mikael Östlin, trummor</p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <Image 
            src="/images/logo-spela-blackjack-300x50.png"
            alt="Spela blackjack"
            width={170}
            height={30}
          />
          <p className="mt-2">Spela blackjack online med BlackJack.se</p>
        </div>
      </div>
    </section>
  );
};

export default Nyhetsarkiv; 