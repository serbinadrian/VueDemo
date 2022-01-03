<template>
  <div class="home">
    <ListsRendering/>
    <ConditionalRendering/>
    <Watchers/>
    <ComputedValues/>
    <Properties/>
    <DynamicComponents/>
    <SignIn/>
  </div>
</template>

<script>

import ListsRendering from './ListsRendering.vue'
import ConditionalRendering from './ConditionalRendering.vue'
import Watchers from './Watchers.vue'
import ComputedValues from './ComputedValues.vue'
import Properties from './Properties.vue'
import DynamicComponents from './DynamicComponents.vue'
import SignIn from './SignIn.vue'

export default {
  name: 'Home',
  components: {
    ListsRendering,
    ConditionalRendering,
    Watchers,
    ComputedValues,
    Properties,
    DynamicComponents,
    SignIn
  }
}
</script>

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
