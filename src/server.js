const express = require('express');
const bodyParser = require('body-parser');
const emailService = require('./utils/emailService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const { name, phone, email, services } = req.body;

    if (!name || !phone || !email || !services) {
        return res.status(400).send('All fields are required.');
    }

    emailService.sendEmail({ name, phone, email, services })
        .then(() => res.status(200).send('Form submitted successfully!'))
        .catch(error => res.status(500).send('Error sending email: ' + error.message));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});