<template>
  <div class="col">
    <div class="card custom-card">
      <slot name="kep"></slot>
      <div class="card-body custom-card-body">
        <slot name="nev"></slot>
        <button
          type="button"
          class="btn custom-btn"
          data-bs-toggle="modal"
          :data-bs-target="'#g59InfoModal' + id"
          @click="onClickReszletek()"
        >
          Részletek
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "modalId"], // Added modalId prop
  methods: {
    onClickReszletek() {
      this.$emit("reszletekModalKezeles", { id: this.id });
    },
  },
};
</script>



<style scoped>
/* Card stílus */
.custom-card {
  background-color: #1c1c1c; /* Sötét háttér */
  border: 2px solid #444; /* Szürke szegély */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Árnyék a kártya körül */
  transition: all 0.3s ease-in-out;
}

.custom-card:hover {
  transform: translateY(-5px); /* Kicsit felugrik hover esetén */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7); /* Erősebb árnyék hoverre */
}

/* Kártya tartalom */
.custom-card-body {
  color: #fff; /* Fehér szöveg */
  font-family: 'Rock Salt', cursive; /* Kézírásos betűtípus */
  text-align: center;
}

/* Gomb stílus */
.custom-btn {
  background-color: #ff4757; /* Piros háttér */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'Rock Salt', cursive; /* Kézírásos betűtípus */
  font-size: 1.1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.custom-btn:hover {
  background-color: #e84118; /* Sötétebb piros hover esetén */
  transform: scale(1.05); /* Gomb nagyobbodás hoverre */
}

/* Slotok */
.custom-card-body slot {
  font-size: 1.3rem;
  font-weight: bold;
  color: #f1f1f1; /* Világos szöveg */
  margin-bottom: 15px;
}

/* A gomb és egyéb elemek közötti távolságok */
.custom-card-body {
  padding: 20px;
}

/* Responsív dizájn (opcionális, de szép) */
@media (max-width: 768px) {
  .custom-card-body {
    padding: 15px;
  }

  .custom-btn {
    font-size: 1rem; /* Kis képernyőn kisebb gomb méret */
  }
}
</style>
