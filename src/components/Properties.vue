<template>
  <div class="container">
    <div class="title">
      Props
    </div>
    <input type="text" v-model="param1">
    <input type="text" v-model="param2">
    <childComponent :first-propery="param1" :second-property="param2"/>
  </div>
</template>

<script>
import childComponent from './PropertiesPart.vue'
export default {
  name: "Properties",
  data(){
    return {
      param1: '',
      param2: ''
    }
  },
  components: {
    childComponent
  }
}
</script>

<style scoped>

</style>