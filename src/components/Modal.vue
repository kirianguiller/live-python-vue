<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <h3>
            <slot name="header">This is the default tile!</slot>
          </h3>
          <button type="button" class="btn-close" @click="close()" aria-label="Close modal">x</button>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">I'm the default body!</slot>
        </section>
        <footer v-if="footer" class="modal-footer">
          <slot name="footer">
            I'm the default footer!
            <button
              type="button"
              class="btn-deepblue"
              @click="close()"
              aria-label="Close modal"
            >Close me!</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "modal",
  props: ["footer"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>


<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #2c3e50;
  justify-content: space-between;
  align-items: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 3px;
  cursor: pointer;
  font-weight: bold;
  color: #2c3e50;
  background: transparent;
}

.btn-deepblue {
  color: white;
  background: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>