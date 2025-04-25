<script lang="ts">
export default {
  name: "ComputedValues",
  data() {
    return {
      firstValue: '',
      secondValue: ''
    }
  },
  computed: {
    resultValue() {
      return this.firstValue + " " + this.secondValue;
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="title">
      Computed
    </div>
    <input type="text" v-model="firstValue">
    <input type="text" v-model="secondValue">
    <h2>
      result is {{ resultValue }}
    </h2>
  </div>
</template>