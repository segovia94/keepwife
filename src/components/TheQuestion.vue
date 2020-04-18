<template>
  <div v-if="question">
    <h1 class="question-title"><span :class="spouseClass">{{spouse}}</span>: Question #{{count}}</h1>
    <div class="question">
      {{question}}
      <ul v-if="questionOptions">
        <li v-for="option in questionOptions" :key="option">{{option}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      question () {
        return this.$store.state.currentQuestion.question
      },

      questionOptions () {
        return this.$store.state.currentQuestion.options
      },

      spouse () {
        return this.$store.state.currentQuestion.spouse
      },

      count () {
        return this.$store.state.questionCount
      },

      spouseClass () {
        return `spouse-${this.spouse.toLowerCase()}`
      }
    },
  };
</script>

<style lang="scss">
  .spouse-husbands {
    color: #010070;
  }

  .spouse-wives {
    color: #A804AD;
  }

  .question ul {
    margin-top: 1em;
  }
</style>
