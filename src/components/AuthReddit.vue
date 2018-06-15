<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../services/api'
export default {
  data: function() {
    return {

    }
  },
  mounted: function() {
    var vm = this

    var params = this.$route.hash.substr(1).split('&').reduce(function (result, item) {
      var parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});

    var token = 'bearer '+params.access_token
    console.log(token)
    axios.get("https://oauth.reddit.com/api/v1/me",{
      headers: {
        "Authorization": token
      }
    }).then(function(r) {
      vm.$store.commit('updateUser',r.data)
      vm.$router.replace('/Main')
    }).catch(function(e) {
      vm.$router.replace('/')
    })

  }
}
</script>

<style>

</style>
