<template>
  <div>
    <router-link to='/Main'><p>Your Bracket</p></router-link>
    <h2>All Brackets</h2>
    <b-btn v-b-modal.modal1 variant="primary">Quick Stats</b-btn>

    <b-modal id="modal1" title="Quick Stats" ok-only="true" ok-title="close">
      <b-table show-empty :items="stats" :fields="modalFields" sort-by="appearances" sort-desc="true">

      </b-table>
    </b-modal>
    <b-table show-empty
             :items="brackets"
             :fields="fields"
             :sort-compare="sortcompare"
    >
      <template slot="data.username" slot-scope="data">
        <router-link :to="{ name: 'Bracket', params: {bracketId: data.item['id'] } }">{{data.item.data.username}}</router-link>
        </template>
    </b-table>
  </div>
</template>
<script>
import api from '../services/api'

export default {
  name: 'ViewBrackets',
  data () {
    return {
      brackets: [],
      stats:[],
      modalFields: [
        {
          key: 'team',
          sortable: true,
          label: 'Team'
        },
        {
          key: 'champion',
          sortable: true,
          label: 'Champ'
        },
        {
          key: 'runnerUp',
          sortable: true,
          label: '2nd'
        },
        {
          key: 'appearances',
          sortable: true,
          label: 'In Final'
        }
      ],
      fields: [
        {
          key: 'data.username',
          sortable: true,
          label: 'Username'
        },
        {
          key: 'data.bracketFinal',
          sortable: true,
          label: 'Champion'
        },
        {
          key: 'data.runnerUp',
          sortable: true,
          label: 'Runner Up'
        }
      ]
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
        vm.calculateStats(r)
      })
    },
    sortcompare: function(a,b,key) {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)
      } else {
        key = key.substring(5,key.length)
        return a['data'][key].localeCompare(b['data'][key], undefined, {
          numeric: true
        })
      }
    },
    calculateStats: function(ar) {
      var stats = {'Arkansas':[0,0],'Oregon St':[0,0],'Mississippi St':[0,0],'Florida':[0,0],'Texas Tech':[0,0],'Washington':[0,0],'North Carolina':[0,0],'Texas':[0,0]}
      for(var i = 0; i<ar.length; i++){
        stats[ar[i].data.bracketFinal][0]++
        stats[ar[i].data.runnerUp][1]++
      }
      for(var property in stats){
        this.stats.push({
          team: property,
          champion: stats[property][0],
          runnerUp: stats[property][1],
          appearances: stats[property][0] + stats[property][1]
        })
      }
      console.log(this.stats)
    }
  }
}
</script>

<style>

</style>
