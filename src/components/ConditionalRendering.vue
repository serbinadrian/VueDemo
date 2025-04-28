<template>
  <div class="container">
    <div class="title">
      Conditional
    </div>
    <div class="status">
      {{ isVisible }}
    </div>
    <div class="control">
      <button @click="changeVisibility()">
        <!-- v-on:click// :class="title : isVisible"-->
        toggle
      </button>
    </div>
    <div v-if="isVisible" class="title">
      This string is just rendered.
    </div>
    <br>
    <div v-show="isVisible" class="title">
      This string has always been here but hidden.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ConditionalRendering",
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    alertMessage() {
      this.alertMessage2();//you can call inner methods 
    },
    alertMessage2() {
      alert();
    },
    changeVisibility() {
      this.isVisible = !this.isVisible;
      
      this.alertMessage();
    }
  }
}
</script>

<style scoped>
.title {
  font-size: medium;
}
</style>