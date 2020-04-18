<template>
  <div class="team clearfix">
    <div class="score">{{team.score}}</div>
    <div class="name">{{team.name}}</div>
    <div class="counter">
      <a class="btn-plus ir" @click="plusScore">+</a>
      <a class="btn-minus ir" @click="minusScore">-</a>
      <input type="text" v-model="newScore"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      team: {
        type: Object,
        required: true
      },
    },

    data () {
      return {
        newScore: null,
      }
    },

    methods: {
      plusScore: function () {
        this.$store.commit('plusScore', {id: this.id, score: this.newScore})
      },

      minusScore: function () {
        this.$store.commit('minusScore', {id: this.id, score: this.newScore})
      }
    }
  };
</script>

<style lang="scss">
  .team {
    text-align: right;
    margin-bottom: 50px;
  }

  .name {
    font-weight: bold;
  }

  a.btn-minus,
  a.btn-plus {
    background: url('~@/assets/images/btn-counter.png') no-repeat 0 0;
    height: 24px;
    width: 24px;
    float: right;
    margin: 3px 0 0 5px;
    cursor: pointer;
  }
  a.btn-plus { background-position: 0 0; }
  a.btn-minus { background-position: -24px 0; }
  a.btn-plus:hover { background-position: 0 -24px; }
  a.btn-minus:hover { background-position: -24px -24px; }
  .team input {
    font-size: 20px;
    border: 2px solid #589d5b;
    height: 24px;
    width: 30px;
    float: right;
  }

  .score {
    color: #000;
    float: right;
    font-family: 'DeadKansasRegular';
    font-size: 61px;
    margin-left: 20px;
    text-shadow: 2px 2px 3px #AECCAD;
  }
</style>
