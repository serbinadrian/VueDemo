<template>
  <div class="container">
    <div class="title">
      Conditional
    </div>
    <div class="status">
      {{isVisible}}
    </div>
    <div class="control">
      <button @click="isVisible = !isVisible; alertMessage()"> <!-- v-on:click// :class="title : isVisible"-->
        toggle
      </button>
    </div>
    <div v-if="isVisible" class="title">
      DynamicComponents
    </div>
    <div v-show="isVisible" class="title">
      DynamicComponents
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data(){
    return {
      isVisible: false
    }
  },
  methods: {
    alertMessage(){
      this.alertMessage2();
    },
    alertMessage2(){
      alert();
    },
  }
}
</script>

<style scoped>

</style>