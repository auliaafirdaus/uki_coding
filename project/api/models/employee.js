const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Employee
let employees = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    department: {
        type: String
    }
},{
    collection: 'employees'
});

module.exports = mongoose.model('employees', employees);