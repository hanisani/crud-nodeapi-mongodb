var configValues = require('./config');

module.exports = {
    getDatabaseConnectionString: function() {
        return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds129422.mlab.com:29422/sms';
    }
};

//mongodb://<dbuser>:<dbpassword>@ds129422.mlab.com:29422/sms