 function postIt(){
    var url = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/user";

    var data = {};
    data.name = document.getElementById("name").value;
    data.lastname  = document.getElementById("lastname").value;
    if(document.getElementById("profile1").checked){
        data.profile = document.getElementById("profile1").value;
    }else{
        data.profile = document.getElementById("profile2").value;
    }
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
}

function getOne(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/user";
    var xhr  = new XMLHttpRequest()
    const app = document.getElementById('root');
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const table = document.createElement('table');
    container.setAttribute('class', 'table');
    
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true);
    
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
	    if (xhr.readyState == 4 && xhr.status == "200") {
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

                const lastname = document.createElement('th');
                lastname.textContent = user.lastname;
                lastname.setAttribute('scope', 'col');

                const profile = document.createElement('th');
                profile.textContent = user.profile;
                console.log(user.profile);
                profile.setAttribute('scope', 'col');

                const deleter = document.createElement('button');
                deleter.textContent = 'deletar usuário';
                deleter.setAttribute('scope', 'col');
                deleter.setAttribute('id', 'deleter');
                deleter.setAttribute('value', user.id);
                deleter.setAttribute('onclick','deleteUser();');

                container.appendChild(card);
                card.appendChild(id);
                card.appendChild(name);
                card.appendChild(lastname);
                card.appendChild(profile);
                card.appendChild(deleter);

          
              });
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = 'Ocorreu um erro no sistema';
              app.appendChild(errorMessage);
            }
    }
    xhr.send(null);
}


function getUser(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/user";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
	    if (xhr.readyState == 4 && xhr.status == "200") {
		    data.forEach(user => {
                document.getElementById('push').setAttribute('value', user.id);


                document.getElementById("name").value = user.name
                document.getElementById("lastname").value = user.lastname
                const name = document.createElement('th');
                name.textContent = user.name;
                
                if(user.profile == "admin"){
                    document.getElementById("profile1").checked = true;
                    document.getElementById("profile2").checked = false;
                }else{
                    document.getElementById("profile1").checked = false;
                    data.profile = document.getElementById("profile2").checked = true;
                }
          
              });
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = 'Ocorreu um erro no sistema';
              app.appendChild(errorMessage);
            }
    }
    xhr.send(null);
}

function deleteUser(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/user";
    var xhr = new XMLHttpRequest();
    id = document.getElementById("deleter").value;
    xhr.open("DELETE", url+'/'+id, true);
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
            alert(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
}

function updateUser(){
    var url = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/user";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.lastname  = document.getElementById("lastname").value;
    if(document.getElementById("profile1").checked){
        data.profile = document.getElementById("profile1").value;
    }else{
        data.profile = document.getElementById("profile2").value;
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    console.log(json);
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
            alert(users);
        } else {
            console.error(users);
            alert(users);
        }
    }
xhr.send(json);
}