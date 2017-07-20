var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var surveySchema = new Schema({
    sid: Number,
    title: String
});

var Surveys = mongoose.model('Survey', surveySchema);

module.exports = Surveys;