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

            <li class="game game-top teamHover" @click="threeTop">{{loser1}}&nbsp;</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="threeBottom">{{loser2}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="fourTop">{{winner1}}&nbsp;</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="fourBottom">{{winner2}}&nbsp;</li>

            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="fiveTop">{{loser4}}&nbsp;</li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="fiveBottom">{{winner3}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="sixTop">{{winner4}}&nbsp;</li>

            <li>&nbsp;</li>

            <li class="game game-bottom teamHover" @click="sixBottom">{{winner5}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-bottom teamHover">{{winner6}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
      </main>
    </div>
</template>

<script>
export default {
  name: 'Two',
  data: function() {
    return {
      winner1: null,
      loser1: null,
      winner2: null,
      loser2: null,
      winner3: null,
      loser3: null,
      winner4: null,
      loser4: null,
      winner5: null,
      loser5: null,
      winner6: null,
      loser6: null
    }
  },
  methods: {
    ark: function() {
      this.loser1 = 'Texas'
      this.winner1 = 'Arkansas'
    },
    tex: function() {
      this.loser1 = 'Arkansas'
      this.winner1 = 'Texas'
    },
    tec: function() {
      this.loser2 = 'Florida'
      this.winner2 = 'Texas Tech'
    },
    flo: function() {
      this.loser2 = 'Texas Tech'
      this.winner2 = 'Florida'
    },
    threeTop: function() {
      this.winner3 = this.loser1
    },
    threeBottom: function() {
      this.winner3 = this.loser2
    },
    fourTop: function() {
      this.winner4 = this.winner1
      this.loser4 = this.winner2
    },
    fourBottom: function() {
      this.winner4 = this.winner2
      this.loser4 = this.winner1
    },
    fiveTop: function() {
      this.winner5 = this.loser4
    },
    fiveBottom: function() {
      this.winner5 = this.winner3
    },
    sixTop: function() {
      this.winner6 = this.winner4
      this.$store.commit('setBracketTwoWinner',this.winner6)
    },
    sixBottom: function() {
      this.winner6 = this.winner5
      this.$store.commit('setBracketTwoWinner',this.winner6)
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
