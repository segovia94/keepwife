<template>
  <div>
    <h1 class="question-title"><span :class="spouseClass">{{spouse}}</span>: Question #{{count}}</h1>
    <div class="question">
      {{question}}
      <ul v-if="options">
        <li v-for="option in options" key="option">{{option}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        spouse: 'Husbands',
        count: 0,
        questionId: '',
        question: '',
        questionOptions: ''
      }
    },

    computed: {
      spouseClass () {
        return `spouse-${this.spouse.toLowerCase()}`
      }
    },

    mounted () {
      // GET first question
      this.getQuestion();
    },

    methods: {
      getQuestion () {
        this.roundProgression();

        // this.$http.get('http://keepwife.d8/question?_format=json&spouse=' + this.spouse).then(function (response) {
        //   var data = response.data[0];
        //
        //   this.questionId = data.nid;
        //   this.question = data.title;
        //   this.questionOptions = data.body;
        // });
      },

      roundProgression () {
        // Increase the count up to 5
        if (this.count >= 5) {
          this.count = 1;
          this.switchSpouse();
        } else {
          this.count++;
        }
      },

      switchSpouse () {
        if (this.spouse === 'Husbands') {
          this.spouse = 'Wives';
        } else {
          this.spouse = 'Husbands';
        }
      }
    }
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
