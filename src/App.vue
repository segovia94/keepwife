<template>
  <div id="app">
    <TheHeader/>

    <main class="l-main">
      <section>
        <TheQuestion/>
      </section>
      <section class="l-team">
        <TheTeam
          v-for="(team, id) in teams"
          :team="team"
          :id="id"
          :key="id"
        />
      </section>
    </main>

    <footer class="l-footer">
      <a class="btn-next ir" @click="nextQuestion">Next</a>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from './components/TheHeader'
import TheQuestion from './components/TheQuestion'
import TheTeam from './components/TheTeam'

export default {
  name: 'App',

  components: {
    TheHeader,
    TheQuestion,
    TheTeam
  },

  computed: {
    ...mapState(['teams'])
  },

  methods: {
    nextQuestion () {
      this.$store.dispatch('getQuestion')
    }
  }
}
</script>

<style>
  .l-main {
    margin: 2.5rem var(--container-space) 0 var(--container-space);
  }

  @media (min-width: 600px) {
    .l-main {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 2rem;
    }
  }

  .l-team {
    display: inline-block;
  }

  .l-footer {
    position: fixed;
    bottom: 0;
    right: var(--container-space);
    text-align: right;
  }

  .btn-next {
    background: url('~@/assets/images/btn-next.png') no-repeat 0 0;
    height: 108px;
    width: 106px;
    cursor: pointer;
  }

  .btn-next:hover {
    background-position: 0 -108px;
  }
</style>
