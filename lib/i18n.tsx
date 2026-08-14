import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { artroseTranslations } from "@/lib/translations/artrose";
import { bedrijvenTranslations } from "@/lib/translations/bedrijven";
import { contactTranslations } from "@/lib/translations/contact";
import { gezondheidscheckTranslations } from "@/lib/translations/gezondheidscheck";
import { onlineTranslations } from "@/lib/translations/online";
import { overAstridTranslations } from "@/lib/translations/over-astrid";
import { reumaTranslations } from "@/lib/translations/reuma";
import { zorgprofessionalsTranslations } from "@/lib/translations/zorgprofessionals";

export type Locale = "nl" | "en";

// Only root-relative internal paths get the /en prefix; anchors and external URLs pass through.
export function localizeHref(path: string, locale: Locale): string {
  if (locale !== "en" || !path.startsWith("/") || path.startsWith("/en/")) {
    return path;
  }
  return path === "/" ? "/en/" : `/en${path}`;
}

const englishTranslations: Record<string, string> = {
  Ervaringsdeskundige: "Lived experience",
  "Ik weet hoe het is wanneer pijn, stijfheid en vermoeidheid steeds meer invloed krijgen op je dagelijks leven. Ik heb zelf jarenlang geleefd met artrose en ernstige reumatische klachten.":
    "I know what it is like when pain, stiffness and fatigue increasingly affect your daily life. I lived with osteoarthritis and severe rheumatic symptoms for years.",
  "Mijn ervaring helpt mij om niet alleen naar de theorie te kijken, maar ook te begrijpen hoe moeilijk het kan zijn om veranderingen daadwerkelijk toe te passen en vol te houden.":
    "My experience helps me look beyond theory and understand how difficult it can be to put changes into practice and maintain them.",
  "Geaccrediteerd leefstijlcoach": "Accredited lifestyle coach",
  "Naast mijn persoonlijke ervaring heb ik de opleiding tot leefstijlcoach afgerond bij Sonnevelt Opleidingen.":
    "Alongside my personal experience, I completed the lifestyle coach programme at Sonnevelt Opleidingen.",
  "Daarnaast ben ik aangesloten bij de BLCN, de Beroepsvereniging Leefstijlcoaches Nederland.":
    "I am also a member of BLCN, the Dutch professional association for lifestyle coaches.",
  "Mijn begeleiding combineert professionele leefstijlkennis met praktische ondersteuning rondom voeding, stress, slaap, beweging en dagelijkse gewoonten.":
    "My coaching combines professional lifestyle expertise with practical support around nutrition, stress, sleep, movement and daily habits.",
  "Gespecialiseerd in reuma en artrose": "Specialised in rheumatism and osteoarthritis",
  "Mijn belangrijkste specialisatie ligt bij reuma en artrose.":
    "My main area of expertise is rheumatism and osteoarthritis.",
  "Hierdoor kan ik gerichter meedenken over de dagelijkse uitdagingen die bij deze klachten kunnen komen kijken, zonder te werken vanuit een algemene of oppervlakkige aanpak.":
    "This allows me to address the daily challenges that can accompany these conditions without relying on a generic or superficial approach.",

  "Leefstijlcoaching bij Reuma": "Lifestyle coaching for Rheumatism",
  "Persoonlijke begeleiding voor mensen die naast hun reguliere behandeling willen werken aan voeding, stress, slaap, beweging en duurzame gewoonten.":
    "Personal guidance for people who want to work on nutrition, stress, sleep, movement and lasting habits alongside their regular treatment.",
  "Het doel is om meer inzicht te krijgen in wat bij jouw situatie past en hoe je veranderingen praktisch kunt volhouden.":
    "The aim is to understand what suits your situation and how you can maintain changes in daily life.",
  "Leefstijlcoaching bij reuma": "Lifestyle coaching for rheumatism",
  "Leefstijlcoaching bij Artrose": "Lifestyle coaching for Osteoarthritis",
  "Artrose kan bewegen, sporten en dagelijkse activiteiten moeilijker maken.":
    "Osteoarthritis can make movement, exercise and daily activities more difficult.",
  "Samen onderzoeken we welke praktische veranderingen kunnen bijdragen aan een gezondere leefstijl, passende beweging, beter herstel en meer vertrouwen in je dagelijkse keuzes.":
    "Together we explore practical changes that can support a healthier lifestyle, suitable movement, better recovery and more confidence in your daily choices.",
  "Leefstijlcoaching bij artrose": "Lifestyle coaching for osteoarthritis",
  "Online Leefstijlcoaching": "Online Lifestyle Coaching",
  "Woon je niet in de omgeving van Den Bosch of is regelmatig reizen lastig?":
    "Do you live outside the Den Bosch area, or is regular travel difficult?",
  "Met online leefstijlcoaching krijg je persoonlijke begeleiding vanuit je eigen omgeving. De gesprekken kunnen online of telefonisch plaatsvinden en zijn beschikbaar door heel Nederland.":
    "Online lifestyle coaching gives you personal guidance from your own environment. Sessions can take place online or by phone and are available throughout the Netherlands.",
  "Online leefstijlcoaching": "Online lifestyle coaching",
  "Leefstijlcoaching voor Bedrijven": "Lifestyle Coaching for Organisations",
  "Voor organisaties die willen investeren in de gezondheid, inzetbaarheid en het welzijn van medewerkers.":
    "For organisations that want to invest in employee health, sustainable employability and wellbeing.",
  "Mogelijkheden zijn individuele coaching, groepscoaching, workshops en een leefstijlgerichte gezondheidscheck voor medewerkers.":
    "Options include individual coaching, group coaching, workshops and a lifestyle-focused health check for employees.",
  "Leefstijlcoaching voor bedrijven": "Lifestyle coaching for organisations",
  "Samenwerken met Zorgprofessionals": "Working with Healthcare Professionals",
  "Ik werk graag samen met reumatologen, huisartsen, fysiotherapeuten en andere zorgprofessionals die patiënten met reuma of artrose willen ondersteunen bij duurzame leefstijlverandering.":
    "I welcome collaboration with rheumatologists, general practitioners, physiotherapists and other healthcare professionals who want to support patients with rheumatism or osteoarthritis in making lasting lifestyle changes.",
  "De coaching is aanvullend op reguliere medische zorg en vervangt geen behandeling.":
    "The coaching complements regular medical care and does not replace treatment.",
  "Informatie voor zorgprofessionals": "Information for healthcare professionals",

  "Plantaardige en evenwichtige voeding": "Plant-based and balanced nutrition",
  "Stress en ontspanning": "Stress and relaxation",
  "Slaap en herstel": "Sleep and recovery",
  "Beweging die bij jouw mogelijkheden past": "Movement suited to your abilities",
  "Gezond gewicht en behoud van spierkracht": "A healthy weight and maintaining muscle strength",
  "Gewoonten en dagelijkse structuur": "Habits and daily structure",
  "Het praktisch volhouden van veranderingen": "Maintaining changes in daily life",
  "Meer grip op je dagelijkse leefstijl": "More control over your daily lifestyle",
  "Gezondere voedings- en beweeggewoonten": "Healthier eating and movement habits",
  "Een beter evenwicht tussen activiteit en herstel": "A better balance between activity and recovery",
  "Beter slapen en bewuster omgaan met stress": "Better sleep and a more mindful approach to stress",
  "Meer energie in het dagelijks leven": "More energy in everyday life",
  "Met meer vertrouwen en plezier kunnen bewegen": "Moving with greater confidence and enjoyment",
  "Je fitter en gezonder voelen": "Feeling fitter and healthier",

  "Gratis gezondheidscheck": "Free health check",
  "Eerste stap": "First step",
  "Een kort telefonisch gesprek waarin we jouw situatie bespreken, mijn aanpak toelichten en bekijken welke vervolgstap passend kan zijn.":
    "A short phone call to discuss your situation, explain my approach and consider a suitable next step.",
  Gratis: "Free",
  "Telefonisch en vrijblijvend": "By phone and without obligation",
  "Ruimte voor jouw situatie": "Space for your situation",
  "Persoonlijk advies over een passende vervolgstap":
    "Personal advice on a suitable next step",
  "Vraag de check aan": "Request the check",
  "Een kort telefonisch gesprek waarin we jouw situatie bespreken en bekijken welke vervolgstap passend kan zijn.":
    "A short phone call to discuss your situation and consider a suitable next step.",
  "Astrid Sanders voert een persoonlijk telefoongesprek":
    "Astrid Sanders having a personal phone conversation",
  Intake: "Intake",
  Verdieping: "Deeper review",
  "Een uitgebreide intake waarin we jouw gezondheid, leefstijl, dagelijkse gewoonten en doelen in kaart brengen.":
    "An in-depth intake to map out your health, lifestyle, daily habits and goals.",
  "Uitgebreide startanalyse": "In-depth starting analysis",
  "Doelen en gewoonten in kaart": "Goals and habits mapped out",
  "Heldere richting voor je begeleiding": "Clear direction for your coaching",
  "Plan een intake": "Plan an intake",
  "Bespreek de intake": "Discuss the intake",
  "Los coachingsgesprek": "Single coaching session",
  Flexibel: "Flexible",
  "Persoonlijke leefstijlcoaching afgestemd op jouw situatie, doelen en voortgang.":
    "Personal lifestyle coaching tailored to your situation, goals and progress.",
  "€125 per uur": "€125 per hour",
  "per uur": "per hour",
  "Een concrete coachingsvraag": "One concrete coaching question",
  "Voeding, stress, slaap of beweging": "Nutrition, stress, sleep or movement",
  "Praktische acties voor thuis": "Practical actions for home",
  "Bespreek een gesprek": "Discuss a session",
  "12-weken coachingstraject": "12-week coaching programme",
  Traject: "Programme",
  "Zes persoonlijke coachingssessies verspreid over twaalf weken, gericht op het opbouwen en volhouden van gezondere gewoonten.":
    "Six personal coaching sessions over twelve weeks, focused on building and maintaining healthier habits.",
  "Zes persoonlijke sessies": "Six personal sessions",
  "Rustig opbouwen over twaalf weken": "Build steadily over twelve weeks",
  "Ondersteuning bij volhouden en bijsturen": "Support with maintaining and adjusting habits",
  "Bekijk het traject": "View the programme",
  "Bespreek het traject": "Discuss the programme",

  "Wat doet een leefstijlcoach?": "What does a lifestyle coach do?",
  "Een leefstijlcoach helpt je om gezondere en beter vol te houden gewoonten te ontwikkelen.":
    "A lifestyle coach helps you develop healthier habits that are easier to maintain.",
  "Samen werk je aan onderwerpen zoals voeding, beweging, slaap, stress, herstel en gedragsverandering. De begeleiding wordt afgestemd op jouw persoonlijke situatie en doelen.":
    "Together, you work on topics such as nutrition, movement, sleep, stress, recovery and behaviour change. The coaching is tailored to your situation and goals.",
  "Kan ik starten als ik medicatie gebruik?": "Can I start if I take medication?",
  "Ja. Leefstijlcoaching kan naast bestaande medicatie en reguliere medische behandeling plaatsvinden.":
    "Yes. Lifestyle coaching can take place alongside existing medication and regular medical treatment.",
  "Je verandert of stopt medicatie nooit zelfstandig. Beslissingen over medicatie bespreek je altijd met je huisarts, specialist of behandelend arts.":
    "Never change or stop medication on your own. Always discuss medication decisions with your general practitioner, specialist or treating physician.",
  "Het doel van coaching is om je leefstijl en dagelijkse gewoonten te ondersteunen. Een eventuele wijziging in medicatie is een medische beslissing en geen gegarandeerd resultaat van het coachingstraject.":
    "The aim of coaching is to support your lifestyle and daily habits. Any medication change is a medical decision and is not a guaranteed result of coaching.",
  "Moet ik volledig plantaardig eten?": "Do I have to eat a fully plant-based diet?",
  "Nee. De begeleiding bevat een sterke focus op plantaardige voeding, maar de aanpak moet praktisch en vol te houden zijn.":
    "No. The coaching has a strong focus on plant-based nutrition, but the approach must remain practical and sustainable.",
  "We bekijken samen welke veranderingen bij jouw situatie passen. Het is niet noodzakelijk om van de ene op de andere dag volledig plantaardig te eten.":
    "Together we consider which changes suit your situation. You do not need to switch to a fully plant-based diet overnight.",
  "Hoe lang duurt een coachingstraject?": "How long does a coaching programme take?",
  "Dat hangt af van jouw doelen en behoefte aan begeleiding.":
    "That depends on your goals and the level of guidance you need.",
  "Je kunt kiezen voor een losse intake, een afzonderlijk coachingsgesprek of een traject van twaalf weken. Wanneer daarna verdere ondersteuning nodig is, kan een vervolg worden besproken.":
    "You can choose a single intake, an individual coaching session or a twelve-week programme. Further support can be discussed if needed afterwards.",
  "Kan leefstijlcoaching online plaatsvinden?": "Can lifestyle coaching take place online?",
  "Ja. Ik begeleid cliënten online door heel Nederland.":
    "Yes. I coach clients online throughout the Netherlands.",
  "Een eerste persoonlijke ontmoeting kan worden besproken wanneer dit praktisch en wenselijk is, maar veel gesprekken kunnen volledig online plaatsvinden.":
    "An initial in-person meeting can be discussed when practical and desirable, but many sessions can take place entirely online.",
  "Wat gebeurt er tijdens de gratis gezondheidscheck?": "What happens during the free health check?",
  "De gratis gezondheidscheck is een kort telefonisch gesprek waarin je vertelt over je situatie, leefstijl en wat je al hebt geprobeerd.":
    "The free health check is a short phone call in which you share your situation, lifestyle and what you have already tried.",
  "Ik leg uit hoe mijn aanpak werkt en we bekijken samen of leefstijlcoaching een passende volgende stap kan zijn. Het gesprek is vrijblijvend en verplicht je nergens toe.":
    "I explain how my approach works and together we consider whether lifestyle coaching is a suitable next step. The call is informal and carries no obligation.",
  "Vervangt leefstijlcoaching medische behandeling?": "Does lifestyle coaching replace medical treatment?",
  "Nee. Leefstijlcoaching vervangt geen medische diagnostiek, behandeling of advies.":
    "No. Lifestyle coaching does not replace medical diagnosis, treatment or advice.",
  "De coaching is aanvullende begeleiding naast de zorg van je huisarts, reumatoloog, fysiotherapeut of andere behandelaar.":
    "The coaching provides additional support alongside the care of your general practitioner, rheumatologist, physiotherapist or other healthcare provider.",

  "Leefstijlcoach in Den Bosch bij reuma en artrose":
    "Lifestyle coach in Den Bosch for rheumatism and osteoarthritis",
  "Geen snelle oplossing of standaardplan, maar begeleiding die aansluit op jouw situatie, mogelijkheden en doelen.":
    "No quick fix or standard plan, but guidance tailored to your situation, abilities and goals.",
  "Astrid Sanders in haar praktijk voor leefstijlcoaching":
    "Astrid Sanders in her lifestyle coaching practice",
  "Gratis gezondheidscheck aanvragen": "Request a free health check",
  "Portret van Astrid Sanders, leefstijlcoach in Den Bosch":
    "Portrait of Astrid Sanders, lifestyle coach in Den Bosch",
  "Heb je te maken met gewrichtspijn, stijfheid, vermoeidheid of terugkerende klachten? En wil je ontdekken welke rol voeding, stress, slaap en beweging kunnen spelen in jouw dagelijks leven?":
    "Are you dealing with joint pain, stiffness, fatigue or recurring symptoms? Would you like to explore the role nutrition, stress, sleep and movement can play in your daily life?",
  "Ik ben Astrid Sanders, geaccrediteerd leefstijlcoach en ervaringsdeskundige. Vanuit Den Bosch begeleid ik mensen met reuma en artrose bij het ontwikkelen van een leefstijl die praktisch, persoonlijk en vol te houden is.":
    "I am Astrid Sanders, an accredited lifestyle coach with lived experience. From Den Bosch, I help people with rheumatism and osteoarthritis develop a practical, personal and sustainable lifestyle.",
  "Leefstijlcoaching is beschikbaar in Den Bosch en omgeving en online door heel Nederland.":
    "Lifestyle coaching is available in and around Den Bosch and online throughout the Netherlands.",
  "Persoonlijk en professioneel": "Personal and professional",
  "Leefstijlcoaching vanuit ervaring én professionele kennis":
    "Lifestyle coaching grounded in experience and professional expertise",
  "Een gevarieerde plantaardige lunch met linzen, granen en groenten":
    "A varied plant-based lunch with lentils, grains and vegetables",
  "Heb je hier regelmatig last van?": "Do you regularly experience any of these?",
  "Situaties waarbij coaching kan passen": "Situations where coaching may be suitable",
  Reuma: "Rheumatism",
  Artrose: "Osteoarthritis",
  "Overgewicht in combinatie met gezondheidsrisico’s": "Excess weight combined with health risks",
  "Moeite met het volhouden van gezonde gewoonten": "Difficulty maintaining healthy habits",
  "Behoefte aan aanvullende leefstijlbegeleiding naast reguliere zorg":
    "A need for additional lifestyle guidance alongside regular care",
  "Wat je hierbij kunt ervaren": "What you may experience",
  "Gewrichtspijn en stijfheid": "Joint pain and stiffness",
  "Wisselende klachten of opvlammingen": "Fluctuating symptoms or flare-ups",
  "Vermoeidheid en weinig energie": "Fatigue and low energy",
  "Moeite met bewegen of dagelijkse activiteiten": "Difficulty with movement or daily activities",
  "Onzekerheid over voeding en leefstijl": "Uncertainty about nutrition and lifestyle",
  "Het gevoel dat je weinig grip hebt op je gezondheid": "Feeling that you have little control over your health",
  "Leefstijlcoaching vervangt geen medische behandeling. Het kan je wel helpen om naast reguliere zorg bewuster te werken aan voeding, beweging, slaap, stress en andere leefstijlfactoren.":
    "Lifestyle coaching does not replace medical treatment. It can help you make more conscious choices around nutrition, movement, sleep, stress and other lifestyle factors alongside regular care.",
  "Wanneer er sprake is van overgewicht in combinatie met een verhoogd gezondheidsrisico, bekijken we tijdens de gezondheidscheck welke vorm van begeleiding passend is en of een erkend GLI-traject relevant kan zijn.":
    "If excess weight is combined with an increased health risk, we use the health check to consider suitable guidance and whether a recognised combined lifestyle intervention may be relevant.",
  "Tijdens de gratis gezondheidscheck bespreken we jouw persoonlijke situatie en bekijken we samen wat een passende eerste stap kan zijn.":
    "During the free health check, we discuss your situation and consider a suitable first step together.",
  "GLI staat voor Gecombineerde Leefstijlinterventie.":
    "GLI is the Dutch combined lifestyle intervention programme.",
  "Waarmee kan ik je helpen?": "How can I help you?",
  "Zo werkt het": "How it works",
  "Van gezondheidscheck naar een leefstijl die bij je past":
    "From a health check to a lifestyle that suits you",
  "Stap 1: Gratis gezondheidscheck": "Free health check",
  "We beginnen met een kort en vrijblijvend telefoongesprek.":
    "We begin with a short and informal phone call.",
  "Je vertelt wat er speelt, welke klachten of uitdagingen je ervaart en wat je al hebt geprobeerd. Ik leg uit hoe mijn begeleiding werkt en we bekijken samen of mijn aanpak bij jou past.":
    "You share what is going on, the symptoms or challenges you experience and what you have already tried. I explain how my coaching works, and together we consider whether my approach suits you.",
  "Je hoeft hiervoor niet direct een afspraak in een agenda te boeken. Laat je naam, telefoonnummer en voorkeursmoment achter, dan neem ik persoonlijk contact met je op.":
    "You do not need to book an appointment straight away. Leave your name, phone number and preferred time, and I will contact you personally.",
  "Stap 2: Persoonlijke coaching": "Personal coaching",
  "Wanneer we besluiten om verder te gaan, stemmen we de begeleiding af op jouw situatie.":
    "If we decide to continue, the coaching will be tailored to your situation.",
  "De coaching kan online, persoonlijk of als combinatie plaatsvinden. Afhankelijk van jouw behoeften kijken we naar onderwerpen zoals:":
    "Coaching can take place online, in person or as a combination. Depending on your needs, we may look at topics such as:",
  "Je kunt kiezen voor een losse intake, een afzonderlijk coachingsgesprek of een gestructureerd traject.":
    "You can choose a single intake, an individual coaching session or a structured programme.",
  "Meer onderwerpen binnen de coaching": "More coaching topics",
  "Stap 3: Zelfstandig verder": "Continue independently",
  "Het doel is dat je steeds beter begrijpt welke gewoonten bij jou passen en dat je deze zelfstandig kunt blijven toepassen.":
    "The aim is to gain a clearer understanding of the habits that suit you and to keep applying them independently.",
  "Mogelijke doelen zijn:": "Possible goals include:",
  "Meer mogelijke doelen": "More possible goals",
  "Eventuele wijzigingen in medicatie worden uitsluitend besproken met je huisarts, reumatoloog of andere behandelend arts.":
    "Any medication changes must only be discussed with your general practitioner, rheumatologist or other treating physician.",
  "Ook na het traject blijft laagdrempelig contact mogelijk wanneer je opnieuw ondersteuning nodig hebt.":
    "After the programme, you can still get in touch if you need support again.",
  "Achtergrond en erkenning": "Background and accreditation",
  "Mensen met reuma en artrose weer grip laten krijgen op hun energie en welzijn.":
    "Helping people with rheumatism and osteoarthritis regain a sense of control over their energy and wellbeing.",
  "Bestuurder Nijmeegse Vierdaagse": "Board member, Nijmegen Four Days Marches",
  "Portret van Astrid Sanders op het strand":
    "Portrait of Astrid Sanders on the beach",
  Tarieven: "Pricing",
  "Pakketten en tarieven": "Packages and pricing",
  "Begin laagdrempelig met de gratis gezondheidscheck. Daarna kies je pas welke vorm van begeleiding past bij jouw situatie en tempo.":
    "Start gently with the free health check. After that, you choose which form of guidance suits your situation and pace.",
  "12 weken begeleiding": "12 weeks of support",
  "Meest gekozen": "Most popular",
  "Een langer vervolgtraject kan worden besproken wanneer na twaalf weken aanvullende begeleiding nodig is.":
    "A longer follow-up programme can be discussed if additional guidance is needed after twelve weeks.",
  "Ik weet hoe het is wanneer klachten je leven overnemen":
    "I know what it is like when symptoms take over your life",
  "Lees het volledige verhaal van Astrid": "Read Astrid's full story",
  "Mijn eigen verhaal begon met artrose in mijn knieën. Tijdens het tennissen werden mijn knieën regelmatig dik en pijnlijk, waardoor bewegen steeds moeilijker werd.":
    "My own story began with osteoarthritis in my knees. While playing tennis, my knees regularly became swollen and painful, making movement increasingly difficult.",
  "In juli 2020 kreeg ik plotseling een sterk opgezwollen hand. Binnen enkele maanden ging mijn gezondheid snel achteruit. Op het moeilijkste moment kon ik nauwelijks meer lopen en waren mijn handen, voeten en knieën ontstoken.":
    "In July 2020, one of my hands suddenly became severely swollen. Within a few months, my health declined rapidly. At the most difficult point, I could barely walk and my hands, feet and knees were inflamed.",
  "In de jaren daarna probeerde ik verschillende methoden en leefstijlaanpassingen. Ik hield zelfs in een uitgebreide spreadsheet bij wat mogelijk invloed had op mijn klachten. Toch vond ik lange tijd geen duidelijke aanpak die voor mij werkte.":
    "In the years that followed, I tried different methods and lifestyle changes. I even kept a detailed spreadsheet of factors that might affect my symptoms. For a long time, I still could not find a clear approach that worked for me.",
  "In mei 2024 begon ik opnieuw met een wetenschappelijk onderbouwde leefstijlaanpak, waarbij plantaardige voeding een belangrijk onderdeel vormde. Na ongeveer zes weken merkte ik veranderingen in mijn energie en dagelijks functioneren.":
    "In May 2024, I started again with a science-informed lifestyle approach in which plant-based nutrition played an important role. After about six weeks, I noticed changes in my energy and daily functioning.",
  "Mijn bloedwaarden verbeterden in de maanden daarna. Onder begeleiding van mijn reumatoloog kon mijn medicatie vervolgens stap voor stap worden afgebouwd.":
    "My blood values improved in the months that followed. With guidance from my rheumatologist, my medication could then be reduced step by step.",
  "Dit is mijn persoonlijke ervaring en geen garantie dat anderen hetzelfde resultaat bereiken. Het liet mij wel zien hoeveel invloed dagelijkse gewoonten kunnen hebben en hoe waardevol persoonlijke begeleiding kan zijn.":
    "This is my personal experience and does not guarantee that others will achieve the same result. It showed me how much daily habits can matter and how valuable personal guidance can be.",
  "Daarom heb ik de opleiding tot leefstijlcoach gevolgd. Nu combineer ik mijn eigen ervaring met professionele kennis om anderen te helpen meer grip te krijgen op hun leefstijl en gezondheid.":
    "That is why I trained as a lifestyle coach. I now combine my own experience with professional expertise to help others gain more control over their lifestyle and health.",
  "Voor mijn werk als leefstijlcoach heb ik jarenlang gewerkt in marketing, communicatie en klantbeleving. Daarnaast ben ik bestuurder van de Nijmeegse Vierdaagse.":
    "Before working as a lifestyle coach, I spent many years in marketing, communications and customer experience. I am also a board member of the Nijmegen Four Days Marches.",
  "Die professionele achtergrond helpt mij om gestructureerd, persoonlijk en doelgericht te begeleiden.":
    "That professional background helps me provide structured, personal and goal-focused guidance.",
  "Diploma Leefstijlcoach bij Sonnevelt Opleidingen":
    "Lifestyle Coach diploma from Sonnevelt Opleidingen",
  "Aansluiting en accreditatie bij de BLCN": "Membership and accreditation with BLCN",
  "Bekijk de opleiding bij Sonnevelt": "View the programme at Sonnevelt",
  "Raadpleeg het KABIZ-register": "Consult the KABIZ register",
  "Persoonlijke ervaring met reuma en artrose": "Personal experience with rheumatism and osteoarthritis",
  "Interview bij Omroep Brabant": "Interview with Omroep Brabant",
  "LinkedIn-profiel van Astrid Sanders": "Astrid Sanders' LinkedIn profile",
  "Bekijk het interview bij Omroep Brabant": "View the Omroep Brabant interview",
  "Veelgestelde vragen over leefstijlcoaching": "Frequently asked questions about lifestyle coaching",
  "Laat je naam, telefoonnummer en voorkeursmoment achter. Astrid neemt persoonlijk contact met je op voor een kort en vrijblijvend telefoongesprek.":
    "Leave your name, phone number and preferred time. Astrid will contact you personally for a short, informal phone call.",
  "Leefstijlcoaching bij reuma en artrose.": "Lifestyle coaching for rheumatism and osteoarthritis.",
  "Den Bosch en online door heel Nederland": "Den Bosch and online throughout the Netherlands",
  "Persoonlijke begeleiding rondom voeding, beweging, slaap, stress en dagelijkse gewoonten — naast je reguliere medische zorg.":
    "Personal guidance around nutrition, movement, sleep, stress and daily habits — alongside your regular medical care.",
  "Geaccrediteerd leefstijlcoach, opgeleid bij Sonnevelt Opleidingen en aangesloten bij de BLCN.":
    "Accredited lifestyle coach, trained at Sonnevelt Opleidingen and a member of BLCN.",
  "Pagina’s": "Pages",
  "Den Bosch, Noord-Brabant — en online door heel Nederland":
    "Den Bosch, Noord-Brabant — and online throughout the Netherlands",
  "Erkenning en media": "Accreditation and media",
  "Astrid op LinkedIn": "Astrid on LinkedIn",
  "Astrid Sanders Leefstijlcoaching": "Astrid Sanders Lifestyle Coaching",
  "Leefstijlcoaching vervangt geen medische behandeling.":
    "Lifestyle coaching does not replace medical treatment.",

  // Revision round 2026-08: homepage, pricing, proof links and location.
  "Leefstijlcoach bij reuma en artrose":
    "Lifestyle coach for rheumatism and osteoarthritis",
  "Gegarandeerd resultaat": "Guaranteed results",
  "Wil jij:": "Would you like:",
  "Minder pijn": "Less pain",
  "Meer energie": "More energy",
  "Minder afhankelijk van medicatie": "Less dependence on medication",
  "Lekkerder in je vel zitten": "Feel better in yourself",
  "Een betere gezondheid": "Better health",
  "Gezondheidsvaardigheden voor de rest van je leven":
    "Health skills you can use for the rest of your life",
  "Spreken deze punten je aan?": "Do these points resonate with you?",
  "Dan gaan we samen met een persoonlijk traject aan de slag. We starten met de gratis gezondheidscheck en bepalen van daaruit welke begeleiding bij jou past.":
    "Then we start a personal programme together. We begin with the free health check and use it to determine which coaching suits you.",
  "Leefstijlcoaching vervangt geen medische behandeling. Beslissingen over medicatie bespreek je altijd met je behandelend arts.":
    "Lifestyle coaching does not replace medical treatment. Always discuss medication decisions with your treating physician.",
  "We beginnen met een kort en vrijblijvend telefoongesprek over wat er speelt en welke eerste stap bij jou past.":
    "We begin with a short, no-obligation phone call about what is going on and which first step suits you.",
  "We stemmen de begeleiding af op jouw situatie en werken praktisch aan voeding, beweging, slaap, stress en gewoonten.":
    "We tailor the coaching to your situation and work practically on nutrition, movement, sleep, stress and habits.",
  "Je leert welke keuzes voor jou werken, zodat je gezonde veranderingen ook na het traject zelfstandig kunt volhouden.":
    "You learn which choices work for you, so you can maintain healthy changes independently after the programme.",
  vanaf: "from",
  "Bekijk de BLCN": "View BLCN",
  "Aangesloten bij de BLCN": "Member of BLCN",
  "Persoonlijke begeleiding rondom voeding, beweging, slaap, stress en dagelijkse gewoonten.":
    "Personal guidance around nutrition, movement, sleep, stress and daily habits.",
  "Een vrouw fietst doelgericht door een Nederlandse stadsomgeving":
    "A woman cycles purposefully through a Dutch urban setting",
  "Een vrouw werkt geconcentreerd aan haar kracht in een sportschool":
    "A woman focuses on building strength in a gym",
  "'s-Hertogenbosch — en online door heel Nederland":
    "'s-Hertogenbosch — and online throughout the Netherlands",
};

const translations: Record<string, string> = {
  ...englishTranslations,
  ...reumaTranslations,
  ...artroseTranslations,
  ...onlineTranslations,
  ...bedrijvenTranslations,
  ...zorgprofessionalsTranslations,
  ...overAstridTranslations,
  ...contactTranslations,
  ...gezondheidscheckTranslations,
};

export function translateText(value: string, locale: Locale): string {
  if (locale === "nl") {
    return value;
  }

  const normalized = value.replace(/\s+/g, " ").trim();
  return translations[normalized] ?? value;
}

export function localizeValue<T>(value: T, locale: Locale): T {
  if (locale === "nl" || value == null) {
    return value;
  }

  if (typeof value === "string") {
    return translateText(value, locale) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeValue(item, locale)) as T;
  }

  if (isValidElement(value)) {
    const element = value as ReactElement<Record<string, unknown>>;
    const { children, ...propsWithoutChildren } = element.props;
    const translatedProps = Object.fromEntries(
      Object.entries(propsWithoutChildren).map(([key, propValue]) => [
        key,
        localizeValue(propValue, locale),
      ]),
    );

    if (children === undefined) {
      return cloneElement(element, translatedProps) as T;
    }

    if (Array.isArray(children)) {
      const translatedChildren = children.map((child) =>
        localizeValue(child, locale),
      ) as ReactNode[];

      // Passing static siblings as an array makes React treat them as a keyed list.
      // Preserve their original variadic shape while keeping keys on mapped children.
      return cloneElement(element, translatedProps, ...translatedChildren) as T;
    }

    return cloneElement(
      element,
      translatedProps,
      localizeValue(children, locale) as ReactNode,
    ) as T;
  }

  if (typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeValue(item, locale)]),
    ) as T;
  }

  return value;
}

export function localizeReactNode(node: ReactNode, locale: Locale): ReactNode {
  return localizeValue(node, locale);
}
