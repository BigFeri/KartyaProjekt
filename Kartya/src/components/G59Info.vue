<template>
  <div class="modal fade" id="g59InfoModal" tabindex="-1" aria-labelledby="reszletekModalKezeles" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="reszletekModalKezeles">{{ nev }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ text }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#g59InfoModal' + id">
            Bezárás</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nev", "text", "modalId"], // Átadjuk a karakter nevét, szövegét és a modális ID-ját
};
</script>
