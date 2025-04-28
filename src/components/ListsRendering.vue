<template>
  <div class="container">
    <div class="title">
      List
    </div>
    <div class="list-item" v-for="(singleObject) in listObject" :key="singleObject.id">
      <h2>{{ singleObject.name }}</h2>
      <h3>
        ID is: {{ singleObject.id }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ListsRendering",
  data() {
    return {
      listObject: [
        {
          id: 0,
          name: "Element 1"
        },
        {
          id: 1,
          name: "Element 2"
        },
        {
          id: 2,
          name: "Element 3"
        }
      ]
    }
  }
}
</script>
