const { Schema, model } = require('mongoose');

const jobApplication = new Schema(
    {
        dateApplied: {
            type: Date,
            default: Date.now,
        },
        company: {
            type: String,
            required: true,
        },
        jobPosition: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
        },
        url: {
            type: String,
            required: true,
        },
        interview: {
            type: Boolean,
        },
        interviewDate: {
            type: Date,
        },
        comments: {
            type: String,
        },
        status: {
            type: String,
        },
        reminder: {
            type: String,
        },
        reminderDate: {
            type: String,
        }
    }
);

const Jobs = model('Jobs', jobApplication);

module.exports = Jobs;