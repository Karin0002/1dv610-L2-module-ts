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

setCSSBackgroundColorPropertyOn:
Don't pun
Ordet set är idag brett använt för syftet att sätta en egenskap hos ett objekt. Vid användning (t.ex. CSSColorSetter.setCSSBackgroundColorPropertyOn(HTMLElement, color)) skulle man därför kunna tolka att CSSColorSetter har en egenskap som heter CSSBackgroundColorPropertyOn och att man genom metoden sätter värdet på denna. Detta är en felaktig tolkning och anledningen till att identifieraren har ordet On på slutet. Genom detta försöker jag kommunicera att man sätter egeneskapen "on" första argumentet till metoden. Trots detta kommer man inte ifrån att det inte är det vanliga syftet som set står för. Istället hade man kanske kunnat ändra metodens funktion något så att den själv skapar ett HTMLElement och sätter CSS egenskapen på det egentillverkade elementet. Då hade man kunna byta namn till createElementWithCSSBackgroundColor. 

Method names
setCSSBackgroundColorPropertyOn är en verb-fras. Identiferaren innehåller många ord som inte är verb men sätt som helhet blir det en verb-fras. En metod ska göra något och den ordklass som bäst illustrerar detta är just verb. Därför får man en inblick i att identifieraren gör något. 

HTMLColorSwatch:
Use problem domain names
En color swatch är inte kopplat till programmering på något vis utan hör direkt till problem domänen, det vill säga ämnet färger och färgteman. Detta gör identifieraren mer förståelig för den tänkta målgruppen. Eftersom det inte finns något programmerings ord för en color swatch valde jag att använda den "domän-korrekta" namnet och ej insatta kan enkelt slå upp en definition. Samtidigt inleds identifieraren med HTML vilket är ett mycket programmerings specifikt begrepp. Istället för att blanda begrepp från båda domänerna hade det kanske varit bättre att välja ett. Samtidigt är målgruppen programmerare som på något vis har behov av funktionalitet kopplat till problem domänen (färg). Så dessa bör ha kunskap om HTML och någon sorts koppling till färg. Anledningen till att jag valde att ha med HTML var för att förklara vad det i praktiken var för något, nämligen ett HTMLElement.

Don't add gratuitous context
Att inleda med HTML i identifierar riskerar att "stjälpa" användaren eftersom HTML inleder väldigt många olika begrepp (HTMLDivElement, HTMLButtonElement osv). Detta gör att HTMLColorSwatch lätt kommer bort bland alla andra "HTML-inledande" identifierare. Man kan av den anledningen hävda att man ger för mycket context. ColorSwatch kanske räcker. Om det trots allt ger för lite kontext för att förstå att det är ett HTMLElement det handlar om kanske man istället ska kalla den ColorSwatchElement eller ColorDisplayElement. Kontexten blir egentligen densamma men det blir bättre ur aspekten att IDE:n inte kan hjälpa effektivt. 

sortColorsByLightness
Don't be Cute
sortColorsByLightness gör precis vad den säger. Därmed följer den mottot "Say what you mean. Mean what you say.". Oavsett erfarenheter, "inside jokes", humor m.m. kan man tolka vad identifieraren gör. Det är en objektiv beskrivning.

Add meaningful context
Ur ett perspektiv är identifieraren självförklarande, dvs den sorterar färger utifrån ljus. Utan dess omgivande kontext kan däremot ett antal frågor ställas. Vilka "colors" och vad/vilken lightness menas är exempel på dessa frågor. Metoden finns i klassen ColorThemeData. Inuti ColorThemeData finns egenskapen colorsInTheme. Det besvarar på frågan vilka "colors". Ett Color objekt har egenskapen lightness. Det i sin tur svarar på vad/vilken lightness. 




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
