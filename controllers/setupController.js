var Surveys = require('../models/surveyModel');

module.exports = function(app) {
    app.get('/api/setupSurvey', function(request, response) {
        var sampleSurveys = [{
                "sid": 1,
                "title": "SIGNIDYNE"
            },
            {
                "sid": 2,
                "title": "OPTIQUE"
            },
            {
                "sid": 3,
                "title": "COMCUR"
            },
            {
                "sid": 4,
                "title": "ANIXANG"
            },
            {
                "sid": 5,
                "title": "SLUMBERIA"
            },
            {
                "sid": 6,
                "title": "EXOZENT"
            },
            {
                "sid": 7,
                "title": "CODACT"
            }
        ];

        Surveys.create(sampleSurveys, function(error, results) {
            response.send(results);
        });
    });
};