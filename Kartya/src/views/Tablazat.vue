<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="table-container">
                <table class="table col-md-8">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Név</th>
                            <th scope="col">Allias</th>
                            <th scope="col">Banda</th>
                            <th scope="col">Foglalkozás</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(member, i) in filteredCharacters" :key="i">
                            <th scope="row" class="hover-cell">{{ member.id }}</th>
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
                { id: 1, nev: "Aristos Petrou", allias: "Ruby da Cherry", band: "$uicideboy$", foglalkozas: "Zenész" },
                { id: 2, nev: "Scott Anthony Arceneaux Jr.", allias: "$crim", band: "$uicideboy$", foglalkozas: "Zenész/Producer" },
                { id: 3, nev: "Ivan Ramirez", allias: "Ramirez", band: "-", foglalkozas: "Zenész" },
                { id: 4, nev: "Jerry Antoine", allias: "GERM", band: "Shameless Money Gang", foglalkozas: "Zenész" },
                { id: 5, nev: "Shermar Cuba Paul", allias: "Night Lovell", band: "-", foglalkozas: "Zenész/Producer" },
                { id: 6, nev: "Andrew Adolph", allias: "Shakewell", band: "-", foglalkozas: "Zenész" },
                { id: 7, nev: "Joshua Marchetta", allias: "Chetta", band: "-", foglalkozas: "Zenész" },
                { id: 8, nev: "-", allias: "Crystalmeth", band: "-", foglalkozas: "DJ" },
                { id: 9, nev: "Max Beck", allias: "-", band: "-", foglalkozas: "Fotós" },
                { id: 10, nev: "Adam Mariagga", allias: "-", band: "-", foglalkozas: "Ruha tervező" },
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
  background-color: #121212; /* Nagyon sötét háttér */
  color: #e0e0e0; /* Világosszürke szöveg */
}

.table {
  border: 3px solid rgba(0, 188, 212, 1); /* Kezdő szín */
  border-collapse: collapse; /* Gaps eltávolítása */
  border-radius: 8px; /* Kerekebb sarkok */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Árnyék */
  overflow: hidden; /* Túlfolyás elrejtése */
  width: 100%; /* Táblázat szélessége */
  max-width: 800px; /* Maximális szélesség */
  margin: auto; /* Középre igazítás */
}

.hover-cell {
  position: relative; /* Pozicionálás a sárkányhoz */
}

.dragon {
  display: none; /* Alapértelmezetten rejtett */
  position: absolute;
  width: 30px; /* Sárkány mérete */
  height: 30px; /* Sárkány mérete */
  background-image: url('sarkany.jpg'); /* Sárkány kép URL-je */
  background-size: cover; /* Kép méretezése */
  top: 0; /* Fentről igazítva */
  left: 0; /* Balról igazítva */
}

.hover-cell:hover .dragon {
  display: block; /* Megjeleníti a sárkányt hoverkor */
}

th,
td {
  padding: 10px; /* Csökkentett párnázás */
  border: 1px solid #444; /* Sötétebb szürke keret a cellákban */
  background-color: #2e2e2e; /* Sötétebb háttér a cellákhoz */
  color: #e0e0e0; /* Világosszürke szöveg */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Zökkenőmentes háttérváltozás */
}

th {
  text-align: left; /* Balra igazítás */
}

/* Grunge/distressed effektus a táblázat fejlécén */
.table thead th {
  background-color: #3a3a3a; /* Sötétebb háttér a fejlécnek */
  color: #ffcc00; /* Aranysárga szöveg a fejlécnek */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7); /* Erősebb árnyék */
}

/* Hover hatások */
.table tbody tr:hover td,
.table tbody tr:hover th {
  color: #00bcd4; /* Élénk kék hover szöveg */
  background-color: rgba(0, 188, 212, 0.2); /* Halvány kék háttér hoverkor */
  transform: scale(1.02); /* Enyhe nagyítás hoverkor */
}

/* Zökkenőmentes görgetés a táblázathoz */
.table tbody {
  max-height: 250px; /* Csökkentett magasság */
  overflow-y: auto; /* Függőleges görgetés engedélyezése */
  scrollbar-width: thin; /* Vékony görgetősáv */
  scrollbar-color: #00bcd4 #121212; /* Görgetősáv színek */
}

/* Custom scrollbar for webkit browsers */
.table::-webkit-scrollbar {
  width: 8px; /* Görgetősáv szélessége */
}

.table::-webkit-scrollbar-track {
  background: #1c1c1c; /* Háttér a görgetősáv számára */
}

.table::-webkit-scrollbar-thumb {
  background-color: #00bcd4; /* Görgetősáv színe */
  border-radius: 10px; /* Lekerekített szélek */
}

.table::-webkit-scrollbar-thumb:hover {
  background-color: #0097a7; /* Hover hatásra sötétebb kék */
}

/* Animált szöveg effektus */
th::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background: #ffcc00; /* Aranysárga vonal */
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

th:hover::after {
  transform: scaleX(1); /* Hoverkor megjelenik */
}
</style>
