"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Moon, Star, Sparkles, Book, Heart, Zap } from "lucide-react";

export default function Home() {
  const [stars, setStars] = useState<Array<{ top: string; left: string; width: string; height: string; animationDuration: string; animationDelay: string }>>([]);

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    const generatedStars = Array.from({ length: 30 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 8 + 4}px`,
      height: `${Math.random() * 8 + 4}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setStars(generatedStars);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Den Store Arkana",
    author: {
      "@type": "Person",
      name: "Henrik Aareskjold",
      birthDate: "1984",
      birthPlace: "Sola, Rogaland, Norge",
    },
    genre: ["Fantasy", "Science Fiction", "Noveller", "Magisk realisme"],
    inLanguage: "no",
    isbn: "",
    numberOfPages: "",
    publisher: {
      "@type": "Organization",
      name: "Henrik Aareskjold",
    },
    description: "En novellesamling inspirert av tarotkortenes mystikk. Historier som spenner fra hverdagsliv til fantasi, sci-fi og mørke eventyr.",
    bookFormat: "https://schema.org/Hardcover",
    datePublished: "2026-02-15",
  };

  return (
    <div className="min-h-screen mystical-gradient">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Decorative stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star, i) => (
            <Star
              key={i}
              className="absolute text-amber-400/20"
              style={{
                top: star.top,
                left: star.left,
                width: star.width,
                height: star.height,
                animation: `twinkle ${star.animationDuration} infinite ${star.animationDelay}`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-amber-400/80">
              <Moon className="w-6 h-6" />
              <div className="h-px w-12 bg-amber-400/50" />
              <Star className="w-5 h-5" />
              <div className="h-px w-12 bg-amber-400/50" />
              <Sparkles className="w-6 h-6" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gold-text">Den Store Arkana</span>
            </h1>

            <p className="text-xl md:text-2xl text-amber-100/90 font-light leading-relaxed">
              En novellesamling inspirert av tarotkortenes mystikk – der drømmer og mareritt veves sammen
            </p>

            <p className="text-lg text-amber-100/70 max-w-2xl mx-auto lg:mx-0">
              Åpne portene til en verden hvor hverdagens realiteter møter fantasi, sci-fi og mørke eventyr.
              La kortene guide deg gjennom historier som vil holde deg våken lenge etter siste side.
            </p>

            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-2">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 font-medium">I salg nå</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-semibold text-lg px-8 py-6 shadow-2xl shadow-amber-500/20"
                onClick={() => window.open("https://www.ark.no/produkt/boker/skjonnlitteratur/den-store-arkana-9788294111527", "_blank")}
              >
                Bestill boken
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-500/50 text-amber-100 hover:bg-amber-500/10 font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection("utdrag")}
              >
                Les et utdrag
              </Button>
            </div>
          </div>

          {/* Right: Book Cover */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-lg shadow-2xl border-2 border-amber-500/30">
                <img
                  src="https://ugc.same-assets.com/x3IXCsqADCKV-QovBXQKo1LsIdUULvTp.jpeg"
                  alt="Den Store Arkana - bokcover"
                  className="w-full max-w-sm rounded shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section id="om-boken" className="py-24 px-4 bg-slate-950/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Om boken</h2>
            <div className="flex items-center justify-center gap-3 text-amber-400/60">
              <div className="h-px w-16 bg-amber-400/30" />
              <Moon className="w-5 h-5" />
              <div className="h-px w-16 bg-amber-400/30" />
            </div>
          </div>

          <div className="space-y-6 text-lg text-amber-100/80 leading-relaxed">
            <p className="text-center text-xl italic text-amber-300 py-4">
              En maktsyk konge … Et søvnløst barn … En fisketur utenom det vanlige … En farlig last mellom stjernene …
            </p>

            <p className="text-center text-xl italic text-amber-300 py-6">
              La tarotkortenes mystikk ta deg med til en verden av drømmer og mareritt …
            </p>

            <p>
              Dette er en novellesamling for deg som liker å bli <strong className="text-amber-200">både underholdt og urolig</strong> på samme tid.
              Historiene spenner fra hverdagsliv til fantasi, sci-fi og mørke eventyr – alle inspirert av tarotkortenes symboler og tematikk.
            </p>
          </div>
        </div>
      </section>

      {/* Why You'll Like This Book */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Derfor vil du like denne boken</h2>
            <div className="flex items-center justify-center gap-3 text-amber-400/60">
              <div className="h-px w-16 bg-amber-400/30" />
              <Star className="w-5 h-5" />
              <div className="h-px w-16 bg-amber-400/30" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Moon,
                title: "Magiske og mørke stemninger",
                description: "Dykk ned i atmosfærer som veksler mellom det vakre og det urovekkende, akkurat som tarotkortene selv.",
              },
              {
                icon: Sparkles,
                title: "Fra hverdagsdrama til stjernerom",
                description: "Historiene tar deg med til kongeriker, romskip og tilbake til det helt vanlige – men ingenting er som det ser ut.",
              },
              {
                icon: Book,
                title: "Kortere, intense leseopplevelser",
                description: "Perfekt for deg som liker å bli grepet av en historie uten å binde deg til en 500-siders roman.",
              },
              {
                icon: Heart,
                title: "Karakterdrevne fortellinger",
                description: "Møt mennesker (og andre skapninger) som kjemper, elsker, tviler og overrasker.",
              },
              {
                icon: Zap,
                title: "Les litt om gangen – eller slukt alt",
                description: "En bok du kan nyte med en novelle om kvelden, eller lese gjennom på én magisk helg.",
              },
              {
                icon: Star,
                title: "Ingen forkunnskap kreves",
                description: "Du trenger ikke å kunne tarot for å nyte historiene – symbolikken er vevd naturlig inn i fortellingene.",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-amber-500/10 rounded-full">
                      <feature.icon className="w-8 h-8 text-amber-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-200">{feature.title}</h3>
                  <p className="text-amber-100/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section id="utdrag" className="py-24 px-4 bg-slate-950/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Utdrag fra boken</h2>
            <div className="flex items-center justify-center gap-3 text-amber-400/60">
              <div className="h-px w-16 bg-amber-400/30" />
              <Moon className="w-5 h-5" />
              <div className="h-px w-16 bg-amber-400/30" />
            </div>
          </div>

          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-amber-500/40 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                <div className="absolute -left-4 -top-4 text-6xl text-amber-500/20 font-serif">"</div>
                <div className="space-y-4 text-lg text-amber-100/90 leading-relaxed italic pl-4">
                  <p>
                    Han vant det første kongedømmet ved å målbinde prinsessen, en ung møy kjent for å være så vrien og vrang i ord. Den gamle kongen ble så imponert av dette mesterstykket at han gjorde ham til sin arving. Det ble holdt et storslått bryllup, men ikke lenge etter ble den gamle kongen syk og døde. Da en respektfull sørgeperiode var over, ble den nye kongen signet og kronet.
                  </p>
                  <p>
                    Han og dronningen levde i fred og fordragelighet, landet var rikt og på god fot med sine naboer. Men etter noen år skjedde det en endring i den unge kongen. Maten smakte ikke godt mer, makten han hadde føltes hul, og han avskydde sin kone. Han hadde heller ikke noe til overs for utsendingene fra de andre kongedømmene, som skrøt uhemmet over deres egne rikdommer og vidstrakte provinser.
                  </p>
                  <p className="text-amber-300 font-semibold not-italic">
                    En plan tok rot i tankene hans.
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 text-6xl text-amber-500/20 font-serif">"</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Om forfatteren</h2>
            <div className="flex items-center justify-center gap-3 text-amber-400/60">
              <div className="h-px w-16 bg-amber-400/30" />
              <Star className="w-5 h-5" />
              <div className="h-px w-16 bg-amber-400/30" />
            </div>
          </div>

          <Card className="bg-slate-900/50 border-amber-500/30">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/30 to-amber-400/30 rounded-full blur-xl" />
                    <div className="relative w-48 h-48 rounded-full border-4 border-amber-500/40 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                      <img
                        src="https://ugc.same-assets.com/PGitHE3NGd-Sm-mSU4DCEzs9EbO9S4xh.png"
                        alt="Henrik Aareskjold - forfatter"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-amber-200">Henrik Aareskjold</h3>
                  <div className="space-y-4 text-lg text-amber-100/80 leading-relaxed">
                    <p>
                      <strong className="text-amber-200">Henrik Aareskjold</strong> (f. 1984) kommer fra Sola, Rogaland,
                      og har vært fortalt historier hele sitt voksne liv. Med en lidenskap for det mystiske og det ukjente,
                      har han utviklet en unik stemme som kombinerer poetisk språk med uhyggelig spenning.
                    </p>
                    <p>
                      I 2023 bidro han til <em className="text-amber-300">Forfatterskolens Juleantologi</em> med novellen
                      <em className="text-amber-300"> Stille Natt</em>, som ble lagt merke til for sin atmosfære og originalitet.
                    </p>
                    <p className="italic text-amber-300">
                      <strong>Den Store Arkana</strong> er hans første utgivelse i bokform – en debutsamling som viser
                      bredden i hans forfatterskap, fra det intime og hverdagslige til det episke og overnaturlige.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="kjop" className="py-24 px-4 bg-slate-950/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Bestill din bok i dag</h2>
            <div className="flex items-center justify-center gap-3 text-amber-400/60">
              <div className="h-px w-16 bg-amber-400/30" />
              <Moon className="w-5 h-5" />
              <div className="h-px w-16 bg-amber-400/30" />
            </div>
          </div>

          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-amber-500/40 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/30 to-amber-400/30 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg shadow-2xl border-2 border-amber-500/40">
                      <img
                        src="https://ugc.same-assets.com/p3wlxvikEH8ubVNokk44RSUhZSnUNUUK.jpeg"
                        alt="Den Store Arkana"
                        className="w-full max-w-xs rounded shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-200 font-medium">I salg nå</span>
                  </div>

                  <h3 className="text-2xl font-bold text-amber-200">
                    Oppdag historiene som vil ta deg med på en reise gjennom drømmer og mareritt
                  </h3>

                  <p className="text-lg text-amber-100/80 leading-relaxed">
                    Bestill <strong className="text-amber-200">Den Store Arkana</strong> i dag og bli med inn i en verden
                    hvor tarotkortenes mystikk veves sammen med gripende fortellinger du sent vil glemme.
                  </p>

                  <div className="space-y-3 py-4">
                    <div className="flex items-center gap-3 text-amber-100/70">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span><strong className="text-amber-200">Status:</strong> I salg nå</span>
                    </div>
                    <div className="flex items-center gap-3 text-amber-100/70">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span><strong className="text-amber-200">Format:</strong> Innbundet</span>
                    </div>
                    <div className="flex items-center gap-3 text-amber-100/70">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span><strong className="text-amber-200">Pris:</strong> 379,- kroner</span>
                    </div>
                    <div className="flex items-center gap-3 text-amber-100/70">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span><strong className="text-amber-200">Levering:</strong> Sendes innen 1-3 virkedager</span>
                    </div>
                    <div className="flex items-center gap-3 text-amber-100/70">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span><strong className="text-amber-200">Fri frakt</strong> over 350,- kroner</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xl py-7 shadow-2xl shadow-amber-500/30"
                    onClick={() => window.open("https://www.ark.no/produkt/boker/skjonnlitteratur/den-store-arkana-9788294111527", "_blank")}
                  >
                    Bestill Den Store Arkana
                  </Button>

                  <p className="text-sm text-amber-100/60 text-center">
                    Sikker betaling • 14 dagers åpent kjøp • Norsk nettbokhandel
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Ofte stilte spørsmål</h2>
            <div className="flex items-center justify-center gap-3 text-amber-400/60">
              <div className="h-px w-16 bg-amber-400/30" />
              <Star className="w-5 h-5" />
              <div className="h-px w-16 bg-amber-400/30" />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-slate-900/50 border border-amber-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-amber-200 hover:text-amber-300">
                Passer boken for ungdom?
              </AccordionTrigger>
              <AccordionContent className="text-amber-100/80 leading-relaxed">
                Ja, absolutt! Boken er egnet for lesere fra omtrent 16 år og oppover. Noen av historiene har mørke
                elementer, men ingenting er eksplisitt eller upassende. Det er en bok som kan nytes av både unge og
                voksne lesere som liker god historiefortelling.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-slate-900/50 border border-amber-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-amber-200 hover:text-amber-300">
                Er dette skrekk, fantasy eller noe midt imellom?
              </AccordionTrigger>
              <AccordionContent className="text-amber-100/80 leading-relaxed">
                Det er en blanding! Novellesamlingen inneholder elementer av fantasy, science fiction, hverdagsdrama
                og mørk stemning. Ikke ren skrekk, men noen historier har uhyggelige og urovekkende øyeblikk.
                Tenk på det som «magisk realisme møter mørk fantasy» – perfekt for deg som liker variert lesning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-slate-900/50 border border-amber-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-amber-200 hover:text-amber-300">
                Kan jeg gi boken i gave til noen som ikke kan tarot?
              </AccordionTrigger>
              <AccordionContent className="text-amber-100/80 leading-relaxed">
                Ja, absolutt! Du trenger ingen forkunnskap om tarot for å nyte historiene. Tarotkortene fungerer
                som inspirasjon og symbolikk, men novellene står sterkt på egne bein. Dette er først og fremst
                gode fortellinger – tarot-elementet er bare den mystiske krydderet som gir ekstra dybde.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-slate-900/50 border border-amber-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-amber-200 hover:text-amber-300">
                Kommer det flere bøker i samme univers?
              </AccordionTrigger>
              <AccordionContent className="text-amber-100/80 leading-relaxed">
                Dette er forfatterens debutbok, og fremtiden vil vise om det blir flere historier i samme stil!
                Men hver novelle i <em>Den Store Arkana</em> er en selvstendig historie, så du får en fullstendig
                leseopplevelse uten å vente på oppfølgere.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-slate-900/50 border border-amber-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-amber-200 hover:text-amber-300">
                Hvor mange noveller inneholder boken?
              </AccordionTrigger>
              <AccordionContent className="text-amber-100/80 leading-relaxed">
                Boken inneholder flere noveller inspirert av Den Store Arkana – de 22 hovedkortene i tarotdekket.
                Hver historie utforsker ulike temaer, karakterer og verdener, men alle er bundet sammen av
                tarotkortenes symbolikk og mystikk.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-slate-900/50 border border-amber-500/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-amber-200 hover:text-amber-300">
                Hvordan er språket og lesbarheten?
              </AccordionTrigger>
              <AccordionContent className="text-amber-100/80 leading-relaxed">
                Henrik Aareskjold skriver med et poetisk og stemningsfullt språk, men det er samtidig lett å lese
                og flyter godt. Perfekt for deg som liker vakkert språk uten at det blir for komplisert eller tungt.
                Du kan nyte både historiene og måten de fortelles på.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 border-t border-amber-500/20">
        <div className="container mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 text-amber-400/60">
            <Moon className="w-6 h-6" />
            <Star className="w-5 h-5" />
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold gold-text">Den Store Arkana</h3>
          <p className="text-amber-100/60">Henrik Aareskjold © 2026</p>
          <p className="text-amber-100/50 text-sm max-w-2xl mx-auto">
            La tarotkortenes mystikk ta deg med til en verden av drømmer og mareritt
          </p>

          <div className="pt-6 border-t border-amber-500/10">
            <p className="text-amber-100/50 text-sm">
              Nettside laget av{" "}
              <a
                href="mailto:sven.inge@forfatterskolen.no"
                className="text-amber-400/80 hover:text-amber-300 underline underline-offset-2 transition-colors"
              >
                Sven Inge Henningsen
              </a>
              {" "}– Forfatterskolen
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
