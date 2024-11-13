<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="table-container">
        <!-- Flexbox alapú táblázat -->
        <div class="flex-table">
          <div class="table-row" v-for="(member, i) in filteredCharacters" :key="i">

            <div class="table-cell">
              <strong>Név:</strong> {{ member.nev }}
              <p></p>
              <img :src="`../../public/${member.kep}`" :alt="`Kép: ${member.nev}`" class="hover-img">
            </div>
            <div class="table-cell">
              <strong>Allias:</strong> {{ member.allias }}
              <p></p>
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
  inject: ['searchQuery'],
  data() {
    return {
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
.table-container {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.flex-table {
  display: flex;
  flex-wrap: wrap;
  /* A sorokba töltjük ki az elemeket */
  gap: 20px;
  /* Két cella közötti távolság */
  justify-content: center;
}

.table-row {
  display: flex;
  width: 100%;
  flex-basis: calc(50% - 10px);
  /* Két oszlopra osztja a szélességet */
  flex-wrap: wrap;
  gap: 10px;
}

.table-cell {
  flex-basis: 48%;
  /* Az egyes cellák szélessége */
  background-color: #2e2e2e;
  color: #e0e0e0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.table-cell img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.table-row:hover .table-cell img {
  opacity: 1;
}

.table-cell:hover {
  background-color: #444;
}

.table-cell strong {
  display: block;
  font-weight: bold;
}

@media (max-width: 768px) {
  .table-row {
    flex-basis: 100%;
  }
}
</style>
