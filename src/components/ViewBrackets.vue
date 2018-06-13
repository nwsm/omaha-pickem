<template>
  <div>
    <h2>All Brackets</h2>
    <template v-for="bracket in brackets">
      <router-link :to="{ name: 'Bracket', params: {bracket: bracket } }">{{bracket.data.f3 ? bracket.data.f3 : bracket.data.f2}}</router-link>
    </template>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'ViewBrackets',
  data () {
    return {
      brackets: []
    }
  },
  mounted: function() {
    this.getData()
  },
  methods: {
    getData: async function() {
      let vm = this
      api.getBrackets().then(function(r) {
        vm.brackets=r
      })
    }
  }
}
</script>

<style>

</style>
