<template>
  <div class="col">
    <div class="card">
      <slot name="kep"></slot>
      <div class="card-body">
        <!-- Név slot elhelyezése a kép és a gomb között -->
        <slot name="nev"></slot>
        <!-- Dinamikus modális target -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#g59InfoModal' + id"
          @click="onClickReszletek">
          Részletek
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    onClickReszletek() {
      this.$emit("reszletekModalKezeles", { id: this.id });
    },
  }
};
</script>
