# LibLab Take-Home Project - Frontend

Please modify this readme file to specify how to install, use and test the API.

# Library of the Rings (LOTR) App

The Library of the Rings (LOTR) App is a web application that provides information about movies, characters, and quotes from the Lord of the Rings series. This project is built using React and Axios for making API requests.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager)
- Git (optional but recommended)

### Installation

1. Clone the repository to your local machine:

   git clone https://github.com/your-username/lotr-app.git

2. Navigate to the project directory:

   cd lotr-app

3. Install project dependencies:

   npm install

4. Go to the API and create an account to get your API Token and URL

   https://the-one-api.dev/

5. Create a .env file in the project root directory and add your API token and URL:

   REACT_APP_API_TOKEN=YOUR_API_TOKEN
   REACT_APP_API_URL=YOUR_API_URL

6. Start the development server:

   npm start

7. Open your browser and visit http://localhost:3000 to view the app.

### Features

- View a list of movies, characters, and quotes from the Lord of the Rings series.
- Sort and expand details for each item.
- Access external links (e.g., Wiki URLs).

### Project Structure

- src/api/api.tsx: API configuration using Axios.
- src/components: React components for the app.
- src/styles/StyledComponents.ts: Styled components for consistent styling.
- src/index.tsx: Entry point of the React app.
- check out design.md for more information about the project structure and design

## Demo

- Below is a dropbox link to the app's demo
- Please allow the video to load before playing in order to not have playback delays that are mistaken for delays in the application.
- https://www.dropbox.com/scl/fi/swfpob53rfqq84vvcsvyo/LOTR-app-demo.mov?rlkey=ivhle38vvfjbcsgt2kvrq54ld&dl=0

## Author

Garrett Jones
