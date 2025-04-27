<script lang="ts">
import ListsRendering from '@components/ListsRendering/index.vue'
import ConditionalRendering from '@components/ConditionalRendering/index.vue'
import Watchers from '@components/Watchers/index.vue'
import ComputedValues from '@components/ComputedValues/index.vue'
import Properties from '@components/Properties/index.vue'
// import DynamicList from '@components/DynamicList/index.vue'
import SignIn from '@components/SignIn/index.vue'

export default {
  components: {
    ListsRendering,
    ConditionalRendering,
    Watchers,
    ComputedValues,
    Properties,
    // DynamicList,
    SignIn
  }
}
</script>

<template>
  <div class="home">
    <ListsRendering/>
    <ConditionalRendering/>
    <Watchers/>
    <ComputedValues/>
    <Properties/>
    <!-- <DynamicList/> -->
    <SignIn/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

