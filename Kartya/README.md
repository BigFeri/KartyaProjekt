# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

 G59members: [
                {
                    id: 1,
                    nev: "Ruby da Cherry",
                    kep: "Ruby.jpg",
                    text: "Aristos Petrou vagy Ruby da Cherry a New Orleans-i rapduó $uicideboy$ második fele, és $crim unokatestvére.",
                },
                {
                    id: 2,
                    nev: "$crim",
                    kep: "Scrim.jpg",
                    text: "Scott Anthony Arceneaux Jr., szakmai nevén Scrim, amerikai rapper 1989-ben született New Orleansban.",
                },
                {
                    id: 3,
                    nev: "Ramirez",
                    kep: "Ramirez.jpg",
                    text: "1998-ban született a kaliforniai San Franciscóban. Ramirez egy Bay Area-i rapper.",
                },
                {
                    id: 4,
                    nev: "GERM",
                    kep: "Germ.jpg",
                    text: "Jerry Antoine (született 1991-ben), ismertebb nevén Germ, Georgia állambeli rapper.",
                },
                {
                    id: 5,
                    nev: "Night Lovell",
                    kep: "Night Lovell.jpg",
                    text: "Shermar Paul (born May 29, 1997), known as Night Lovell, is a rapper from Ottawa, Canada.",
                },
                {
                    id: 6,
                    nev: "Shakewell",
                    kep: "Shakewell.jpg",
                    text: "Andrew Adolph, aka Shakewell, a San Fernando Valley-ből származó amerikai rapper.",
                },
                {
                    id: 7,
                    nev: "Chetta",
                    kep: "Chetta.jpg",
                    text: "Chetta a Hu$tle Family-hez és a G59-hez kötődő New Orleans-i rapper.",
                },
                {
                    id: 8,
                    nev: "Crystalmeth",
                    kep: "CrystalMeth.jpg",
                    text: "Crystal Meth a $uicideBoy$ producere és DJ-je.",
                },
            ],


# Kártya Projekt, feladat leírása

## Általános leírás
A Kártya Projekt egy interaktív alkalmazás, amely lehetővé teszi a felhasználók számára, hogy felfedezzék és keresgéljenek különböző karakterek között. Az alkalmazás két fő nézetet kínál: táblázatos és kártyás megjelenítést. A felhasználók könnyedén kereshetnek és szűrhetnek az adatok között, miközben részletes információkat is megtekinthetnek az egyes karakterekről.

## Technológiai stack
- Frontend
- Dizájn: Modern, reszponzív dizájn CSS-sel
- Adatbázis: A projektben nem használtunk külső

## Menüpontok, funkciók
### Home
Főoldal, amely tartalmazza a navigációs sávot és az aloldalakra mutató linkeket.

### Táblázat
A karakterek adatainak táblázatos megjelenítése.
Oszlopok: Id, Név, Allias, Banda, Foglalkozás.

### Kártyák
A karakterek megjelenítése kártyás formában.

### Keresés
Keresési funkció, amely lehetővé teszi a felhasználók számára, hogy karakterekre keressenek név vagy leírás alapján.

### Szűrés
A táblázatban lehetőség van szűrésre a karakterek különböző attribútumai szerint.

## Adatforrás
Az adatok a következő formátumban vannak tárolva:

```javascript
G59members: [
                {
                    id: 1,
                    nev: "Ruby da Cherry",
                    kep: "Ruby.jpg",
                    text: "Aristos Petrou vagy Ruby da Cherry a New Orleans-i rapduó $uicideboy$ második fele, és $crim unokatestvére.",
                },
  // További karakterek...
]
```
A táblázat a karakterek adatait a G59members tömbből olvassa be.

## A program részletezése
### Könyvtár és állomány szerkezet, modulok
- App.vue: Fő komponens, amely tartalmazza a navigációt és a RouterView-t.
- Kartyak.vue: A kártyás nézet megvalósítása, amely a karakterek kártyáit jeleníti meg.
- Tablazat.vue: A táblázatos nézet, amely az összes karakter adatát tartalmazza.
- G59kartya.vue: Kártya komponens, amely a karakterek megjelenítéséért felelős.
- G59Info.vue: A kártyák részleteit megjelenítő modális ablak.
### Home megvalósítása
- Funkció: A főoldalon található navigációs sáv, amely linkeket biztosít a táblázat és a kártyák megjelenítéséhez.
- Komponensek: RouterLink, RouterView.
### Táblázat megvalósítása
- Miért kell a táblázat?: A táblázat lehetővé teszi a felhasználók számára, hogy egyszerűen áttekintsék a karakterek adatait.
- Struktúra: A táblázat tartalmazza az összes karakter nevét, alliasát, bandáját és foglalkozását.
### Vizualizálás módja, dizájn
- A táblázat modern megjelenésű, reszponzív dizájnnal rendelkezik, amely alkalmazkodik a különböző képernyőméretekhez.
- A kártyák stílusa üveghatású, árnyékkal, amely növeli a vizuális vonzerőt.
### Keresés
- Mechanizmusa: A keresés a searchQuery alapján történik, amelyet a felhasználó ad meg a keresősávban.
- A találatok kiemelése CSS-sel történik, amely megkönnyíti a vizuális azonosítást.
## Egyéb funkciók
- Modálisok: A kártyákon található "Részletek" gomb megnyit egy modális ablakot, amely a karakter részletes információit tartalmazza.

