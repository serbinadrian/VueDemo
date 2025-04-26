<template>
  <div class="container">
    <div class="title">
      actions
    </div>
    <input type="text" v-model="credentials.login">
    <input type="text" v-model="credentials.password">
    <button @click="signIn(credentials)">submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "SignIn",
  data() {
    return {
      credentials: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['signIn'])
  }
}
</script>
