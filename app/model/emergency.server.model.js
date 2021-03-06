const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmergencySchema = new Schema({


  patientid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  patientemail: {
    type: Schema.Types.String,
    ref: 'User'
  },
  message: String,
  created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Emergency', EmergencySchema);
