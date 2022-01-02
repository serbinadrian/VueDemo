<template>
  <div class="container">
    <div class="status">
      {{isVisible}}
    </div>
    <div class="control">
      <button @click="isVisible = !isVisible">
        toggle
      </button>
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
  }
}
</script>

<style scoped>

</style>