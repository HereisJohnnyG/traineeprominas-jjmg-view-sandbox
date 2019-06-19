$('#selection').ready(
    function(){
        text = "<select class='selectpicker' multiple data-live-search='true'>"
        searchTeacher().forEach(teacher => {
            text+= "<option>"+teacher.name+"</option>";
        });
        document.getElementById('selection').innerHTML = text;
    }
);
$("#root").ready(
    function(){
        const app = document.getElementById('root');

        const logo = document.createElement('img');
        logo.src = 'logo.png';
        
        const container = document.createElement('table');
        container.setAttribute('class', 'table');
        
        const table = document.createElement('table');
        container.setAttribute('class', 'table');
        
        //app.appendChild(logo);
        app.appendChild(container);
        app.appendChild(table);
        
        var request = new XMLHttpRequest();
        request.open('GET', 'https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/student', true);
        request.onload = function () {
        
          // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            app.appendChild(container);
            app.appendChild(table);
            data.forEach(student => {
                const card = document.createElement('thead');
                
                const id = document.createElement('th');
                id.textContent = student.id;
                id.setAttribute('scope', 'col');
        
                const name = document.createElement('th');
                name.textContent = student.name;
                name.setAttribute('scope', 'col');
        
                const age = document.createElement('th');
                age.textContent = student.age;
                age.setAttribute('scope', 'col');
        
                const lastname = document.createElement('th');
                lastname.textContent = student.lastName;
                lastname.setAttribute('scope', 'col');

                const course = document.createElement('th');
                course.textContent = student.course.name;
                course.setAttribute('scope', 'col');


            
                container.appendChild(card);
                card.appendChild(id);
                card.appendChild(name);
                card.appendChild(lastname);
                card.appendChild(age);
                card.appendChild(course);
                
        
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
    var url = "https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/student";

    var data = {};
    data.name = document.getElementById("name").value;
    data.period  = document.getElementById("period").value;
    if(document.getElementById("lastname").checked){
        data.lastname = true;
    }else{
        data.lastname = false;
    }
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(students);
        } else {
            console.error(students);
        }
    }
}

function getstudent(){
    var url  = "https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/student";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
	    if (xhr.readyState == 4 && xhr.status == "200") {
		    data.forEach(student => {

                document.getElementById('push').setAttribute('value', student.id);


                document.getElementById("name").value = student.name
                document.getElementById("period").value = student.period
                const name = document.createElement('th');
                name.textContent = student.name;
                document.getElementById("lastname").value = student.lastname;
          
              });
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = 'Ocorreu um erro no sistema';
              alert(errorMessage);
            }
    }
    xhr.send(null);
}

function updatestudent(){
    var url = "https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/student";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.period  = document.getElementById("period").value;
    if(document.getElementById("lastname").checked){
        data.lastname = true;
    }else{
        data.lastname = false;
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        alert(xhr.responseText);
        var student = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(student);
            alert(student);
        } else {
            console.error(student);
            alert(student);
        }
    }
    xhr.send(json);
}

function deletestudent(){
    var url  = "https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/student";
    var xhr = new XMLHttpRequest();
    id = document.getElementById("deleter").value;
    xhr.open("DELETE", url+'/'+id, true);
    xhr.onload = function () {
        alert(xhr.responseText);
        var student = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(student);
        } else {
            console.error(student);
        }
    }
    xhr.send(null);
}


function getOne(){
    var url  = "https://traineeprominas-ncsp-sandbox.herokuapp.com/api/v1/student";
    var xhr  = new XMLHttpRequest()
    const app = document.getElementById('root');
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
    const container = document.createElement('div');
    container.setAttribute('class', 'table');
    const table = document.createElement('table');
    container.setAttribute('class', 'table');
    
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true);
    
    xhr.onload = function () {
        var student = JSON.parse(this.response);
	    if (xhr.readyState == 4 && xhr.status == "200") {
            app.appendChild(container);
            app.appendChild(table);
            
            
            const card = document.createElement('thead');
                
            const id = document.createElement('th');
            id.textContent = student.id;
            id.setAttribute('scope', 'col');
    
            const name = document.createElement('th');
            name.textContent = student.name;
            name.setAttribute('scope', 'col');
    
            const age = document.createElement('th');
            age.textContent = student.age;
            age.setAttribute('scope', 'col');
    
            const lastname = document.createElement('th');
            lastname.textContent = student.lastName;
            lastname.setAttribute('scope', 'col');

            const course = document.createElement('th');
            course.textContent = student.course.name;
            course.setAttribute('scope', 'col');

            const deleter = document.createElement('button');
            deleter.textContent = 'deletar usuário';
            deleter.setAttribute('scope', 'col');
            deleter.setAttribute('id', 'deleter');
            deleter.setAttribute('value', student.id);
            deleter.setAttribute('onclick','deletestudent();');
        
            container.appendChild(card);
            card.appendChild(id);
            card.appendChild(name);
            card.appendChild(lastname);
            card.appendChild(age);
            card.appendChild(course);
            card.appendChild(deleter);
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = 'Ocorreu um erro no sistema';
              app.appendChild(errorMessage);
            }
    }
    xhr.send(null);
}

$('select').selectpicker();