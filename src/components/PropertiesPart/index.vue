<script lang="ts">
export default {
  name: "PropertiesPart",
  props: {
    firstProperty: String,
    secondProperty: String
  }
}
</script>

<template>
  <div class="child-container">
    <h2>
      First property is {{ firstProperty }}
    </h2>
    <h2>
      Second property is {{ secondProperty }}
    </h2>
  </div>
</template>
