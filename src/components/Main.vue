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
    <b-button @click="save"> Save </b-button>
    <b-button :disabled="page>=3" @click="page++"> &gt; </b-button>
    <div class="brackets">
      <one v-show="page==1"></one>
      <two v-show="page==2"></two>
      <final v-show="page==3"></final>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import one from './One.vue'
import two from './Two.vue'
import final from './Final.vue'
export default {
  components:{
    one,two,final
  },
  name: 'Main',
  data () {
    return {
      content: 'View All Brackets',
      page: 1
    }
  },
  methods: {
    save: function() {

    }
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
