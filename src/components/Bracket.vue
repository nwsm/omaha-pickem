<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <router-link to='/ViewBrackets'><p>{{content}}</p></router-link>
        </b-col>
      </b-row>
    </b-container>
    <h2>Bracket: {{username}}</h2>
    <b-button :disabled="page<=1" @click="page--"> &lt; </b-button>
    <b-button :disabled="page>=3" @click="page++"> &gt; </b-button>
    <div class="brackets">
      <one v-show="page==1" :initialGames="bracketOne" :editable="false"></one>
      <two v-show="page==2" :initialGames="bracketTwo" :editable="false"></two>
      <final v-show="page==3" :initialWinner="bracketFinal" :editable="false"></final>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import one from './One.vue'
import two from './Two.vue'
import final from './Final.vue'
import api from '../services/api'
export default {
  props:['bracketId'],
  components:{
    one,two,final
  },
  name: 'Bracket',
  mounted: function() {
    var vm = this
    api.getBracket(this.bracketId).then(function(r){
      if(r){
        vm.bracketOne = r.data.bracketOne
        vm.bracketTwo = r.data.bracketTwo
        vm.bracketFinal = r.data.bracketFinal
        vm.bracketId = r.id
        vm.$store.commit('setBracketOneWinner',vm.bracketOne[5].winner)
        vm.$store.commit('setBracketTwoWinner',vm.bracketTwo[5].winner)
        vm.username = r.data.username
      }
    })
  },
  data () {
    return {
      content: 'View All Brackets',
      page: 1,
      bracketOne: [{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null}],
      bracketTwo: [{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null}],
      bracketFinal: null,
      username: null
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
.brackets{
  padding-top: 2em;
}
</style>
