# Silvert El Værktøj

Et Windows-program til elinstallatører med to værktøjer i ét:

- **Eltegner** – installationstegninger på arkitektens plantegning: symboler, ledninger, grupper, tavle, kabellængder, spændingsfald og kortslutning, titelblok og PDF til aflevering – og en 3D-visning af det færdige resultat.
- **Shelly Dokumentation** – dokumentation af Shelly-enheder, kabler og scripts, med netværksscanning og rapport.

Tegningen og Shelly-dokumentationen for et projekt ligger i **én projektfil (.sel)**, og begge værktøjer kan have samme projekt åbent samtidig.

**[Hent den nyeste version under Releases →](../../releases/latest)**

---

## Indhold

- [Hvad kan programmet?](#hvad-kan-programmet)
- [Installation](#installation)
- [Quick-guide](#quick-guide)
- [Tastaturgenveje i Eltegner](#tastaturgenveje-i-eltegner)
- [Data, sikkerhedskopier og opdateringer](#data-sikkerhedskopier-og-opdateringer)
- [Fejl og forslag](#fejl-og-forslag)
- [Licens](#licens)
- [Tredjepartskomponenter](#tredjepartskomponenter)

---

## Hvad kan programmet?

### Forside
- Alle projekter i datamappen med søgning på navn, kunde og adresse.
- Opret nye projekter, og åbn dem i Eltegner eller Shelly Dokumentation.
- Dobbeltklik på en `.sel`-fil i Stifinder åbner projektet her.

### Eltegner
- **Plan som underlag:** PDF (også flere sider) eller billede, én etage pr. plan med egen målestok, kote og loftshøjde. Målestokken kan kalibreres ud fra et kendt mål.
- **Vægge, døre, vinduer og huller** tegnes langs væggenes inderside – eller hentes færdige fra **Plan-læseren**, hvor Claude læser dem på plantegningen.
- **Symboler** efter IEC 60617 (stikkontakter, afbrydere, belysning, tavle, apparater, tele m.m.). Symboler fanges på væggen med ryggen mod væggen, og afstanden til hjørner, døre og vinduer vises.
- **Ledninger** med kabeltype, føring (loft, gulv eller anden højde), gruppe og automatisk **kabellængde** inkl. nedføring og tillæg.
- **Grupper og tavle** (LK UG150) med sikringer, RCD/RCBO, fase og advarsler, samt beregning af **spændingsfald** og **kortslutningsstrømme** (Ik,max / Ik,min).
- **Tændinger**, sammenbyggede symboler (fx afbryder over stikkontakt) og stigføringer mellem etager.
- **3D-visning** af vægge, udtag i deres højde, lamper i loftet og kablernes føring – med en liste over symboler, der ser forkert placeret ud (fx lampeudtag ved gulvet).
- **Titelblok** med firma og logo, kunde, adresse, tegningsnr. og revisioner.
- **Opdatér plan**, når arkitekten sender en rettet plan: installationen bliver liggende og flyttes med.
- **Eksport:** PDF med alle etager (og en side med Shelly-enheder), PNG og gruppefortegnelse til Excel.

### Shelly Dokumentation
- Enheder (kablede og trådløse) med model, placering, gruppe, IP og MAC – data kan hentes direkte fra enheden på netværket.
- Kabler og ledere, scripts og deres virkning.
- Rapport som PDF til kunden eller til installatøren.
- Symboler i Eltegner kan knyttes til Shelly-enheder.

### Plan-læser (i browseren)
[Plan-læseren](https://claude.ai/artifact/FKonNdt3YmRsQAEKTyLvek) er en side på claude.ai, hvor Claude læser rum, vægge, døre, vinduer og huller på en plantegning. Du retter det, der ikke passer, gemmer filen og henter den ind i Eltegner med **Importér plan**. Den åbnes også fra programmets forside.

Det kræver en Claude-konto: læsningen bruger af din egen Claude-konto, og første gang skal du give siden lov til at bruge Claude. Planen sendes kun til Claude for at blive læst og gemmes ikke på siden.

---

## Installation

**Krav:** Windows 10 eller 11 (64-bit).

1. Hent `Silvert-El-Vaerktoej-Setup-x.y.z.exe` under **Assets** i den [nyeste udgivelse](../../releases/latest).
2. Kør filen. Programmet er ikke signeret, så Windows SmartScreen advarer første gang: vælg **Flere oplysninger → Kør alligevel**.
3. Programmet installeres for den bruger, der er logget ind, og får en genvej på skrivebordet og i Start-menuen.

Nye versioner hentes automatisk, når programmet kører, og installeres, når det lukkes (eller med det samme via **Genstart nu**). Se nyhederne under **Hjælp → Hvad er nyt**.

---

## Quick-guide

### 1. Vælg en datamappe
Første gang beder programmet om en **datamappe**. Her gemmes projekter, eksporterede filer og sikkerhedskopier. Læg den gerne i OneDrive, hvis du vil bruge projekterne på flere computere.

### 2. Opret et projekt
På forsiden: skriv et navn under **Projekter** og tryk **+ Nyt projekt**. Klik derefter **Eltegner** ud for projektet.

### 3. Læg planen ind
- **Hurtigst med vægge:** åbn **[Plan-læseren](https://claude.ai/artifact/FKonNdt3YmRsQAEKTyLvek)** (eller fra forsiden), vælg arkitektens plan, træk en ramme om bygningen og tryk **Læs planen**. Ret det, der ikke passer, og **Gem plan-fil**. I Eltegner: **Importér plan** og vælg filen.
- **Kun planen som underlag:** tryk **Åbn** og vælg PDF eller billede. Tjek målestokken under **Etage**, eller kalibrér med **K** ved at klikke på to punkter med et mål, du kender.

### 4. Tegn installationen
1. **Symboler (S):** vælg et symbol i biblioteket til venstre (eller tryk 1–9 for favoritter) og klik på planen. Tæt på en væg fanges symbolet på væggen.
2. **Ledninger (L):** klik fra symbol til symbol. Dobbeltklik, Enter eller højreklik afslutter.
3. **Grupper:** opret grupper i højre side og vælg gruppen på kablet fra tavlen. Kabellængder, spændingsfald og kortslutning regnes automatisk.
4. **Tavle:** fanen **Tavle** nederst viser tavlen med moduler – **Placér automatisk** sætter dem i rækkefølge.
5. **Højder:** standardhøjder pr. kategori sættes under **Højder og føring**; et enkelt symbol kan få sin egen højde under **Egenskaber**.

### 5. Tjek i 3D
Tryk **3D** øverst. Drej med musen, zoom med hjulet, og se listen **ting at tjekke** for symboler, der ser forkert placeret ud. Klik på et symbol for at vælge og rette det.

### 6. Aflever
Udfyld **Titelblok** (kunde, adresse, tegningsnr.), og vælg **Eksportér → PDF med underlag**. Gruppefortegnelsen kan eksporteres til Excel.

### 7. Shelly-dokumentation
Klik **Shelly** ud for projektet på forsiden (eller **Åbn i Shelly** i Eltegner). Tilføj enhederne – IP-adressen er nok til at hente model og MAC fra enheden – og lav rapporten under **Rapport**. I Eltegner kan et symbol knyttes til en Shelly-enhed under **Egenskaber**.

Projektet gemmes automatisk, mens du arbejder.

---

## Tastaturgenveje i Eltegner

| Tast | Funktion | Tast | Funktion |
|---|---|---|---|
| V | Vælg og flyt | W | Væg |
| H | Panorér (eller hold mellemrum) | D | Dør |
| S | Placér symbol | N | Vindue |
| L | Ledning | G | Hul i væg (uden dør) |
| M | Mål | K | Kalibrér målestok |
| T | Tekst | F | Vis hele etagen |
| R / Shift+R | Drej symbol | B | Bue/lige på ledning |
| O | Ortho til/fra | 1–9 | Favoritsymboler |
| Ctrl+Z / Ctrl+Y | Fortryd / gentag | Ctrl+S | Gem (Ctrl+Shift+S: gem som) |
| Ctrl+O | Åbn | Ctrl+D | Dublér |
| Del | Slet det valgte | Esc | Afbryd / luk 3D |

---

## Data, sikkerhedskopier og opdateringer

- **Projektfiler:** ét projekt = én `.sel`-fil i datamappen under `Projekter` (undermapper er tilladt). Filen indeholder både tegningen med planerne og Shelly-dokumentationen.
- **Automatisk gem:** ændringer gemmes i projektfilen et par sekunder efter, du har rettet.
- **Sikkerhedskopier:** før en projektfil overskrives, gemmes den forrige udgave i `Sikkerhedskopier` (højst hvert 10. minut, de 10 nyeste). **Filer → Åbn sikkerhedskopier**.
- **Samtidig brug:** er et projekt åbent på en anden computer, får du besked og kan vælge kun at læse det.
- **Dine data bliver hos dig:** programmet sender ikke tegninger eller projekter nogen steder hen. Det kontakter kun GitHub for at søge efter opdateringer og dine Shelly-enheder på det lokale netværk. Plan-læseren (i browseren) sender den plantegning, du vælger, til Claude for at læse den.

---

## Fejl og forslag

Har du fundet en fejl eller en idé til en forbedring? Opret en sag under **[Issues → New issue](../../issues/new/choose)** og vælg **Fejl** eller **Forslag**. Det kræver en (gratis) GitHub-konto.

Sagerne kan ses af alle, så skriv ikke kundenavne, adresser eller andre personlige oplysninger, og vedhæft ikke projektfiler med kundedata.

---

## Licens

Copyright © 2026 Silvert El. Alle rettigheder forbeholdes.

Programmet er gratis at bruge – både privat og i virksomheder – på de vilkår, der står i **[licensaftalen](LICENSE.md)**. Kort fortalt: du må installere, bruge og dele den uændrede installationsfil, men ikke sælge, ændre eller videreudvikle Programmet. Det leveres uden garanti, og beregningerne erstatter ikke installatørens egen kontrol efter gældende regler.

Kildekoden er ikke offentlig.

---

## Tredjepartskomponenter

Programmet bruger disse open source-komponenter. Deres licenser følger med i installationen.

| Komponent | Bruges til | Licens |
|---|---|---|
| [Electron](https://www.electronjs.org/) (inkl. Chromium og Node.js) | Selve programmet | MIT (Chromium: BSD m.fl., se `LICENSES.chromium.html` i installationsmappen) |
| [electron-updater](https://github.com/electron-userland/electron-builder) | Automatiske opdateringer | MIT |
| [three.js](https://threejs.org/) | 3D-visning | MIT |
| [PDF.js](https://mozilla.github.io/pdf.js/) | Visning af PDF-planer | Apache 2.0 |
| [pdf-lib](https://pdf-lib.js.org/) | PDF-eksport i Eltegner | MIT |
| [jsPDF](https://github.com/parallax/jsPDF) | Rapporter i Shelly Dokumentation | MIT |
| [QRCode.js](https://github.com/davidshimjs/qrcodejs) | QR-koder på enhedsetiketter | MIT |
| [Barlow](https://fonts.google.com/specimen/Barlow), [Inter](https://rsms.me/inter/), [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Skrifttyper | SIL Open Font License 1.1 |
