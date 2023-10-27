// Fetch the data from db.json
fetch('db.json')
  .then((response) => response.json())
  .then((data) => {
    