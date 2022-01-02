<template>
  <div class="container">
    <input type="text" v-model="firstValue">
    <input type="text" v-model="secondValue">
    <h2>
      result is {{resultValue}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "ComputedValues",
  data(){
    return{
      firstValue: '',
      secondValue: ''
    }
  },
  computed: {
    resultValue(){
      return this.firstValue + " " + this.secondValue;
    }
  }
}
</script>

<style scoped>

</style>