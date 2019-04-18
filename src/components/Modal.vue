<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Spin To Win!</h4>
        </div>

        <div class="modal-body"></div>

        <div class="modal-footer justify-content-center">
          <button class="btn" @click="onToggleModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "modal",
  methods: mapActions(["onToggleModal"])
};
</script>

<style scoped>
.modal {
  display: flex;
  margin: 25vh;
}
.btn {
  width: 150px;
  background-color: #6aaeaa;
  align-self: center;
}
</style>

