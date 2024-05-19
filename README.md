# Universal Chat App

Welcome to the Universal Chat App! This project is a full-featured chat application with both backend and frontend components.

## Getting Started

To get started with the Universal Chat App, follow the instructions below.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (make sure it is running at `mongodb://localhost:27017/`)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nun-Thee-Knee/chat.git
   cd chat
   ```

2. **Setup the Backend:**

   ```bash
   cd Backend
   npm install
   npm run dev
   ```
   Add .env which includes <br>(i). MONGODB_URL=(Your connection string with MongoDb)<br>(ii).CLIENT_URL=(Your server on which Frontend or React is running)

3. **Setup the Frontend:**

   Open a new terminal window/tab, then:

   ```bash
   cd chat
   npm install
   npm run start
   ```
   Replace <b>https://chat-ew8z.onrender.com</b> from ./components/Demo.js, ./components/Demo.js, ./components/ChatPlace.js  and ./context/UserState.js with the link to the local server where your backend is running. (Mostly http://localhost:5000)

### Usage

- **Landing Page:** On the landing page, you will see two options:
  - **Get Started:** This will redirect you to the chat page if you are logged in. If not, it will redirect you to an authentication form.
  - **Demo:** Use this option to check how the chat functionality works without needing to log in.

### Development

For development purposes, ensure that your MongoDB server is running at `mongodb://localhost:27017/`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

If you have any questions or need further assistance, please open an issue in the [GitHub repository](https://github.com/Nun-Thee-Knee/chat.git).

Enjoy chatting!
