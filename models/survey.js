var mongoose = require('mongoose');

var scheema = mongoose.Schema();

var surveySchema = new Schema({
    sid: number,
    title: string
});

var Surveys = mongoose.model('Survey', surveySchema);

module.exports = Surveys;