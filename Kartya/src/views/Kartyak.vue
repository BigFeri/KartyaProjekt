<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 karakter-kartyak">
    <!-- Karakterek megjelenítése -->
    <G59kartya
      v-for="member in KeresettMember"
      :key="member.id"
      :id="member.id"
      @reszletekModalKezeles="reszletKezelo"
      class="kartya"
    >
      <!-- Kép és név slotok -->
      <template v-slot:kep>
        <img :src="member.kep" :alt="member.nev" class="karakter-kep" />
      </template>
      <template v-slot:nev>
        <p v-html="keresJelol(member.nev)" class="karakter-cim"></p>
      </template>
    </G59kartya>
  </div>

  <!-- Modális ablak megjelenítése a kiválasztott karakterhez -->
  <G59Info
    v-if="kivalasztottKarakter"
    :nev="kivalasztottKarakter.nev"
    :text="kivalasztottKarakter.text"
    :modalId="'g59InfoModal' + kivalasztottKarakter.id"
  />
</template>
  
  <script>
import G59kartya from "@/components/G59kartya.vue";
import G59Info from "@/components/G59Info.vue";

export default {
  components: {
    G59kartya,
    G59Info,
  },
  inject: ["searchQuery"],
  data() {
    return {
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
      kivalasztottKarakter: null, // A kiválasztott karakter tárolása
    };
  },
  methods: {
    reszletKezelo({ id }) {
      // Kiválasztott karakter beállítása, ha a Részletek gombot megnyomják
      this.kivalasztottKarakter = this.G59members.find(
        (member) => member.id === Number(id)
      );
    },
    keresJelol(text) {
      if (!this.searchQuery) return text;
      const regex = new RegExp(this.searchQuery, "gi");
      return text.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });
    },
  },
  computed: {
    KeresettMember() {
      if (!this.searchQuery) {
        return this.G59members;
      }
      return this.G59members.filter((g) => {
        return (
          g.nev.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          g.text.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
};
</script>
  

<style scoped>
  /* Karakterkártyák grid elrendezése */
  .karakter-kartyak {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 oszlop nagyobb kijelzőkön */
    grid-gap: 20px; /* Távolság a kártyák között */
    padding: 20px;
  }

  /* Kártyák stílusa */
  .kartya {
    background-color: #1a1a1a; /* Sötét háttér a kártyáknak */
    border-radius: 10px; /* Kerekített sarkok */
    overflow: hidden;
    padding: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7); /* Árnyék a kártyák körül */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 400px; /* Kártyák fix magassága */
    border: 5px solid #ff4d4d; /* Piros szegély */
    width: 280px; /* Kártyák fix szélessége */
  }

  /* A képek méretének egységesítése */
  .karakter-kep {
    width: 100%;
    height: 220px; /* Azonos magasság minden képhez */
    object-fit: cover; /* Kép illeszkedjen a kerethez, torzulás nélkül */
    border-radius: 8px; /* Kép sarkainak kerekítése */
  }

  /* A karakter neve középre igazítva */
  .karakter-cim {
    color: #ff4d4d; /* $uicideboy$-stílusú piros szín */
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }

  /* Gomb stílusa és középre helyezése */
  button {
    background-color: #ff4d4d;  /* $uicideboy$ piros szín */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: auto; /* A gombot az aljára tolja */
  }

  button:hover {
    background-color: #ff1a1a; /* Hover effektus */
  }

  /* Reszponzív elrendezés: mobilon 1 oszlop, tableten 2, laptopon 4 */
  @media (max-width: 1200px) {
    .karakter-kartyak {
      grid-template-columns: repeat(3, 1fr); /* 3 oszlop laptopon */
    }
  }

  @media (max-width: 992px) {
    .karakter-kartyak {
      grid-template-columns: repeat(2, 1fr); /* 2 oszlop tableten */
    }
  }

  @media (max-width: 576px) {
    .karakter-kartyak {
      grid-template-columns: 1fr; /* 1 oszlop mobilon */
    }
  }
</style>
