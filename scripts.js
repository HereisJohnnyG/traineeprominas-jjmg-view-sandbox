const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const table = document.createElement('table');
container.setAttribute('class', 'table');

app.appendChild(logo);
app.appendChild(container);
app.appendChild(table);

var request = new XMLHttpRequest();
request.open('GET', 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/user', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(user => {
      const card = document.createElement('thead');
      
      const id = document.createElement('th');
      id.textContent = user.id;
      id.setAttribute('scope', 'col');

      const name = document.createElement('th');
      name.textContent = user.name;
      name.setAttribute('scope', 'col');

      const lastname = document.createElement('th');
      lastname.textContent = user.lastname;
      lastname.setAttribute('scope', 'col');

      const profile = document.createElement('th');
      profile.textContent = user.profile;
      profile.setAttribute('scope', 'col');

      container.appendChild(card);
      card.appendChild(id);
      card.appendChild(name);
      card.appendChild(lastname);
      card.appendChild(profile);

    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();