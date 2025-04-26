<template>
  <div class="home">
    <ListsRendering />
    <ConditionalRendering />
    <Watchers />
    <ComputedValues />
    <Properties />
    <DynamicList />
    <SignIn />
  </div>
</template>

<script lang="ts">
import ListsRendering from "@components/ListsRendering.vue";
import ConditionalRendering from "@components/ConditionalRendering.vue";
import Watchers from "@components/Watchers.vue";
import ComputedValues from "@components/ComputedValues.vue";
import Properties from "@components/Properties.vue";
import DynamicList from "@components/DynamicList.vue";
import SignIn from "@components/SignIn.vue";

export default {
  components: {
    ListsRendering,
    ConditionalRendering,
    Watchers,
    ComputedValues,
    Properties,
    DynamicList,
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
