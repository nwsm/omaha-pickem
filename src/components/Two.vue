<template>
    <div>
      <h3>Bracket 2</h3>
      <main style="justify-content: center;">
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="ark">Arkansas</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="tex">Texas</li>

            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="tec">Texas Tech</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="flo">Florida</li>

            <li>&nbsp;</li>

            <li class="game">&nbsp;</li>
            <li>&nbsp;</li>
            <li class="game">&nbsp;</li>

            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="threeTop">{{games[0].loser}}&nbsp;</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="threeBottom">{{games[1].loser}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="fourTop">{{games[0].winner}}&nbsp;</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="fourBottom">{{games[1].winner}}&nbsp;</li>

            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="fiveTop">{{games[3].loser}}&nbsp;</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="fiveBottom">{{games[2].winner}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="sixTop">{{games[3].winner}}&nbsp;</li>

            <li>&nbsp;</li>

            <li class="game game-bottom teamHover" @click="sixBottom">{{games[4].winner}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-bottom teamHover">{{games[5].winner}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
      </main>
    </div>
</template>

<script>
export default {
  name: 'One',
  props: ['initialGames','editable'],
  data: function() {
    return {

    }
  },
  mounted: function() {

  },
  computed: {
    games: function(){
      return this.initialGames
    }
  },
  methods: {
    em: function(){
      this.$emit('update',this.games)
    },
    propLoss: function(team,start){
      if(!team)
        return
      for(let i=start; i<this.games.length; i++){
        if(this.games[i].winner==team)
          this.games[i].winner=null
        if(this.games[i].loser==team)
          this.games[i].loser=null
      }
    },
    ark: function() {
      if(!this.editable) return
      this.propLoss('Texas',1)
      this.propLoss('Arkansas',1)
      this.games[0].loser = 'Texas'
      this.games[0].winner = 'Arkansas'
    },
    tex: function() {
      if(!this.editable) return
      this.propLoss('Texas',1)
      this.propLoss('Arkansas',1)
      this.games[0].loser = 'Arkansas'
      this.games[0].winner = 'Texas'
    },
    tec: function() {
      if(!this.editable) return
      this.propLoss('Florida',2)
      this.propLoss('Texas Tech',2)
      this.games[1].loser = 'Florida'
      this.games[1].winner = 'Texas Tech'
    },
    flo: function() {
      if(!this.editable) return
      this.propLoss('Texas Tech',2)
      this.propLoss('Florida',2)
      this.games[1].loser = 'Texas Tech'
      this.games[1].winner = 'Florida'
    },
    threeTop: function() {
      if(!this.editable) return
      this.propLoss(this.games[2].winner,3)
      this.propLoss(this.games[2].loser,3)
      this.games[2].winner = this.games[0].loser
    },
    threeBottom: function() {
      if(!this.editable) return
      this.propLoss(this.games[2].winner,3)
      this.propLoss(this.games[2].loser,3)
      this.games[2].winner = this.games[1].loser
    },
    fourTop: function() {
      if(!this.editable) return
      this.propLoss(this.games[3].winner,4)
      this.propLoss(this.games[3].loser,4)
      this.games[3].winner = this.games[0].winner
      this.games[3].loser = this.games[1].winner
    },
    fourBottom: function() {
      if(!this.editable) return
      this.propLoss(this.games[3].winner,4)
      this.propLoss(this.games[3].loser,4)
      this.games[3].winner = this.games[1].winner
      this.games[3].loser = this.games[0].winner
    },
    fiveTop: function() {
      if(!this.editable) return
      this.propLoss(this.games[4].winner,4)
      this.propLoss(this.games[4].loser,4)
      this.games[4].winner = this.games[3].loser
    },
    fiveBottom: function() {
      if(!this.editable) return
      this.propLoss(this.games[4].winner,4)
      this.propLoss(this.games[4].loser,4)
      this.games[4].winner = this.games[2].winner
    },
    sixTop: function() {
      if(!this.editable) return
      this.games[5].winner = this.games[3].winner
      this.$store.commit('setBracketTwoWinner',this.games[5].winner)
    },
    sixBottom: function() {
      if(!this.editable) return
      this.games[5].winner = this.games[4].winner
      this.$store.commit('setBracketTwoWinner',this.games[5].winner)
    }
  }
}
</script>

<style>
  main, ul {
    display:flex;
  }

  ul {
    flex-direction:column;
    width: 200px;
    list-style:none;
    padding:0;
  }

  .game + li {
    flex-grow:1;
  }

  li:first-child,li:last-child {
    flex-grow:.5;
  }

  .game {
    padding-left:20px;
  }

  .winner {
    font-weight:bold;
  }

  .game span {
    float:right;
    margin-right:5px;
  }

  .game-top {
    border-bottom:1px solid #aaa;
  }

  .game-top + li {
    border-right:1px solid #aaa; min-height:40px;
  }

  .game-bottom {
    border-top:1px solid #aaa;
  }

  .teamHover {
    cursor: pointer;
  }
</style>
