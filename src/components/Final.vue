<template>
    <div>
      <h3>Final</h3>
      <main style="justify-content: center;">
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover" @click="top">{{$store.state.bracketOneWinner}}</li>

            <li>&nbsp;</li>

            <li class="game game-bottom teamHover" @click="bottom">{{$store.state.bracketTwoWinner}}</li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-bottom teamHover">{{winner}}&nbsp;</li>

            <li>&nbsp;</li>
        </ul>
      </main>
    </div>
</template>

<script>
export default {
  name: 'Final',
  data: function() {
    return {
      winner: null
    }
  },
  methods: {
    top: function(){
      this.winner=this.$store.state.bracketOneWinner
    },
    bottom: function(){
      this.winner=this.$store.state.bracketTwoWinner
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
