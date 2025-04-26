<template>
  <div class="container">
    <div class="title">
      DynamicComponents
    </div>
    <span @click="setDynamicComponent(componentNames[0])">component 1</span>
    <span @click="setDynamicComponent(componentNames[1])">component 2</span>
    <div class="component-holder">
      <component :is="displayedDynamicComponent"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapMutations, mapGetters } from 'vuex'
import DynamicBlockFirst from "@components/DynamicBlockFirst.vue"
import DynamicBlockSecond from "@components/DynamicBlockSecond.vue"
export default {
  name: "DynamicComponents",
  data() {
    return {
      componentNames: []
    }
  },
  // methods: {
  //   ...mapMutations(['setDynamicComponent']),
  //   ...mapGetters(['getComponentNames'])
  // },
  // created() {
  //   this.componentNames = this.getComponentNames();
  // },
  // computed: {
  //   ...mapState(['displayedDynamicComponent'])
  // },
  components: {
    DynamicBlockFirst,
    DynamicBlockSecond
  }
}
</script>

<style scoped>
span {
  padding: 10px;
  cursor: pointer;
}

span:hover {
  color: red;
}
</style>