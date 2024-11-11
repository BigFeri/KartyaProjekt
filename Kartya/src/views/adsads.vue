<template>
    <table>
        <tr>
            <td>
                <img src="https://via.placeholder.com/150" alt="Kép a hoverre">
                Ráviszem az egeret
            </td>
            <td>
                <img src="https://via.placeholder.com/150" alt="Kép a hoverre">
                Ráviszem az egeret
            </td>
        </tr>
    </table>

</template>

<script></script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

td {
    width: 150px;
    height: 150px;
    border: 1px solid #ddd;
    text-align: center;
    vertical-align: middle;
    position: relative;
    /* Ahhoz kell, hogy a képet pozicionálni tudjuk */
    background-color: lightgray;
}

/* Alapértelmezés szerint a kép rejtve van */
td img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    /* A kép alapból rejtve van */
    transition: opacity 0.3s ease;
    /* Zökkenőmentes áttűnés */
}

/* Ha az egér a td-n van, a kép megjelenik */
td:hover img {
    opacity: 1;
}
</style>