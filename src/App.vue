<template>
  <div id="app">
<b-navbar toggleable="md" type="dark" variant="primary">

  <router-link to='/Main'><b-navbar-brand>Omaha Pickem</b-navbar-brand></router-link>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto" v-if="$store.state.user">

      <b-nav-item-dropdown :text="$store.state.user.name" right>
        <b-dropdown-item v-on:click="logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <br>
    <router-view/>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  methods: {
    logout: function(){
      this.$store.commit('updateUser',null)
      this.$router.replace('/')
    }
  },
  computed: {
    currentUser: function(){
      return firebase.auth().currentUser;
    }
  },
  mounted: function() {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
