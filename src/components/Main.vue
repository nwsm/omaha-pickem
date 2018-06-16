<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <router-link to='/ViewBrackets'><p>{{content}}</p></router-link>
        </b-col>
      </b-row>
    </b-container>
    <h2>Your Bracket:</h2>
    <b-button :disabled="page<=1" @click="page--"> &lt; </b-button>
    <b-button @click="save" :disabled="started" v-if="!saving"> Save</b-button>
    <b-button :disabled="page>=3" @click="page++"> &gt; </b-button>
    <div class="brackets">
      <one v-show="page==1" @update="oneUpdate" :initialGames="bracketOne" :editable="true"></one>
      <two v-show="page==2" @update="twoUpdate" :initialGames="bracketTwo" :editable="true"></two>
      <final v-show="page==3" @update="finalUpdate" :initialWinner="bracketFinal" :editable="true"></final>
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
  components:{
    one,two,final
  },
  name: 'Main',
  mounted: function() {
    var vm = this
    api.findBracket(this.$store.state.user.id).then(function(r){
      if(r[0]){
        vm.bracketOne = r[0].data.bracketOne
        vm.bracketTwo = r[0].data.bracketTwo
        vm.bracketFinal = r[0].data.bracketFinal
        vm.bracketId = r[0].id
        vm.$store.commit('setBracketOneWinner',vm.bracketOne[5].winner)
        vm.$store.commit('setBracketTwoWinner',vm.bracketTwo[5].winner)
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
      bracketId: null,
      saving: false
    }
  },
  computed: {
    started() {
      return Date.now() > 1529175600000
    }
  },
  methods: {
    save: function() {
      var vm = this
      if(vm.saving)
        return
      vm.saving=true
      this.$children[1].em();
      this.$children[2].em();
      this.$children[3].em();
      api.postBracket({
        bracketOne: vm.bracketOne,
        bracketTwo: vm.bracketTwo,
        bracketFinal: vm.bracketFinal,
        uid: vm.$store.state.user.id,
        username: vm.$store.state.user.name
      },vm.bracketId).then(function(r){
        vm.saving=false
        if(r[0].id){
          vm.bracketId=r[0].id
        }
      })
      alert('Saving!')
    },
    oneUpdate: function(v){
      this.bracketOne=v
    },
    twoUpdate: function(v){
      this.bracketTwo=v
    },
    finalUpdate: function(v){
      this.bracketFinal=v
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brackets{
  padding-top: 2em;
}
</style>
