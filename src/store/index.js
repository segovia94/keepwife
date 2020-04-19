import Vue from 'vue'
import Vuex from 'vuex'

import questionsHusbands from './questions-husbands.json'
import questionsWives from './questions-wives.json'

Vue.use(Vuex)

const randomProperty = (obj) => {
  const keys = Object.keys(obj)
  return obj[keys[keys.length * Math.random() << 0]]
}

const forceInt = (value) => {
  return parseInt(value) || 0
}

export default new Vuex.Store({
  state: {
    teams: [
      {
        name: 'Team 1',
        score: 0
      },
      {
        name: 'Team 2',
        score: 0
      },
      {
        name: 'Team 3',
        score: 0
      }
    ],
    round: 1,
    roundLength: 5,
    spouse: 'Husbands',
    questionCount: 0,
    currentQuestion: {
      question: null,
      option: null,
      spouse: 'Husbands'
    }
  },

  mutations: {
    nextQuestion (state, payload) {
      state.currentQuestion = payload
    },

    roundProgression (state) {
      if (state.questionCount >= state.roundLength) {
        state.questionCount = 1

        // Switch the spouse.
        if (state.spouse === 'Husbands') {
          state.spouse = 'Wives'
        }
        else {
          state.spouse = 'Husbands'
          // increment the round since the husbands started
          state.round++
        }
      }
      else {
        state.questionCount++
      }
    },

    plusScore (state, payload) {
      state.teams[payload.id]['score'] = state.teams[payload.id]['score'] + forceInt(payload.score)
    },

    minusScore (state, payload) {
      state.teams[payload.id]['score'] = state.teams[payload.id]['score'] - forceInt(payload.score)
    },
  },

  actions: {
    getQuestion (context) {
      // Advance the rounds
      context.commit('roundProgression')

      let questions = questionsWives
      if (context.state.spouse === 'Husbands') {
        questions = questionsHusbands
      }

      //TODO: prevent the reuse of questions.

      // Get a random question
      const question = randomProperty(questions)

      context.commit('nextQuestion', question)
    }
  },

  modules: {}
})
