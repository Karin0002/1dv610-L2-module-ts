# Reflektion


Monochrome:
Use intention-revealing names - it doesnt say what it does only describes it. But the class works with its only 
Namnet Monochrome svarar inte på frågorna varför det fins, användningsområde och hur man använder det. Klassen Monochrome ärver från den abstrakta klassen ColorTheme. När man sitter i koden ser man då tydligt Monochrome extends ColorTheme. Detta gör att namnet förklaras och ger mer svar på de ovannämnda frågor. Om man hade döpt om klassen till MonochromeColorTheme hade koden blivit mer förklarande i det publika interfacet men hade varit duplicering inuti koden. MonochromeColorThemeMaker hade varit ännu mer självförklarande gällande de ovannämnda frågorna. Nackdelen med dom föreslagna namnen är att de är långa vilket gör det besvärligare för användaren att använda dem, då är Monochrome mer koncis och lättare att skriva. Klassen enbart en metod i det publika interfacet. Namnet på den är generateColorTheme(numberOfColors). Detta har jag tänkt hjälper till med beskrivningen och förklarandet av vad klassen gör. Man kan däremot hävda att klassnamnet inte ska behöva namnet på metoderna för att man ska förstå vad klassen gör.

class name
Monochrome kan användas både som substanstiv och adjektiv. Jag har nyligen förstått att det oftare används som ett adjektiv vilket gör att det är tveksamt om namnet uppfyller regeln Class Names vilken förklarar att alla namn på klasser ska vara substantiv. De tidigare nämnda förslagen MonochromeColorTheme och MonochromeColorThemeMaker skulle även kunna vara en förbättring som gör att klassen definitivt skulle uppfylla regeln Class Names. Eftersom ett objekt ska representera något är därför substantiv den ordklass som bäst illustrerar detta. 

ColorThemeData:
Use Pronounceable Names
ColorThemeData består av riktiga och fulla engelska ord. Detta gör att man enkelt kan uttala namnet. I sin tur gör detta att människor enkelt kan kommunicera verbalt kring klassen. En försämring av namnet skulle kunna vara ClrTmeData vilket är betydligt svårare att uttala vilket skulle försvåra kommunikation människor emellan. Därför är ColorThemeData bra ur detta perspektiv.

Make Meaningful Distinctions
Denna regel innebär att man inte ska använda sig av "noise words". Anledning till att noise words förekommer är för att kodförfattarna enbart namnger för att "behaga" compilern (två identifierare kan inte dela samma namn, därför lägger man till noise words för att särskilja dem). Ett vanligt noise word är just data. Detta skulle kunna innebära att ColorThemeData tolkas som ColorTheme av människor. I just fallet av ColorThemeData är data inte ett noise word utan meningsfullt. Klassen ska innehålla data om ett color theme. Problemet i applikationen kring detta är att det redan finns en abstrakt klass som heter ColorTheme. Om ColorThemeData skulle förkortas av människor till ColorTheme skulle missförstånd lätt kunna ske. För att komma runt detta problem skulle man kunna byta namn på ColorTheme till t.ex. ColorThemeMaker. Om data då felaktigt skulle uppfattas som noise och ColorThemeData skulle förkortas till ColorTheme skulle detta inte vara hela världen eftersom det inte skulle krocka med befintliga identifierare. Möjligtvis skulle man också kunna byta namn till ColorThemeMetadata, detta skulle troligtvis innebära att läsarna förstår att data inte är noise utan en betydande del av namnet.

setCSSBackgroundColorPropertyOn
Pick One Word per Concept
Ordet set är idag brett använt för konceptet att sätta en egenskap hos ett objekt. Vid användning (t.ex. CSSColorSetter.setCSSBackgroundColorPropertyOn(HTMLElement, color)) skulle man därför kunna tolka att CSSColorSetter har en egenskap som heter CSSBackgroundColorPropertyOn och att man genom metoden sätter värdet på denna. Detta är en felaktig tolkning och anledningen till att identifieraren har ordet On på slutet. Genom detta försöker jag kommunicera att man sätter egeneskapen "on" första argumentet till metoden. Trots detta kommer man inte ifrån att det inte är det vanliga konceptet som set står för. Istället hade man kanske kunnat ändra metodens funktion något så att den själv skapar ett HTMLElement och sätter CSS egenskapen på det egentillverkade elementet. Då hade man kunna byta namn till createElementWithCSSBackgroundColor. 

Method names
setCSSBackgroundColorPropertyOn är en verb-fras. Identiferaren innehåller många ord som inte är verb men sätt som helhet blir det en verb-fras. En metod ska göra något och den ordklass som bäst illustrerar detta är just verb. Därför får man en inblick i att identifieraren gör något. 


5 namn på identifierare i det publika interface
| Namn och förklaring | Reflektion och regler från Clean Code |
| ------------------- | ------------------------------------- |
| Monochrome | monochrome vs monochromecolortheme |
| ColorThemeData | data is noise? but i want a word that is specificly data |
| setCSSBackgroundColorPropertyOn | test |
| HTMLColorSwatch | test |
| sortColorsByLightness | good? but prehaps long, doesnt say in what order ascending/descending, what colors? |

Reflektion av kapitel 2:





5 längsta metoder/funktion
| Metodnamn och länk eller kod | antal rader (ej ws) | Reflektion och regler från Clean Code |
| ---------------------------- | ------------------- | ------------------------------------- |
| **generateColorTheme(numberOfColors)** i klassen Analogous. OBS, metoden är mycket lik generateColorTheme(numberOfColors) i klasserna Complementary, SplitComplementary och Triadic som också har samma antal rader. | 19 | test |
| **getThemesWithNColors(n)** i klassen RandomColorTheme. | 15 |  |
| **validateNumberArgumentWithMaxAndMin(values)** i klassen Guard. | 12 |  |
| **generate2Colors()** i klassen Complementary. OBS, metoden är mycket lik generate3colors() i klasserna Analogous, SplitComplementary och Triadic som också har samma antal rader. | 12 |  |
| **generateColorTheme()** i klassen RandomColorTheme. | 11 |  |

Reflektion av kapitel 3:
