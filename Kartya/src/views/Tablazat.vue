<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="table-container">
        <!-- Flexbox alapú táblázat -->
        <div class="flex-table">
          <!-- Minden egyes elem (tag) dinamikusan jelenik meg a filteredCharacters alapján -->
          <div class="table-row" v-for="(member, i) in filteredCharacters" :key="i">

            <!-- Tag neve, alias, banda és foglalkozás -->
            <div class="table-cell">
              <strong>Név:</strong> {{ member.nev }}
              <p></p>
              <!-- Kép megjelenítése, dinamikusan a tag képének megfelelően -->
              <img :src="`../../public/${member.kep}`" :alt="`Kép: ${member.nev}`" class="hover-img">
            </div>
            <div class="table-cell">
              <strong>Allias:</strong> {{ member.allias }}
              <p></p>
              <!-- Ha nincs más kép, alapértelmezett kép használata -->
              <img src="../../public/g59s.jpg" alt="">
            </div>
            <div class="table-cell">
              <strong>Banda:</strong> {{ member.band }}
            </div>
            <div class="table-cell">
              <strong>Foglalkozás:</strong> {{ member.foglalkozas }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['searchQuery'], // A keresési lekérdezést a szülő komponenstől nyerjük
  data() {
    return {
      // A tagok listája, minden tag adatával
      G59members: [
        { id: 1, kep: "Ruby.jpg", kep2: "g59s.jpg", nev: "Aristos Petrou", allias: "Ruby da Cherry", band: "$uicideboy$", foglalkozas: "Zenész" },
        { id: 2, kep: "Scrim.jpg", kep2: "g59s.jpg", nev: "Scott Anthony Arceneaux Jr.", allias: "$crim", band: "$uicideboy$", foglalkozas: "Zenész/Producer" },
        { id: 3, kep: "Ramirez.jpg", kep2: "g59s.jpg", nev: "Ivan Ramirez", allias: "Ramirez", band: "-", foglalkozas: "Zenész" },
        { id: 4, kep: "Germ.jpg", kep2: "g59s.jpg", nev: "Jerry Antoine", allias: "GERM", band: "Shameless Money Gang", foglalkozas: "Zenész" },
        { id: 5, kep: "Night Lovell.jpg", kep2: "g59s.jpg", nev: "Shermar Cuba Paul", allias: "Night Lovell", band: "-", foglalkozas: "Zenész/Producer" },
        { id: 6, kep: "Shakewell.jpg", kep2: "g59s.jpg", nev: "Andrew Adolph", allias: "Shakewell", band: "-", foglalkozas: "Zenész" },
        { id: 7, kep: "Chetta.jpg", kep2: "g59s.jpg", nev: "Joshua Marchetta", allias: "Chetta", band: "-", foglalkozas: "Zenész" },
        { id: 8, kep: "CrystalMeth.jpg", kep2: "g59s.jpg", nev: "-", allias: "Crystalmeth", band: "-", foglalkozas: "DJ" },
        { id: 9, kep: "Max.jpg", kep2: "g59s.jpg", nev: "Max Beck", allias: "-", band: "-", foglalkozas: "Fotós" },
        { id: 10, kep: "charizard.jpg", kep2: "g59s.jpg", nev: "Adam Mariagga", allias: "-", band: "-", foglalkozas: "Ruha tervező" },
      ],
    };
  },
  computed: {
    // A tagok szűrése a keresési lekérdezés alapján
    filteredCharacters() {
      const searchTarget = this.searchQuery ? this.searchQuery.toLowerCase() : "";
      return this.G59members.filter((member) => {
        return (
          member.nev.toLowerCase().includes(searchTarget) || // Név szűrése
          member.allias.toLowerCase().includes(searchTarget) || // Alias szűrése
          member.band.toLowerCase().includes(searchTarget) || // Banda szűrése
          member.foglalkozas.toLowerCase().includes(searchTarget) // Foglalkozás szűrése
        );
      });
    },
  },
};
</script>

<style scoped>
/* Az asztali táblázat stílusai */
.table-container {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

/* Flexbox táblázat */
.flex-table {
  display: flex;
  flex-wrap: wrap; /* A sorokba töltjük ki az elemeket */
  gap: 20px; /* Két cella közötti távolság */
  justify-content: center; /* Középre igazítjuk */
}

/* Sorok a táblázatban */
.table-row {
  display: flex;
  width: 100%;
  flex-basis: calc(50% - 10px); /* Két oszlopra osztja a szélességet */
  flex-wrap: wrap; /* A cellák szétszóródnak, ha kell */
  gap: 10px;
}

/* Az egyes cellák stílusa */
.table-cell {
  flex-basis: 48%; /* Az egyes cellák szélessége */
  background-color: #2e2e2e;
  color: whitesmoke;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 5 4px 10px rgba(2, 31, 194, 0.2);
  text-align: center;
  font-size: 1.1rem;
  transition: background-color 0.1s ease; /* Hover hatás az alap színre */
}

/* Képek stílusai */
.table-cell img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  opacity: 0; /* Kezdetben nem látható */
  transition: opacity 0.3s ease; /* Kép áttűnés */
}

/* Hover hatás a képeken */
.table-row:hover .table-cell img {
  opacity: 1;
}

/* Hover hatás a cellákon */
.table-cell:hover {
  background-color: #444;
}

/* A címkék stílusa a cellákban */
.table-cell strong {
  display: block;
  font-weight: bold;
}

/* Reszponzív stílusok kisebb képernyőkre */
@media (max-width: 768px) {
  .table-row {
    flex-basis: 100%; /* Kisebb képernyőn egy oszlopra vált */
  }
}
</style>
