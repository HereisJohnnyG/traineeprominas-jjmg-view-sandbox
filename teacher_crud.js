$("#root").ready(
    function(){
        const app = document.getElementById('root');


        const logo = document.createElement('img');
        logo.src = 'logo.png';
        
        const container = document.createElement('table');
        container.setAttribute('class', 'container');
        
        const table = document.createElement('table');
        container.setAttribute('class', 'table');
        
        //app.appendChild(logo);
        app.appendChild(container);
        app.appendChild(table);
        
        var request = new XMLHttpRequest();
        request.open('GET', 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/teacher', true);
        request.onload = function () {
        
          // Begin accessing JSON data here
          var data = JSON.parse(this.response);
          if (request.status >= 200 && request.status < 400) {
            app.appendChild(container);
            app.appendChild(table);
            data.forEach(teacher => {
              const card = document.createElement('thead');
              
              const id = document.createElement('th');
              id.textContent = teacher.id;
              id.setAttribute('scope', 'col');
        
              const name = document.createElement('th');
              name.textContent = teacher.name;
              name.setAttribute('scope', 'col');
        
              const lastname = document.createElement('th');
              lastname.textContent = teacher.lastname;
              lastname.setAttribute('scope', 'col');
        
              const phd = document.createElement('th');
              phd.textContent = teacher.phd;
              phd.setAttribute('scope', 'col');
        
              container.appendChild(card);
              card.appendChild(id);
              card.appendChild(name);
              card.appendChild(lastname);
              card.appendChild(phd);
        
            });
          } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = 'Não foi possivel realizar a ação';
            app.appendChild(errorMessage);
          }
        }
        
        request.send();
});


function postIt(){
    var url = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/teacher";

    var data = {};
    data.name = document.getElementById("name").value;
    data.lastname  = document.getElementById("lastname").value;
    if(document.getElementById("phd").checked){
        data.phd = true;
    }else{
        data.phd = false;
    }
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(teachers);
        } else {
            console.error(teachers);
        }
    }
}

function searchTeacher(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/teacher', true);
    request.onload = async function () {
        var data = await JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.table(data);
            return(data);
        } else {
            console.error(request);
            return(data);
        }
    }
    request.send(null);
}

function getTeacher(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/teacher";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
	    if (xhr.readyState == 4 && xhr.status == "200") {
		    data.forEach(teacher => {

                document.getElementById('push').setAttribute('value', teacher.id);


                document.getElementById("name").value = teacher.name
                document.getElementById("lastname").value = teacher.lastname
                const name = document.createElement('th');
                name.textContent = teacher.name;
                
                if(teacher.phd){
                    document.getElementById("phd").checked = true;
                }else{
                    document.getElementById("phd").checked = false;
                }
          
              });
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = 'Ocorreu um erro no sistema';
              alert(errorMessage);
            }
    }
    xhr.send(null);
}

function updateTeacher(){
    var url = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/teacher";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.lastname  = document.getElementById("lastname").value;
    if(document.getElementById("phd").checked){
        data.phd = true;
    }else{
        data.phd = false;
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        alert(xhr.responseText);
        var teacher = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(teacher);
            alert(teacher);
        } else {
            console.error(teacher);
            alert(teacher);
        }
    }
    xhr.send(json);
}

function deleteteacher(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/teacher";
    var xhr = new XMLHttpRequest();
    id = document.getElementById("deleter").value;
    xhr.open("DELETE", url+'/'+id, true);
    xhr.onload = function () {
        alert(xhr.responseText);
        var teacher = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(teacher);
        } else {
            console.error(teacher);
        }
    }
    xhr.send(null);
}


function getOne(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/teacher";
    var xhr  = new XMLHttpRequest()
    const app = document.getElementById('root');
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
    const container = document.createElement('table');
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
		    data.forEach(teacher => {
                
                const card = document.createElement('thead');
      
                const id = document.createElement('th');
                id.textContent = teacher.id;
                id.setAttribute('scope', 'col');

                const name = document.createElement('th');
                name.textContent = teacher.name;
                name.setAttribute('scope', 'col');

                const lastname = document.createElement('th');
                lastname.textContent = teacher.lastname;
                lastname.setAttribute('scope', 'col');

                const phd = document.createElement('th');
                phd.textContent = teacher.phd;
                phd.setAttribute('scope', 'col');

                const deleter = document.createElement('button');
                deleter.textContent = 'deletar usuário';
                deleter.setAttribute('scope', 'col');
                deleter.setAttribute('id', 'deleter');
                deleter.setAttribute('value', teacher.id);
                deleter.setAttribute('onclick','deleteteacher();');

                container.appendChild(card);
                card.appendChild(id);
                card.appendChild(name);
                card.appendChild(lastname);
                card.appendChild(phd);
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
