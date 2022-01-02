<template>
  <div class="child-container">
    <h2>
      First property is {{firstPropery}}
    </h2>
    <h2>
      Second property is {{secondProperty}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "PropertiesPart",
  props: {
    firstPropery: String,
    secondProperty: String
  }
}
</script>

<style scoped>

</style>