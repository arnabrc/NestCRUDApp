import * as mongoose from 'mongoose';

export const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    designation: String,
    phoneNumber: Number
}, {
    versionKey: false
});