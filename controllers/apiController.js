var Surveys = require('../models/surveyModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/api/survey', function(request, response) {
        Surveys.find(function(error, results) {
            if (error) throw error;
            response.send(results);
        });
    });

    app.get('/api/survey/:sid', function(request, response) {
        Surveys.find({ sid: request.params.sid }, function(error, results) {
            if (error) throw error;
            response.send(results);
        });
    });

    // app.get('/api/survey/:id', function(request, response) {
    //     Surveys.findById({ _id: request.params.id }, function(error, results) {
    //         if (error) throw error;
    //         response.send(results);
    //     });
    // });

    app.post('/api/survey', function(request, response) {
        if (request.body.id) { // update
            Surveys.findByIdAndUpdate(request.body.id, {
                title: request.body.title
            }, function(error, result) {
                if (error) throw error;
                response.send('Successfully updated');
            });
        } else { // insert
            Surveys.create({
                sid: request.body.sid,
                title: request.body.title
            }, function(error) {
                if (error) throw error;
                response.send('Successfully inserted');
            });
        }
    });

    app.delete('/api/survey', function(request, response) {
        Surveys.findByIdAndRemove(request.body.id, function(error) {
            if (error) throw error;
            response.send('Successfully deleted');
        });
    });
};