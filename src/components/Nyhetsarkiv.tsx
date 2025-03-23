import Image from 'next/image';

const Nyhetsarkiv = () => {
  return (
    <section id="nyhetsarkiv" className="w-full bg-white">
      <div className="container py-16">
        <h2 className="text-center">Nyhetsarkiv</h2>
        
        <div className="mt-8">
          <p className="mb-4">
            Black Jack behöver nog inte någon längre presentation utan tillhör ett av Sveriges största och populäraste dansband. Mycket tack vare mastodont hiten <strong>"Inatt Inatt-Inget stoppar oss nu"</strong> som är den dansbandslåt som streamat i särklass mest på Spotify.
          </p>
          
          <p className="mb-4">
            Bandet startades 1990-91 i samband med Colin Nutleys film "Black Jack". Det var just med låten "Inget kan stoppa oss nu" även kallad "Inatt Inatt" som bandet fick sitt genombrott, signerad Lasse Holm och Ingela "Pling" Forsman.
          </p>
          
          <p className="mb-4">
            2008 framröstad genom SVT som Sveriges bästa dansbandslåt i samband med Dansbandskampen.
          </p>
          
          <p className="mb-4">
            EPA remixer har det också blivit och under "Inatt" ( Inget stoppar oss nu) lever låten återigen ett nytt liv genom Ellen Krauss tolkning i "Så mycket bättre".
          </p>
          
          <p className="mb-4">
            "Corrine, Corrina", "Sista dansen, "Får jag låna din fru i kväll", "Om det känns rätt" är för att nämna några av de hitlåtar som är starkt förknippade med bandet.
          </p>
          
          <p className="mb-4">
            Black Jack har gjort ett flertal album och haft ett tiotal låtar med på Svensktoppen. Den mest framgångsrika är " Om det känns rätt " som låg etta 1996.
          </p>
          
          <p className="mb-4">
            2020 största dansbandslåt på Spotify var Black Jacks och det med låten <strong>"Kåt, glad och tacksam."</strong> En titel hämtad från filmen "Ogifta par" och Peter Dalles klassiska kommentar.
          </p>
          
          <p className="mb-4">
            Under åren har Black Jack varit med i flera underhållningsprogram i TV, bl.a. Sommarkrysset, QX – Galan, Jeopardy, Mat Tina, Gokväll, Bingolotto, Nyhetsmorgon etc.2016 sände SVT dokumentären <strong>"Black Jack – från film till verklighet"</strong> som sågs av en miljonpublik.
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