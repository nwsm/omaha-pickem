<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <router-link to='/ViewBrackets'><h2>{{content}}</h2></router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Main',
  data () {
    return {
      content: 'View All Brackets'
    }
  },
  methods: {

  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
