// Load services dynamically from JSON
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const servicesList = document.getElementById('services-list');
    if (servicesList) {
      servicesList.innerHTML = "";
      data.services.forEach(service => {
        const div = document.createElement('div');
        div.className = "card";
        div.innerHTML = `
          <h3>${service.title}</h3>
          <p>${service.price}</p>
        `;
        servicesList.appendChild(div);
      });
    }
  })
  .catch(error => console.error('Error loading JSON:', error));
