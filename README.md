# stage-2
# MovieBox - Movie Discovery Web Application

MovieBox is a responsive and visually appealing movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. It consumes data from the TMDB API, providing users with a seamless movie exploration experience.

![MovieBox Screenshot](ss.png)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Interface:**
   - List the top 10 movies on the homepage.
   - Display them in a grid layout with movie posters.
   - Each card displays the movie title and release date.

2. **Movie Search:**
   - Implement a search feature to search for movies by title.
   - Display search results with movie posters, titles, and release dates.
   - Show a loading indicator while fetching search results.

3. **Movie Details:**
   - Navigate to `/dashboard/:id` to view movie details.
   - Display movie title, release date, runtime, and overview.

4. **API Integration:**
   - Consume the TMDB API to fetch movie data.
   - Use the following API endpoint to fetch movie details:
     - `https://api.themoviedb.org/3/movie/{movie_id}`

5. **Error Handling:**
   - Implement error handling to display meaningful error messages in case of API failures or other issues.
 

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Theglxry/stage-2.git174
Navigate to the project directory:

bash
Copy code
cd moviebox
Install project dependencies:


Start the development server:

bash
Copy code
npm start
The application should now be running locally at http://localhost:3000.

Usage
Visit http://localhost:3000 in your web browser to use the MovieBox application.
Explore top-rated movies, search for movies by title, and view movie details.
API Integration
MovieBox uses the TMDB API to fetch movie data. To obtain an API key, follow these steps:

 .
Error Handling
The application includes error handling to provide users with meaningful error messages in case of API failures or other issues. When an error occurs, an error message is displayed to guide the user.