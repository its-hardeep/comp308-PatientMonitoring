// Load the module dependencies:
//  config.js module and mongoose module
var config = require('./config'),
    mongoose = require('mongoose');
// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true, useCreateIndex: true 
		}).then(() => console.log('DB Connected!'))
		.catch(err => {
		console.log('Error');
		});

    
    require('../app/model/tips.server.model');
    require('../app/model/emergency.server.model');
    require('../app/model/reportuser.server.model');
    require('../app/model/reportnurse.server.model');
    require('../app/model/user.server.model');
    
    return db;
};