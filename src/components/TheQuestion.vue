<template>
  <div v-if="question">
    <h1 class="question__title stroke-white"><span :class="spouseClass">{{spouse}}</span>: Question #{{count}}</h1>
    <div class="question stroke">
      {{question}}
      <ul v-if="options" class="question__options">
        <li v-for="option in options" :key="option">{{option}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheQuestion',

  computed: {
    spouseClass () {
      return `spouse-${this.spouse.toLowerCase()}`
    },

    ...mapState({
      question: state => state.currentQuestion.question,
      options: state => state.currentQuestion.options,
      spouse: state => state.currentQuestion.spouse,
      count: 'questionCount'
    })
  }
}
</script>

<style>
  .question__title {
    font-size: 1.5rem;
  }

  .spouse-husbands {
    color: #010070;
  }

  .spouse-wives {
    color: #a804ad;
  }

  .question__options {
    margin-top: 1em;
    font-size: .75em;
  }
</style>
