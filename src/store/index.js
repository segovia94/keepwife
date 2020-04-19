import Vue from 'vue'
import Vuex from 'vuex'

import questionsHusbands from './questions-husbands.json'
import questionsWives from './questions-wives.json'

Vue.use(Vuex)

const randomKey = (obj) => {
  const keys = Object.keys(obj)
  return keys[keys.length * Math.random() << 0]
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
    totalRounds: 2,
    spouse: 'Husbands',
    questionsHusbands: questionsHusbands,
    questionsWives: questionsWives,
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

    removeQuestion (state, payload) {
      if (payload.spouse === 'Husbands') {
        delete state.questionsHusbands[payload.id]
      } else {
        delete state.questionsWives[payload.id]
      }
    },

    roundProgression (state) {
      if (state.questionCount >= state.roundLength) {
        state.questionCount = 1

        // Switch the spouse.
        if (state.spouse === 'Husbands') {
          state.spouse = 'Wives'
        } else {
          state.spouse = 'Husbands'
          // increment the round since the husbands started
          state.round++
        }
      } else {
        state.questionCount++
      }
    },

    plusScore (state, payload) {
      state.teams[payload.id].score = state.teams[payload.id].score + forceInt(payload.score)
    },

    minusScore (state, payload) {
      state.teams[payload.id].score = state.teams[payload.id].score - forceInt(payload.score)
    }
  },

  actions: {
    nextQuestion (context) {
      // Advance the rounds.
      context.commit('roundProgression')

      const { spouse } = context.state

      let questions = context.state.questionsWives
      if (spouse === 'Husbands') {
        questions = context.state.questionsHusbands
      }

      // Get a random question.
      const id = randomKey(questions)
      context.commit('nextQuestion', questions[id])

      // Prevent the reuse of the question.
      context.commit('removeQuestion', { id, spouse })
    }
  },

  modules: {}
})
