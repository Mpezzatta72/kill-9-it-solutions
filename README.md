# Kill-9 IT Solutions Splash Page Project

## Overview
This project is a web application for Kill-9 IT Solutions featuring a splash page with a customer interest form. The form allows users to submit their name, phone number, email address, and specify the services they are interested in or the problems they need help with.

## Project Structure
```
kill-9-it-solutions
├── public
│   ├── index.html          # HTML structure for the splash page
│   ├── styles
│   │   └── main.css       # CSS styles for the splash page
│   └── scripts
│       └── main.js        # JavaScript for form handling and submission
├── src
│   ├── server.js          # Entry point for the Node.js server
│   └── utils
│       └── emailService.js # Utility for sending emails
├── package.json            # npm configuration file
├── .env                    # Environment variables
└── README.md               # Project documentation
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd kill-9-it-solutions
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your email service credentials:
   ```
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. **Run the server**:
   ```
   node src/server.js
   ```

5. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000` to view the splash page.

## Usage
- Fill out the customer interest form with the required information.
- Upon submission, the form data will be sent to the specified email address (kill-9networking@gmail.com).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.