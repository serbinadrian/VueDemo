<template>
  <div class="container">
    <div class="title">
      Props
    </div>
    <input type="text" v-model="param1">
    <input type="text" v-model="param2">
    <PropertiesPart :first-property="param1" :second-property="param2" />
  </div>
</template>

<script>
import PropertiesPart from '@components/PropertiesPart.vue'
export default {
  data() {
    return {
      param1: '',
      param2: ''
    }
  },
  components: {
    PropertiesPart
  }
}
</script>
