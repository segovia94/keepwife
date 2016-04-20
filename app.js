new Vue({
  el: '#app',

  data: {
    gameId: 2,
    spouse: 'Husbands',
    teams: [],
    count: 0,
    question: '',
    questionOptions: ''
  },

  ready: function () {
    // Get an authentication token from Drupal so it can be used in updates
    this.getToken();

    // Import the starting teams with initial scores
    this.getTeams();

    // Get the first question
    this.getQuestion();
  },

  methods: {
    getToken: function () {
      this.$http.get('http://keepwife.d8/rest/session/token')
        .then(function (response) {
          Vue.http.headers.common['X-CSRF-Token'] = response.data;
        });
    },

    getTeams: function () {
      this.$http.get('http://keepwife.d8/node/' + this.gameId + '?_format=json')
        .then(function (response) {
          var data = response.data;

          // Loop through the 3 teams
          for (var i = 0; i < 3; i++) {
            var name = 'field_team_' + (i + 1) + '_name';
            var score = 'field_team_' + (i + 1) + '_score';

            this.teams.$set(i, {
              name: data[name][0].value,
              score: data[score][0].value
            });
          }
        });
    },

    getQuestion: function () {
      this.roundProgression();

      this.$http.get('http://keepwife.d8/question?_format=json&spouse=' + this.spouse)
        .then(function (response) {
          var data = response.data[0];

          this.question = data.title;
          this.questionOptions = data.body;
        });
    },

    roundProgression: function () {
      // Increase the count up to 5
      if (this.count >= 5) {
        this.count = 1;
        this.spouse = (this.spouse == 'Husbands') ? 'Wives' : 'Husbands';
      } else {
        this.count++;
      }
    },

    updateScore: function (index, direction) {
      var team = this.teams[index];

      // Get the new score making sure it is actually a number
      if (direction == 'up') {
        team.score = this.forceInt(team.score) + this.forceInt(team.newScore);
      } else {
        team.score = this.forceInt(team.score) - this.forceInt(team.newScore);
      }

      // Clear the textbox
      team.newScore = '';

      // Create data for the ajax to backend
      var data = {
        'type': [{'target_id': 'game'}]
      };
      data['field_team_' + (index + 1) + '_score'] = [{'value': team.score}];

      // Send the score
      this.$http.patch('http://keepwife.d8/node/' + this.gameId, data);
    },

    forceInt: function (value) {
      return parseInt(value) || 0;
    }

  }
});