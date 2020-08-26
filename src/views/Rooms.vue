<template>
  <div class="hello">
    <AddRoomDialog v-show="showModal" @close="closeModal()" />
    <h1>Rooms</h1>
    <button class="round-button" @click="openModal()">
      <BaseIcon name="plus" color="white" class="round-icon" />
    </button>
    <template v-if="rooms.length>0">
      <div v-for="room in rooms" :key="room._id">
        <h3>{{room.name}}</h3>
        <p>Creator of the room : {{room.creator}}</p>
        <p v-if="room.attendees">Number of attendent : {{room.attendees.length}}</p>
        <router-link v-if="room._id" :to="{name: 'Room', params: {id: room._id}}">Enter {{room._id}}</router-link>
      </div>
    </template>
    <div v-else>No rooms available</div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import AddRoomDialog from "@/components/AddRoomDialog.vue";

import api from "@/services/api.js";

export default {
  name: "Rooms",
  components: {
    BaseIcon,
    AddRoomDialog
  },
  data() {
    return {
      showModal: false,
      rooms: [
        {
          id: 1,
          creator: "kirian",
          attendent: ["kirian", "théo"]
        }
      ]
    };
  },
  mounted() {
    api.getRooms().then(response => {
      this.rooms = response.data.rooms;
    });
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitForm() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.round-button {
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition-duration: 0.4s;
  /* background-color: #2c3e50; */
  background-color: $primary;

  z-index: 1;
}
.round-button:hover {
  /* filter: brightness(85%); */
  /* opacity: 80%; */
}
</style>
