<template>
  <div class="container">
    <div class="title">
      Watchers
    </div>
    <input type="text" v-model="inputData">
    <h2>
      {{ name }}
    </h2>
    <h2>
      Variable changed {{ counter }} times, value is {{ inputData }}
    </h2>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inputData: '',
      counter: 0
    }
  },
  watch: {
    inputData() {
      this.counter++;
    }
  }
}
</script>
