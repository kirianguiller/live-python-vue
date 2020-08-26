<template>
  <Modal :footer="false" v-on="$listeners">
    <template v-slot:header>Create a new room</template>
    <template v-slot:body>
      <div id="create-room-form">
        <label for="name">Name :</label>
        <input
          type="text"
          id="create-room-form__name"
          v-model="newRoom.name"
          placeholder="Enter a name for your room"
        />
        <br />
        <label for="creator">Creator :</label>
        <input
          type="text"
          id="create-room-form__creator"
          v-model="newRoom.creator"
          placeholder="Enter your name"
        />
        <hr />
        <button id="create-room-form__submit" @click.prevent="submitForm()">create</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

import api from "@/services/api.js";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      newRoom: {
        name: null,
        creator: null,
      },
    };
  },
  methods: {
    submitForm() {
      api
        .createRoom(this.newRoom)
        .then((response) => {
          this.$emit("close");
          console.log(response)
          this.$router.push({name: "Room", params: {id: response.data.room._id}})
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>