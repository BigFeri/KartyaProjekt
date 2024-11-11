<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="table-container">
        <table class="table col-md-8">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Kép</th>
              <th scope="col">Név</th>
              <th scope="col">Allias</th>
              <th scope="col">Banda</th>
              <th scope="col">Foglalkozás</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, i) in filteredCharacters" :key="i">
              <th scope="row" class="hover-cell">{{ member.id }}</th>
              <td class="hover-cell">
                <img :src="`../../public/${member.kep}`" :alt="`Kép: ${member.nev}`" class="hover-img">
              </td>
              <td class="hover-cell">{{ member.nev }}</td>
              <td class="hover-cell">{{ member.allias }}</td>
              <td class="hover-cell">{{ member.band }}</td>
              <td class="hover-cell">{{ member.foglalkozas }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['searchQuery'],
  data() {
    return {
      G59members: [
        { id: 1, kep: "Ruby.jpg", nev: "Aristos Petrou", allias: "Ruby da Cherry", band: "$uicideboy$", foglalkozas: "Zenész" },
        { id: 2, kep: "Scrim.jpg", nev: "Scott Anthony Arceneaux Jr.", allias: "$crim", band: "$uicideboy$", foglalkozas: "Zenész/Producer" },
        { id: 3, kep: "Ramirez.jpg", nev: "Ivan Ramirez", allias: "Ramirez", band: "-", foglalkozas: "Zenész" },
        { id: 4, kep: "Germ.jpg", nev: "Jerry Antoine", allias: "GERM", band: "Shameless Money Gang", foglalkozas: "Zenész" },
        { id: 5, kep: "Night Lovell.jpg", nev: "Shermar Cuba Paul", allias: "Night Lovell", band: "-", foglalkozas: "Zenész/Producer" },
        { id: 6, kep: "Shakewell.jpg", nev: "Andrew Adolph", allias: "Shakewell", band: "-", foglalkozas: "Zenész" },
        { id: 7, kep: "Chetta.jpg", nev: "Joshua Marchetta", allias: "Chetta", band: "-", foglalkozas: "Zenész" },
        { id: 8, kep: "CrystalMeth.jpg", nev: "-", allias: "Crystalmeth", band: "-", foglalkozas: "DJ" },
        { id: 9, kep: "Max.jpg", nev: "Max Beck", allias: "-", band: "-", foglalkozas: "Fotós" },
        { id: 10, kep: "charizard.jpg", nev: "Adam Mariagga", allias: "-", band: "-", foglalkozas: "Ruha tervező" },
      ],
    };
  },
  computed: {
    filteredCharacters() {
      const searchTarget = this.searchQuery ? this.searchQuery.toLowerCase() : "";
      return this.G59members.filter((member) => {
        return (
          member.nev.toLowerCase().includes(searchTarget) ||
          member.allias.toLowerCase().includes(searchTarget) ||
          member.band.toLowerCase().includes(searchTarget) ||
          member.foglalkozas.toLowerCase().includes(searchTarget)
        );
      });
    },
  },
};
</script>

<style scoped>
.suicideboy-theme {
  background-color: #121212;
  color: #e0e0e0;
}

.table {
  border: 3px solid rgba(0, 188, 212, 1);
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  table-layout: fixed;
  /* Fix szélesség a cellákhoz */
}

th,
td {
  padding: 20px;
  font-size: 1.2rem;
  border: 1px solid #444;
  background-color: #2e2e2e;
  color: #e0e0e0;
  text-align: center;
  transition: background-color 0.3s ease;
}

th {
  text-align: left;
}

td {
  text-align: center;
  position: relative;
  /* A pozicionáláshoz szükséges, hogy a képeket belül helyezzük el */
}

td img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* A kép szélessége kitölti a cellát */
  height: 100%;
  /* A kép magassága kitölti a cellát */
  object-fit: cover;
  /* A kép kitölti a cellát, miközben megőrzi az arányait */
  object-position: center;
  /* A kép középen lesz igazítva */
  opacity: 0;
  /* Alapértelmezetten rejtve */
  transition: opacity 0.3s ease;
  /* A képek alapértelmezetten rejtve lesznek */
}

/* Hoverkor jelenik meg a kép */
.hover-cell:hover img {
  opacity: 1;
  /* A kép csak akkor lesz látható, amikor az egér a cella fölé kerül */
}

/* Elvetettük a táblázat háttérszínének változtatását hoverkor */
.table tbody tr:hover td,
.table tbody tr:hover th {
  color: #00bcd4;
  /* Az egér fölé vitt sorok szövege világoskék */
}

.table thead th {
  background-color: #3a3a3a;
  color: #ffcc00;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
}

.table tbody {
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #00bcd4 #121212;
}

.table::-webkit-scrollbar {
  width: 8px;
}

.table::-webkit-scrollbar-track {
  background: #1c1c1c;
}

.table::-webkit-scrollbar-thumb {
  background-color: #00bcd4;
  border-radius: 10px;
}

.table::-webkit-scrollbar-thumb:hover {
  background-color: #0097a7;
}
</style>
