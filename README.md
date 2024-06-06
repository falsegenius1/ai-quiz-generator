# AI Quiz Generator

## Overview

AI Quiz Generator is a tool to generate quizzes based on a specific topic. This project is built using Node.js, Express, and Google's Gemini AI technology.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/falsegenius1/ai-quiz-generator
    cd ai-quiz-generator
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables:
    Create a `.env` file in the root of the project and add your Gemini AI API key:

    Get you API key [here](https://ai.google.dev/gemini-api).

    ```env
    API_KEY=your_gemini_api_key
    ```

### Running the Server

1. Start the server:
    ```bash
    npm run dev
    ```

2. The server will be running on `http://localhost:3000`


## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.


## Acknowledgements

- Thanks to Google for their Gemini AI technology.