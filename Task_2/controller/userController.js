const express = require('express'),
    path = require('path');

//  get all
const getUser = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

//  Temporary - storage
const submissions = []

//  post request
const submitData = (req, res) => {
    const { name, email, age } = req.body;
    const errors = [];

    if (!name || name.trim() === '') errors.push('Name is required');
    if (!email || email.trim() === '') {
        errors.push('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Please enter a valid email address');
    }
    if (!age || age.trim() === '') {
        errors.push('Age is required');
    } else if (isNaN(age)) {
        errors.push('Age must be a number');
    } else if (age < 18) {
        errors.push('You must be at least 18 years old');
    }

    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    const submission = { name, email, age };
    submissions.push(submission);
    res.json({ success: true, submission });
}

module.exports = { getUser, submitData }