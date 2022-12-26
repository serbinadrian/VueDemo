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

import ListsRendering from './list/ListsRendering.vue'
import ConditionalRendering from './conditionals/ConditionalRendering.vue'
import Watchers from './watch/WatchersComponent.vue'
import ComputedValues from './computed/ComputedValues.vue'
import Properties from './props/PropertiesComponent.vue'
import DynamicComponents from './dynamic/DynamicComponents.vue'
import SignIn from './actions/SignIn.vue'

export default {
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
