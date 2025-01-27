# AI Web Page Generator

## Project Description
The AI Web Page Generator is a Node.js-based application that dynamically generates fully functional and interactive web pages based on user input. Users can describe the desired web page, and the application uses OpenAI's GPT model to generate corresponding HTML, CSS, and JavaScript code. This project is ideal for quickly prototyping web pages with interactivity.

---

## Features
- User-friendly frontend interface for inputting requirements.
- AI-driven code generation for web pages (HTML, CSS, and JavaScript).
- Live preview of generated web pages.
- REST API integration using Node.js and Express.
- Cross-Origin Resource Sharing (CORS) support.

---

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (version 18.x or later)
- **npm** (Node Package Manager)

You will also need an **OpenAI API Key**. Sign up at [OpenAI](https://platform.openai.com/) to get your API key.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-web-page-generator.git
   cd ai-web-page-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install nodemon globally (optional):
   ```bash
   npm install -g nodemon
   ```

4. Set up your environment:
   - Create a `.env` file in the project root and add your OpenAI API key:
     ```env
     OPENAI_API_KEY=your_api_key_here
     ```

---

## Project Structure
```
.
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
└── .env
```

- `frontend/`: Contains the static files (HTML, CSS, and JavaScript) for the user interface.
- `server.js`: The backend code that handles requests and generates code using OpenAI's API.
- `.env`: Environment file to store sensitive information such as API keys.
- `package.json`: Contains project metadata and dependencies.

---

## Usage

1. Start the backend server:
   ```bash
   nodemon server.js
   ```

2. Open the `frontend/index.html` file in your browser to access the user interface.

3. Enter a description of the desired web page in the input box and click "Generate."

4. View the generated code in the interface and see a live preview in the iframe.

---

## Example Input
**User Input:**
```
Create a portfolio page with a navbar, a hero section, and a contact form. Add interactivity to validate the form using JavaScript.
```

**Generated Output:**
- HTML: Structure for the portfolio page.
- CSS: Styling for the navbar, hero section, and contact form.
- JavaScript: Validation for the contact form.

---

## API Endpoints

### POST `/generate`
- **Description**: Generates HTML, CSS, and JavaScript code based on user input.
- **Request Body**:
  ```json
  {
    "userInput": "Description of the web page you want"
  }
  ```
- **Response**:
  ```json
  {
    "code": "<html>...</html>"
  }
  ```

---

## Future Enhancements
- Allow users to download the generated code as a `.zip` file.
- Implement user authentication for personal project management.
- Add support for saving and loading previous projects.
- Enhance AI prompts for better quality and flexibility in generated code.

---

## Troubleshooting
- **Error: `nodemon: command not found`**:
  Install `nodemon` globally using:
  ```bash
  npm install -g nodemon
  ```

- **Error: `Configuration is not a constructor`**:
  Ensure you are using the latest version of the OpenAI SDK:
  ```bash
  npm install openai@latest
  ```

- **Error: `Module not found`**:
  Reinstall dependencies:
  ```bash
  npm install
  ```

---

## License
This project is licensed under the MIT License.

---

## Acknowledgments
- [OpenAI API](https://platform.openai.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

