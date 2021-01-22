const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportUserSchema = new Schema({
  
  patientid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  patientemail: {
    type: Schema.Types.String,
    ref: 'User'
  },
  pulserate: String,
  weight: String,
  bloodpressure: String,
  temperature: String,
  respiratoryrate: String,
  created: {
    unique: true,
		type: Date,
		default: Date.now
	}
});

mongoose.model('ReportUser', ReportUserSchema);