<script lang="ts">
import propertiesPart from '@components/PropertiesPart/index.vue';
export default {
  data() {
    return {
      param1: '',
      param2: ''
    }
  },
  components: {
    propertiesPart
  }
}
</script>

<template>
  <div class="container">
    <div class="title">
      Props
    </div>
    <input type="text" v-model="param1">
    <input type="text" v-model="param2">
    <propertiesPart :first-property="param1" :second-property="param2" />
  </div>
</template>