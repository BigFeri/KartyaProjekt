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
    </div>
</template>


<script>
export default {
    inject: ['searchQuery'],
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
                    band: "-",
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
                    band: "-",
                    foglalkozas: "Zenész/Producer",
                },
                {
                    id: 6,
                    nev: "Andrew Adolph",
                    allias: "Shakewell",
                    band: "-",
                    foglalkozas: "Zenész",
                },
                {
                    id: 7,
                    nev: "Joshua Marchetta",
                    allias: "Chetta",
                    band: "-",
                    foglalkozas: "Zenész",
                },
                {
                    id: 8,
                    nev: "-",
                    allias: "Crystalmeth",
                    band: "-",
                    foglalkozas: "DJ",
                },
                {
                    id: 9,
                    nev: "Max Beck",
                    allias: "-",
                    band: "-",
                    foglalkozas: "Fotós",
                },
                {
                    id: 10,
                    nev: "Adam Mariagga",
                    allias: "-",
                    band: "-",
                    foglalkozas: "Ruha tervező",
                },
            ],
        };
    },
    computed: {
        filteredCharacters() {
            const searchTarget = this.searchQuery
                ? this.searchQuery.toLowerCase()
                : "";

            const filtered = this.G59members.filter((member) => {
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

<style scoped>
.table-container {
    margin: 20px auto;
    max-width: 100%;
    overflow-x: auto;
    /* Enable horizontal scrolling on small screens */
    padding: 0 15px;
    /* Add some padding for smaller screens */
}

.table {
    width: 100%;
    border-collapse: collapse;
    background-color: #2a2a2a;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.table th,
.table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #444;
}

.table th {
    background-color: #1c1c1c;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
}

.table tr:hover {
    background-color: #444;
    /* Highlight row on hover */
}

.table td {
    color: #e0e0e0;
}

.table tr:nth-child(even) {
    background-color: #333;
    /* Stripe effect for even rows */
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {

    .table th,
    .table td {
        padding: 12px;
        font-size: 0.9em;
        /* Smaller font size */
    }

    .table-container {
        padding: 0 10px;
    }
}

@media (max-width: 576px) {

    .table th,
    .table td {
        padding: 10px;
        font-size: 0.85em;
        /* Further reduce font size on smaller screens */
    }

    .table-container {
        padding: 0 5px;
    }

    /* Stack the table headers for very small screens */
    .table {
        display: block;
    }

    .table thead {
        display: none;
    }

    .table tbody tr {
        display: block;
        margin-bottom: 10px;
        border-bottom: 2px solid #444;
    }

    .table tbody tr td {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: none;
    }

    .table tbody tr td:before {
        content: attr(data-label);
        font-weight: bold;
        text-transform: uppercase;
        color: #ffffff;
    }
}
</style>