$("#root").ready(
    function(){
        const app = document.getElementById('root');


        const logo = document.createElement('img');
        logo.src = 'logo.png';
        
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        
        const table = document.createElement('table');
        container.setAttribute('class', 'table');
        
        //app.appendChild(logo);
        app.appendChild(container);
        app.appendChild(table);
        
        var request = new XMLHttpRequest();
        request.open('GET', 'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/course', true);
        request.onload = function () {
        
          // Begin accessing JSON data here
          var data = JSON.parse(this.response);
          if (request.status >= 200 && request.status < 400) {
            app.appendChild(container);
            app.appendChild(table);
            data.forEach(course => {
                const card = document.createElement('thead');
                
                const id = document.createElement('th');
                id.textContent = course.id;
                id.setAttribute('scope', 'col');
        
                const name = document.createElement('th');
                name.textContent = course.name;
                name.setAttribute('scope', 'col');
        
                const period = document.createElement('th');
                period.textContent = course.period;
                period.setAttribute('scope', 'col');
        
                const city = document.createElement('th');
                city.textContent = course.city;
                city.setAttribute('scope', 'col');
                let i = 0;
                teacher_var = [];
                course.teacher.forEach(teacher => {
                    
                    teacher_var[i] = document.createElement('th');
                    teacher_var[i].textContent = teacher.name;
                    teacher_var[i].setAttribute('scope', 'col');
                    i++;                  
                });

            
                container.appendChild(card);
                card.appendChild(id);
                card.appendChild(name);
                card.appendChild(period);
                card.appendChild(city);
                teacher_var.forEach(element => {
                    card.appendChild(element);
                });
        
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
    var url = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/course";

    var data = {};
    data.name = document.getElementById("name").value;
    data.period  = document.getElementById("period").value;
    if(document.getElementById("city").checked){
        data.city = true;
    }else{
        data.city = false;
    }
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(courses);
        } else {
            console.error(courses);
        }
    }
}

function getcourse(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/course";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
	    if (xhr.readyState == 4 && xhr.status == "200") {
		    data.forEach(course => {

                document.getElementById('push').setAttribute('value', course.id);


                document.getElementById("name").value = course.name
                document.getElementById("period").value = course.period
                const name = document.createElement('th');
                name.textContent = course.name;
                
                if(course.city){
                    document.getElementById("city").checked = true;
                }else{
                    document.getElementById("city").checked = false;
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

function updatecourse(){
    var url = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/course";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.period  = document.getElementById("period").value;
    if(document.getElementById("city").checked){
        data.city = true;
    }else{
        data.city = false;
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        alert(xhr.responseText);
        var course = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(course);
            alert(course);
        } else {
            console.error(course);
            alert(course);
        }
    }
    xhr.send(json);
}

function deletecourse(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/course";
    var xhr = new XMLHttpRequest();
    id = document.getElementById("deleter").value;
    xhr.open("DELETE", url+'/'+id, true);
    xhr.onload = function () {
        alert(xhr.responseText);
        var course = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(course);
        } else {
            console.error(course);
        }
    }
    xhr.send(null);
}


function getOne(){
    var url  = "https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1/course";
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
		    data.forEach(course => {const card = document.createElement('thead');
                
            const id = document.createElement('th');
            id.textContent = course.id;
            id.setAttribute('scope', 'col');
    
            const name = document.createElement('th');
            name.textContent = course.name;
            name.setAttribute('scope', 'col');
    
            const period = document.createElement('th');
            period.textContent = course.period;
            period.setAttribute('scope', 'col');
    
            const city = document.createElement('th');
            city.textContent = course.city;
            city.setAttribute('scope', 'col');
            let i = 0;
            teacher_var = [];
            course.teacher.forEach(teacher => {
                
                teacher_var[i] = document.createElement('th');
                teacher_var[i].textContent = teacher.name;
                teacher_var[i].setAttribute('scope', 'col');
                i++;                  
            });

        
            container.appendChild(card);
            card.appendChild(id);
            card.appendChild(name);
            card.appendChild(period);
            card.appendChild(city);
            teacher_var.forEach(element => {
                card.appendChild(element);
            });

          
              });
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = 'Ocorreu um erro no sistema';
              app.appendChild(errorMessage);
            }
    }
    xhr.send(null);
}