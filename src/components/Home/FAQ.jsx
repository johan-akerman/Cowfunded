import { FAQCard } from "./FAQCard";

export function FAQ() {
  const questions = [
    {
      q: "Vad är LOME™?",
      a: "LOME (“Low Methane”) är kött som har minskade utsläpp av metan. Det betyder att den köttbiten som är märkt med “LOME” kommer från en ko som har ätit rödalger som tillskott. Vårt mål är att LOME-kött ska ha minst 30% lägre metanutsläpp än konventionellt kött för att nå uppsatta klimatmål “Methane Pledge” för minskning av metan.",
    },
    {
      q: "Hur smakar kött med minskade metanutsläpp? ",
      a: "Exakt likadant som vanligt kött! En av de stora fördelarna med just fodertillskottet av rödalger är - förutom att de medverkar till mindre utsläpp - att dessa inte påverkar vare sig smak, textur eller näringsvärden.",
    },
    {
      q: "Vad är grejen med metan och klimat?",
      a: "När kor äter startar en fodersmältningsprocess i kons första mage (“vommen”). Denna process ger upphov till att metan skapas. Metan är en cirka 84 gånger starkare klimatgas över 20 år än koldioxid. Samtidigt bryts den ner snabbare i atmosfären, vilket gör att minskade utsläpp av metan på kort tid kan få positiva effekter för klimatet. Fram till nyligen fanns få globala och nationella initiativ för att minska metanutsläppen - men i november 2021 skev över 100 länder (inklusive Sverige) på The Global Methane Pledge (LÄNK: https://www.globalmethanepledge.org/). Dessa länder har förbundit sig att minska metanutsläpp med minst 30% senast 2030. Minskade utsläpp av metan inget som löser alla klimatproblem - men det bidrar till att samhället får mer tid att ställa om övriga utsläpp!",
    },
    {
      q: "Vad hände under LOME-Piloten?",
      a: "Volta Greentech, PROTOS och Coop genomförde en pilot att mata 10 tjurar på prisbelönta Ejmunds Gård på Gotland med ett ny typ av metanreducerande fodertillskott, baserat på rödalger odlade i Volta Greentechs algfabrik i Lysekil på västkusten. Under projektet som varade i cirka 3 månader kunde en metanreduktion hos tjurarna uppnås på cirka 92%. Genomsnittet under hela pilotperioden låg på ca 80%. Dessutom testades och implementerades flera nya sätt att utfodra korna alger på ett mer effektivt sätt - resultat som kommer att implementeras på nya gårdar i framtiden. Under piloten har vi visat att det är möjligt att uppnå 30% metanreduktion per kg kött när korna utfodras med rödalger under ett antal månader under vinterhalvåret. Nötköttet kan alltså uppnå klimatmålen för metan. I denna första piloten hade en längre tid än tre månader med utfodring av alger behövts för att nå en total metanreduktion på över 30%. Men det är en bra start och bra första projekt! Läs mer om studien och dess resultat i vår Klimatrapport för LOME-Piloten, som publiceras den 30 juni på www.lomemeat.se. ",
    },
    {
      q: "Hur mådde korna?",
      a: "Nötdjuren i piloten följde en normal tillväxtkurva, vilket är en central utgångspunkt när man tittar på djurhälsa, samt åt och betedde sig normalt.",
    },
    {
      q: "Hur stor skillnad kan jag göra?",
      a: "En svensk äter i genomsnitt 27.4 kg rött kött per person/år. Skulle allt detta kött metanreduceras med minst 30% enligt LOME™ skulle detta motsvara cirka 1.8kg CO2e per 500 g nötfärs, 3.6 kg CO2e per 1000 g, eller totalt 99 kg CO2e per person. Dessa siffror är baserade på data från Ejmunds gård; kor som blir 16 månader gamla och uppskattningsvis släpper ut 74 kg metan under sin livstid utan alger. Den klimatuträkning som publiceras i LOME-kalkylatorn avser kött som metanreducerats om minst 30%, enligt Global Methane Pledge. Kons vikt anges som handelsvikt (225kg). Konvertering av metan till CO2e anges som faktor 28 baserat på IPCCs (AR5) beräkningar. Beräkning avseende flyg är baserat på genomsnittsutsläpp för en enkelresa med flyg avsedd sträcka, enligt ICAO's kalkylator, samt Distance-to (144.7). Uppskattade metanutsläpp från fodersmältningen och minskning baserat på data från pilotprojektet på Ejmunds gård: Utan alger: 74 kg metan per ko. Minskning med alger i fodret under 4 månader: 28.67 kg metan per ko = 803 kg CO2e (28 (GWP) x 28.67 (kg metan)). Procentuell minskning: 28.67 kg metan / 74 kg metan = 39%.Lantbrukssektorns metanutsläpp från fodersmältningen står för cirka 92% av sektorns metanutsläpp (SCB 2020). Baserat på resultat från pilotprojektet som visar på 92% minskning i metan från fodersmältningen vid daglig utfodring, uppskattas att när korna utfodras under en fjärdedel av livet, är det möjligt att minska netto metanutsläppen per kg kött med minst 30% och nå uppsatta klimatmål. ",
    },
    {
      q: "Hur hittar jag produkterna?",
      a: "De första produkterna släpps den 30 juni i utvalda Coop-butiker i Stockholmsområdet och på Gotland, och säljs fram till cirka 10 juli - eller så snart de tagit slut. Dessa säljs som LOME Nötkött 500g (riktpris 59.95 SEK) samt som styckdetaljer över disk hos Stora Coop i Visby. Hitta din närmaste på www.lomefoods.com/butiker! Fler produkter beräknas släppas när vi matat fler kor - preliminärt i början av 2023!",
    },
  ];

  return (
    <div>
      <div className="bg-coral lg:pb-32 pb-12 text-center" id="faq">
        <h1 className="pt-16 lg:pb-12 pb-8 text-black  lg:text-6xl text-4xl font-bold">
          Vanliga frågor
        </h1>

        <div className="lg:w-8/12 w-11/12  mx-auto pb-12">
          {questions?.map((question) => {
            return <FAQCard question={question.q} answer={question.a} />;
          })}
        </div>

        <span className="pt-12 text-lg">
          Har du fler frågor? Kontakta{" "}
          <a
            className="border-b-2 border-black hover:border-primary"
            href="mailto:hello@voltagreentech.com"
          >
            hello@voltagreentech.com
          </a>
        </span>
      </div>
    </div>
  );
}
