<template>
  <div class="team">
    <div class="team__score stroke-white">{{team.score}}</div>
    <div class="team__name stroke">{{team.name}}</div>
    <div class="team__scoreboard">
      <a class="btn-minus ir" @click="minusScore({id, score})">-</a>
      <input class="team__input" type="text" v-model.number="score"/>
      <a class="btn-plus ir" @click="plusScore({id, score})">+</a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TheScore',

  props: {
    id: {
      type: Number,
      required: true
    },
    team: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      score: null
    }
  },

  methods: {
    ...mapMutations(['plusScore', 'minusScore'])
  }
}
</script>

<style>
  .team {
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-template-rows: 1fr 1fr;
    margin: 1rem 0;
    line-height: 1.1;
  }

  @media (min-width: 600px) {
    .team {
      text-align: right;
    }
  }

  .team__name {
    font-weight: bold;
  }

  .team__scoreboard {
    display: flex;
    align-items: center;
  }

  @media (min-width: 600px) {
    .team__scoreboard {
      justify-content: end;
    }
  }

  .team__input {
    font-size: 1.25rem;
    border: 2px solid #589d5b;
    height: 1.5rem;
    width: 2rem;
    text-align: center;
  }

  .team__score {
    grid-column-start: 2;
    grid-row: 1 / 3;
    align-self: center;
    color: #000;
    float: right;
    font-family: var(--font-title);
    font-size: 2.5rem;
    margin-left: .75rem;
  }

  .btn-minus,
  .btn-plus {
    background: url('~@/assets/images/btn-counter.png') no-repeat 0 0;
    height: 24px;
    width: 24px;
    cursor: pointer;
  }

  .btn-plus {
    background-position: 0 0;
  }

  .btn-minus {
    background-position: -24px 0;
  }

  .btn-plus:hover {
    background-position: 0 -24px;
  }

  .btn-minus:hover {
    background-position: -24px -24px;
  }
</style>
