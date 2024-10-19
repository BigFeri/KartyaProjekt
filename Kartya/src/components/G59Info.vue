<template>
<div class="modal fade" id="g59InfoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel" v-html="title"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
      </div>
    </div>
  </div>
</div></template>

<script>
export default{
    props:["cím"]
    
}
</script>

<style scoped>
.my-pic{
    border: 2px solid red !important;
    border-radius: 6px;
    margin: 0 10px 0 0 !important;
}
</style>