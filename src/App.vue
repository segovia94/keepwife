<template>
  <div id="app">
    <header class="l-header" role="banner">
      <div class="logo"></div>
      <h1 class="site-name">Can I Keep My Wife?</h1>
    </header>

    <main class="l-main" role="main">
      <section v-cloak>
        <div class="l-left">
          <TheQuestion />
        </div>

        <div class="l-right">
          <TheScore
            v-for="(team, id) in teams"
            :team="team"
            :id="id"
            :key="id"
          >
          </TheScore>
        </div>
      </section>
    </main>

    <footer class="l-footer">
      <a class="btn-next ir" @click="nextQuestion">Next</a>
    </footer>
  </div>
</template>

<script>
import TheQuestion from './components/TheQuestion'
import TheScore from './components/TheScore'

export default {
  name: 'App',

  components: {
    TheQuestion,
    TheScore
  },

  computed: {
    teams () {
      return this.$store.state.teams
    }
  },

  methods: {
    nextQuestion () {
      this.$store.dispatch('getQuestion')
    }
  }
}
</script>

<style lang="scss">
  [v-cloak] {
    display: none;
  }
  .logo {
    background-image: url('~@/assets/images/green-card-tilted.png');
    background-size: 100%;
    background-repeat: no-repeat;
    float: left;
    margin: -20px 0 0 20px;
    position: relative;
    width: 210px;
    height: 170px;
  }
  .site-name {
    color: #ffffff;
    font-size: 65px;
    padding: 20px 0 0 260px;
    text-shadow: 2px 2px 4px #000000;
  }
  .l-header {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 2px 2px #2B2B2B;
    height: 120px;
    margin: 25px 0 40px 0;
  }
  .l-main {
    margin: 60px 70px 0 70px;
  }
  .l-right {
    float: right;
    width: 330px;
  }
  .l-left {
    float: left;
    width: 530px;
  }
  .l-footer {
    text-align: right;
    clear: both;
    width: 100%;
    height: 108px;
  }
  .btn-next {
    background: url('~@/assets/images/btn-next.png') no-repeat 0 0;
    height: 108px;
    width: 106px;
    position: absolute;
    bottom: 0;
    right: 70px;
    cursor: pointer;
  }
  .btn-next:hover {
    background-position: 0 -108px;
  }
</style>
