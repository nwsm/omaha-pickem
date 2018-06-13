<template>
  <div>
    <h2>Bracket</h2>
    bracket id: {{bracket.id}}
    <template v-for="data in bracket.data">
      <div>{{data}}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Bracket',
  props: {
    bracket: {

    }
  },
  data () {
    return {

    }
  },
  mounted: function() {

  },
  methods: {

  }
}
</script>

<style>

</style>
