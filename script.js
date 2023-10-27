// Fetch the data from db.json
fetch('db.json')
  .then((response) => response.json())
  .then((data) => {
    // Removing the movie titles and showing them
    const movieTitles = data.films.map((film) => film.title);
