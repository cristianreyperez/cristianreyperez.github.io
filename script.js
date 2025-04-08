const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    const records = data.data;
    const container = document.getElementById('data-container');

    records.forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record';
        recordDiv.innerHTML = `
            <h3>${record.Nation}</h3>
            <p>Population: ${record.Population}</p>
            <p>Year: ${record.Year}</p>
        `;
        container.appendChild(recordDiv);

    }
)

  })
  .catch(error => {
    console.error('Error:', error);
  });



  