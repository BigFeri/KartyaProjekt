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
                <button class="reszlet-gomb" @click="reszletKezelo(member.id)"
                >Részlet</button>
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
            console.log("Hello");
            
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

/* Karakter kártyák rácselrendezése */
.karakter-kartyak {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background-color: #121212;
}

/* Üveghatású kártya megjelenés */
.karakter-kartya {
    background: rgba(255, 255, 255, 0.1); /* Áttetsző fehér */
    backdrop-filter: blur(10px); /* Üveghatás (elmosás) */
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px; /* Nagyobb lekerekítés */
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); /* Erősebb, elmosott árnyék */
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
    height: 300px; /* Megnövelt magasság a felfelé nyújtáshoz */
    object-fit: cover; /* A kép kitöltése torzítás nélkül */
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

/* Fényhatás hover alatt */
.karakter-kartya::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.karakter-kartya:hover::after {
    opacity: 1;
}

/* Részlet gomb */
.reszlet-gomb {
    background: linear-gradient(45deg, #ff0000, #cc0000); /* Piros gradient */
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
    background: linear-gradient(45deg, #ff4d4d, #ff0000); /* Világosabb piros hover közben */
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.5);
}

/* Reszponzív beállítások */
@media (max-width: 1200px) {
    .karakter-kartyak {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .karakter-kartyak {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .karakter-kartyak {
        grid-template-columns: 1fr;
    }
}

</style>
