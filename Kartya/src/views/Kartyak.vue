<template>

    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 karakter-kartyak">
        <G59kartya v-for="member in KeresettMember" :key="member.id" :id="member.id"
            @reszletekModalKezeles="reszletKezelo" class="kartya">
            <template v-slot:kep>
                <img :src="member.kep" :alt="member.nev" class="karakter-kep" />
            </template>
            <template v-slot:nev> <!-- Módosítás itt -->
                <p v-html="keresJelol(member.nev)" class="karakter-cim"></p> <!-- Cím slot -->
            </template>
        </G59kartya>

        <!-- Modálisok hozzáadása minden karakterhez -->
        <G59Info v-if="kivalasztottKarakter" :nev="kivalasztottKarakter.nev" :text="kivalasztottKarakter.text"
            :modalId="'#g59InfoModal' + kivalasztottKarakter.id" />
    </div>
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
            kivalasztottKarakter: null,
        };
    },
    methods: {
        reszletKezelo({ id }) {
        this.kivalasztottKarakter = this.G59members.find(member => member.id === Number(id));
    },
        keresJelol(text) {
            if (!this.searchQuery) return text;
            const regex = new RegExp(this.searchQuery, "gi");
            return text.replace(regex, (match) => {
                return `<span class="highlight">${match}</span>`;
            });npm
        },
    },
    computed: {
        KeresettMember() {
            if (!this.searchQuery) {
                return this.G59members; // Az összes kártya megjelenítése
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
/* Scrollbar eltüntetése */
::-webkit-scrollbar {
    display: none;
}

/* Karakter kártyák rácselrendezése */
.karakter-kartyak {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 kártya egy sorban */
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background-color: transparent;
    /* Háttér eltüntetve */
}

.karakter-cim {
    padding: 10px;
    /* Kisebb padding a címnek */
    font-weight: 700;
    font-size: 16px;
    /* Kisebb méret */
    font-family: 'Cinzel', serif;
    color: #fff;
    text-align: center;
    letter-spacing: 1.2px;
    text-transform: uppercase;
}

/* Kártyák egyéni stílusa */
.kartya {
    padding: 10px;
    /* Padding around each card */
    border: 1px solid rgba(255, 255, 255, 0.2);
    /* Border for the box */
    border-radius: 12px;
    /* Rounded corners */
    background-color: rgba(255, 255, 255, 0.1);
    /* Slightly transparent background */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    /* Shadow effect for depth */
}

/* Üveghatású kártya megjelenés */
.karakter-kartya {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    overflow: hidden;
    position: relative;
}

/* Hover-effektus: kártya felemelése és fényhatás */
.karakter-kartya:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 30px rgba(255, 255, 255, 0.3), 0 4px 10px rgba(0, 0, 0, 0.4);
    cursor: url('public/cursor.png'), auto;
}

/* Kép a kártyán (felfelé megnyújtva) */
.karakter-kep {
    width: 100%;
    height: 300px;
    /* Megnövelt magasság a felfelé nyújtáshoz */
    object-fit: cover;
    /* A kép kitöltése torzítás nélkül */
    border-radius: 12px 12px 0 0;
    filter: brightness(0.7);
    transition: filter 0.4s;
}

/* Hover a képen */
.karakter-kartya:hover .karakter-kep {
    filter: brightness(1);
}

/* Kártya cím */
.karakter-cim {
    padding: 15px;
    font-weight: 700;
    font-size: 20px;
    font-family: 'Cinzel', serif;
    color: #fff;
    text-align: center;
    letter-spacing: 1.2px;
    text-transform: uppercase;
}

/* Highlight effektus a találatok kiemelésére */
span.highlight {
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.7));
    color: #fff;
    padding: 2px 4px;
    border-radius: 4px;
}

/* Részlet gomb */
.reszlet-gomb {
    background: linear-gradient(45deg, #ff0000, #cc0000);
    /* Piros gradient */
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.4s, box-shadow 0.4s;
    display: block;
    margin: 15px auto;
}

/* Hover-effektus a gombon */
.reszlet-gomb:hover {
    background: linear-gradient(45deg, #ff4d4d, #ff0000);
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.5);
}

/* Reszponzív beállítások */
@media (max-width: 1200px) {
    .karakter-kartyak {
        grid-template-columns: repeat(3, 1fr);
        /* 3 kártya egy sorban a kisebb képernyőkön */
    }
}

@media (max-width: 768px) {
    .karakter-kartyak {
        grid-template-columns: repeat(2, 1fr);
        /* 2 kártya egy sorban még kisebb képernyőkön */
    }
}

@media (max-width: 576px) {
    .karakter-kartyak {
        grid-template-columns: 1fr;
        /* 1 kártya egy sorban a legkisebb képernyőkön */
    }
}
</style>
