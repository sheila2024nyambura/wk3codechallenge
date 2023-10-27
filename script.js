// Fetch the data from db.json
fetch('db.json')
  .then((response) => response.json())
  .then((data) => {
    // Removing the movie titles and showing them
    const movieTitles = data.films.map((film) => film.title);

    // Create an unordered list and add movie titles to it
    const movieList = document.createElement('ul');
    movieTitles.forEach((title) => {
      const listItem = document.createElement('li');
      listItem.textContent = title;
      movieList.appendChild(listItem);
    });

    // Append the list to the document
    document.body.appendChild(movieList);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
