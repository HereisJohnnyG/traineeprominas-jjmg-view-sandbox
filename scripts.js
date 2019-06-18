const app = document.getElementById('root');


const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('table');
container.setAttribute('class', 'container');

const table = document.createElement('table');
container.setAttribute('class', 'table table-striped');

//app.appendChild(logo);
app.appendChild(container);
app.appendChild(table);

var request = new XMLHttpRequest();
request.open('GET', 'https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/user', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    app.appendChild(container);
    app.appendChild(table);
    data.forEach(user => {
      const card = document.createElement('thead');
      
      const id = document.createElement('th');
      id.textContent = user.id;
      id.setAttribute('scope', 'col');

      const name = document.createElement('th');
      name.textContent = user.name;
      name.setAttribute('scope', 'col');

      const lastName = document.createElement('th');
      lastName.textContent = user.lastName;
      lastName.setAttribute('scope', 'col');

      const profile = document.createElement('th');
      profile.textContent = user.profile;
      profile.setAttribute('scope', 'col');

      container.appendChild(card);
      card.appendChild(id);
      card.appendChild(name);
      card.appendChild(lastName);
      card.appendChild(profile);

    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Não foi possivel realizar a ação';
    app.appendChild(errorMessage);
  }
}

request.send();