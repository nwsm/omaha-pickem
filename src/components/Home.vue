<template>
  <div class="login">
    <b-button v-on:click="signInWithReddit" variant="primary">Sign In With Reddit</b-button>
    <router-link to="ViewBrackets"><b-button variant="primary">View All Brackets</b-button></router-link>
  </div>
</template>

<script>
  import firebase from 'firebase'
    let url = 'https://serene-kepler-9a1365.netlify.com'
    //let url = 'http://localhost:8080'

  export default {
    name: 'Home',
    data: function() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signInWithReddit: function () {
        window.location = "https://www.reddit.com/api/v1/authorize?client_id=ZmJX96wHgxC4Fg&response_type=token&state=kek&redirect_uri="+url+"&scope=identity"
      }
    },
    mounted: function() {
      if(firebase.auth().currentUser){
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
p {
  padding: 1em;
  font-size: 13px;
}
h3 {
  padding: 1em;
}
</style>
