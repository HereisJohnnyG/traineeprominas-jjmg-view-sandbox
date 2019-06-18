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
