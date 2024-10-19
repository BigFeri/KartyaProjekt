<template>
    <div class="karakter-kartyak">
        <G59kartya v-for="member in KeresettMember" :key="member.id" :member="member"
            @reszletekModalKezeles="reszletKezelo">
            <template v-slot:kep>
                <img :src="member.kep" :alt="member.nev" class="karakter-kep" />
            </template>
            <template v-slot:cim>
                <p v-html="keresJelol(member.nev)"></p>
            </template>
            <!-- Részlet gomb hozzáadása -->
            <template v-slot:action>
                <button class="reszlet-gomb" @click="reszletKezelo(member.id)">Részlet</button>
            </template>
        </G59kartya>
    </div>
</template>

<script>
import G59kartya from "@/components/G59kartya.vue";

export default {
    components: {
        G59kartya
    },
    inject: ["searchQuery"],
    data() {
        return {
            G59members: [
                {
                    id: 1,
                    nev: "Ruby da Cherry",
                    kep: "Ruby.jpg",
                    text: "Aristos Petrou vagy Ruby da Cherry a New Orleans-i rapduó $uicideboy$ második fele, és $crim unokatestvére."
                },
                {
                    id: 2,
                    nev: "$crim",
                    kep: "Scrim.jpg",
                    text: "Scott Anthony Arceneaux Jr., szakmai nevén Scrim, amerikai rapper 1989-ben született New Orleansban."
                },
                {
                    id: 3,
                    nev: "Ramirez",
                    kep: "Ramirez.jpg",
                    text: "1998-ban született a kaliforniai San Franciscóban. Ramirez egy Bay Area-i rapper."
                },
                {
                    id: 4,
                    nev: "GERM",
                    kep: "Germ.jpg",
                    text: "Jerry Antoine (született 1991-ben), ismertebb nevén Germ, Georgia állambeli rapper."
                },
                {
                    id: 5,
                    nev: "Night Lovell",
                    kep: "Night Lovell.jpg",
                    text: "Shermar Paul (born May 29, 1997), known as Night Lovell, is a rapper from Ottawa, Canada."
                },
                {
                    id: 6,
                    nev: "Shakewell",
                    kep: "Shakewell.jpg",
                    text: "Andrew Adolph, aka Shakewell, a San Fernando Valley-ből származó amerikai rapper."
                },
                {
                    id: 7,
                    nev: "Chetta",
                    kep: "Chetta.jpg",
                    text: "Chetta a Hu$tle Family-hez és a G59-hez kötődő New Orleans-i rapper."
                },
                {
                    id: 8,
                    nev: "Crystalmeth",
                    kep: "CrystalMeth.jpg",
                    text: "Crystal Meth a $uicideBoy$ producere és DJ-je."
                }
            ],
            kivalasztottMember: null
        }
    },
    methods: {
        reszletKezelo(id) {
            this.kivalasztottKarakter = this.G59members.find(member => member.id === id);
            this.$emit('reszletekModalKezeles', this.kivalasztottKarakter);
        },
        keresJelol(text) {
            if (!this.searchQuery) return text;

            const regex = new RegExp(this.searchQuery, 'gi');
            return text.replace(regex, match => {
                return `<span class="highlight">${match}</span>`;
            })
        }
    },
    computed: {
        KeresettMember() {
            if (!this.searchQuery) {
                return this.G59members; // Az összes kártya megjelenítése
            }
            return this.G59members.filter(g => {
                return g.nev.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    g.text.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        }
    }
}
</script>

<style scoped>
/* Scrollbar eltüntetése */
::-webkit-scrollbar {
    display: none;
}

/* Karakter kártyák rácselrendezése, sorban 4 kártya */
.karakter-kartyak {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 kártya egy sorban */
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background-color: #121212;
    /* Sötétebb háttér */
}

/* Karakter kártyák megjelenése */
.karakter-kartya {
    background: #1b1b1b;
    /* Sötét háttér a kártyáknak */
    border: 1px solid #333;
    border-radius: 12px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);
    /* Erősebb, sötétebb árnyék */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

/* Hover-effektus: kártya felemelése és árnyéka */
.karakter-kartya:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 25px rgba(255, 0, 0, 0.5);
    /* Pirosas árnyék hover közben */
    cursor: url('public/cursor.png'), auto;
}

/* Kép a kártyán (kicsit megnyújtva lefele) */
.karakter-kep {
    width: 100%;
    height: 200px;
    /* Megnövelt magasságú kép */
    object-fit: cover;
    /* Kitölti a kártyát a kép torzítása nélkül */
    border-radius: 8px 8px 0 0;
    filter: brightness(0.6);
    transition: filter 0.3s;
}

/* Hover-effektus a képen */
.karakter-kartya:hover .karakter-kep {
    filter: brightness(1);
}

/* Kártya cím (karakter neve) */
.karakter-cim {
    padding: 15px;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Cinzel', serif;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Kiemelés vérhatással */
span.mark {
    background-color: rgba(255, 0, 0, 0.3);
    color: #fff;
    padding: 4px 6px;
    border-radius: 4px;
}

/* Fényhatás hover-effektus alatt */
.karakter-kartya::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 70%);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.karakter-kartya:hover::after {
    opacity: 1;
}

/* Részlet gomb stílusa */
.reszlet-gomb {
    background-color: #ff0000; /* Piros háttérszín */
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    display: block;
    margin: 10px auto;
}

/* Hover-effektus a gombon */
.reszlet-gomb:hover {
    background-color: #cc0000; /* Sötétebb piros hover szín */
    box-shadow: 0px 4px 15px rgba(255, 0, 0, 0.5); /* Árnyék a hover alatt */
}

/* Reszponzív beállítások: kisebb képernyőkön */
@media (max-width: 1200px) {
    .karakter-kartyak {
        grid-template-columns: repeat(3, 1fr);
        /* 3 kártya egy sorban */
    }
}

@media (max-width: 768px) {
    .karakter-kartyak {
        grid-template-columns: repeat(2, 1fr);
        /* 2 kártya egy sorban */
    }
}

@media (max-width: 576px) {
    .karakter-kartyak {
        grid-template-columns: 1fr;
        /* 1 kártya egy sorban mobilon */
    }
}
</style>
