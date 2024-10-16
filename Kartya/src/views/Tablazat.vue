<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <table class="col-md-8">
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
                    <tr v-for="(member, i) in G59members" :key="i">
                        <th scope="row">{{ member.id }}</th>
                        <td>{{ member.nev }}</td>
                        <td>{{ member.allias }}</td>
                        <td>{{ member.band }}</td>
                        <td>{{ member.foglalkozas }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            G59members: [
                {
                    id: 1,
                    nev: "Aristos Petrou",
                    allias: "Ruby da Cherry",
                    band: "$uicideboy$",
                    foglalkozas: "Zenész",
                },
                {
                    id: 2,
                    nev: "Scott Anthony Arceneaux Jr.",
                    allias: "$crim",
                    band: "$uicideboy$",
                    foglalkozas: "Zenész/Producer",
                },
                {
                    id: 3,
                    nev: "Ivan Ramirez",
                    allias: "Ramirez",
                    band: "",
                    foglalkozas: "Zenész",
                },
                {
                    id: 4,
                    nev: "Jerry Antoine",
                    allias: "GERM ",
                    band: " Shameless Money Gang",
                    foglalkozas: "Zenész",
                },
                {
                    id: 5,
                    nev: "Shermar Cuba Paul",
                    allias: "Night Lovell",
                    band: "",
                    foglalkozas: "Zenész",
                },
                {
                    id: 6,
                    nev: "Andrew Adolph",
                    allias: "Shakewell",
                    band: "",
                    foglalkozas: "Zenész",
                },
                {
                    id: 7,
                    nev: "Joshua Marchetta",
                    allias: "Chetta",
                    band: "",
                    foglalkozas: "Zenész",
                },
                {
                    id: 8,
                    nev: "",
                    allias: "Crystalmeth",
                    band: "",
                    foglalkozas: "DJ",
                },
                {
                    id: 9,
                    nev: "Max Beck",
                    allias: "",
                    band: "",
                    foglalkozas: "Fotós",
                },
                {
                    id: 10,
                    nev: "Adam Mariagga",
                    allias: "",
                    band: "",
                    foglalkozas: "Ruha tervező",
                },
            ],
        };
    },
    computed: {
        filteredCharacters() {
            const searchTarget = this.searchedWord
                ? this.searchedWord.toLowerCase()
                : "";

            const filtered = this.allCharacter.filter((character) => {
                return (
                    member.nev.toLowerCase().includes(searchTarget) ||
                    member.allias.toLowerCase().includes(searchTarget) ||
                    member.band.toLowerCase().includes(searchTarget) ||
                    member.foglalkozas.toLowerCase().includes(searchTarget)
                );
            });



            return filtered;
        },
    },

};
</script>

<style scoped></style>