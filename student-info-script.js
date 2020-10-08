var student = {
    personnummer: "19931211-2437",
    forrnamn: "Luke",
    efternamn: "Haresign",
    adress: "148b Övre Långvinkelsgatan",
    coAdress: "NA",
    postnummer: 25436,
    ort: "Helsingborg",
    telefon: "NA",
    telefonMobil: "+447595869197",
    email: "luke@lukeharesign.com",
    confirmEmail: "luke@lukeharesign.com",
    hemkommun: "Helsingborg",
    modersmal: "Engelska"
};

function updateStudent() {
    var retrievedObject = localStorage.getItem('student');
    retrievedObject = JSON.parse(retrievedObject);
    console.log(retrievedObject);
    
    for (var key in student)
    {
        console.log(retrievedObject[key]);
        student[key] = retrievedObject[key];
        
    }
    console.log(student);
}

updateStudent();

function insertStudentInformation() {

    for (var key in student) {
        if (document.getElementById(key).nodeName == "SPAN") {
            document.getElementById(key).innerHTML = student[key];
        }
        else if (document.getElementById(key).nodeName == "INPUT") {
            document.getElementById(key).value = student[key];
        }
    }
}

insertStudentInformation();


function editData() {

    var editableFields = document.querySelectorAll(".edit-me");

    for (let i = 0; i < editableFields.length; i++) {
        var idValue = editableFields[i].getAttribute("id");
        var newNode = document.createElement('input');

        newNode.setAttribute("id", idValue);
        newNode.setAttribute("class", "edit-me");
        editableFields[i].parentNode.replaceChild(newNode, editableFields[i]);
        document.getElementById(idValue).value = student[idValue];
    }

}

function saveUpdates() {
    for (var key in student) {
        

        if (document.getElementById(key).nodeName == "SPAN") {
            student[key] = document.getElementById(key).innerHTML;
        }
        else if (document.getElementById(key).nodeName == "INPUT") {
            student[key] = document.getElementById(key).value;
        }
    }

    

   
    var editableFields = document.querySelectorAll(".edit-me");
    for (let i = 0; i < editableFields.length; i++) {
        var idValue = editableFields[i].getAttribute("id");
        var newNode = document.createElement('span');

        newNode.setAttribute("id", idValue);
        newNode.setAttribute("class", "edit-me");
        editableFields[i].parentNode.replaceChild(newNode, editableFields[i]);
        document.getElementById(idValue).innerHTML = student[idValue];
    }

    localStorage.setItem('student', JSON.stringify(student))
    var retrievedObject = localStorage.getItem('student');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
}