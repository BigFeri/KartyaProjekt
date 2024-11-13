<template>
  <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="reszletekModalKezeles" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content custom-modal-content">
        <div class="modal-header custom-modal-header">
          <h1 class="modal-title fs-5 custom-modal-title" id="reszletekModalKezeles">{{ nev }}</h1>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body custom-modal-body">
          <p class="custom-modal-text">{{ text }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn custom-btn-close" data-bs-dismiss="modal">
            Bezárás
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nev", "text", "modalId"],
};
</script>

<!-- Google Fonts importálás -->



<style scoped>
/* Modal tartalom */
.custom-modal-content {
  background-color: #1c1c1c;
  /* Sötét háttér */
  border: none;
  border-radius: 10px;
}

.custom-modal-header {
  background-color: #2d2d2d;
  /* Sötétebb teteje */
  color: #fff;
  border-bottom: 2px solid #444;
}

.custom-modal-title {
  font-family: 'Impact', sans-serif;
  /* Erőteljes betűtípus */
  font-size: 1.5rem;
  text-transform: uppercase;
  /* Nagybetűs */
  color: #ff4757;
  /* Kiemelkedő piros szín */
}

.custom-modal-body {
  color: #ddd;
  /* Világos szöveg */
  font-family: 'Rock Salt', cursive;
  /* Suicideboys tematikához illeszkedő kézírásos stílus */
  font-size: 1rem;
}

.custom-modal-text {
  font-family: 'Rock Salt', cursive;
  /* Kézírásos stílus a szöveghez */
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ccc;
  /* Világos szöveg, hogy jól olvasható legyen a sötét háttéren */
}

.custom-btn-close {
  background-color: transparent;
  color: #ff4757;
  /* Piros gomb */
  border: 1px solid #ff4757;
  /* Piros szegély */
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
}

.custom-btn-close:hover {
  background-color: #ff4757;
  /* Piros háttér a hover-re */
  color: #fff;
}

.btn-close {
  color: #ff4757;
  /* Piros bezárás gomb */
}

.modal-footer {
  border-top: 2px solid #444;
}

.modal-body {
  background-color: #2d2d2d;
}
</style>
