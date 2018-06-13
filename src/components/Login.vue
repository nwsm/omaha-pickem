<template>
  <div class="login">
    <h3>Sign In</h3>
    <b-button v-on:click="signInWithGoogle" variant="primary">Sign In With Google</b-button>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'Login',
    data: function() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signInWithGoogle: function() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user
        }).catch(err => alert(err))
      },
      signInWithEmail: function() {
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(
          (user) => {
            this.$router.replace('/')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
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
