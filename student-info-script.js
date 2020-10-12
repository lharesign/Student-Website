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

    for (var key in student) {
        student[key] = retrievedObject[key];

    }
    student.personnummer = "19931211-2437";
    student.forrnamn = "Luke";
    student.efternamn = "Haresign";
    student.modersmal = "Engelska";
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
        newNode.setAttribute("class", "edit-me info-input");
        editableFields[i].parentNode.replaceChild(newNode, editableFields[i]);
        document.getElementById(idValue).value = student[idValue];
    }

}

function saveUpdates() {

    var address = document.getElementById("adress").value;
    var postcode = document.getElementById("postnummer").value;
    var town = document.getElementById("ort").value;
    var mobile = document.getElementById("telefonMobil").value;
    var emailAddress = document.getElementById("email").value;
    var emailConfirm = document.getElementById("confirmEmail").value;
    var homeCommunity = document.getElementById("hemkommun").value;
    var asterix = document.querySelectorAll(".obligatory-asterix");

    console.log(asterix);

    var success = true;

    if ((address.length === 0) || (postcode.length === 0) || (town.length === 0) || (mobile.length === 0) || (emailAddress.length === 0) || (emailConfirm.length === 0) || (homeCommunity.length === 0)) {
        success = false;
        for (let i = 0; i < asterix.length; i++) {
            asterix[i].style.display = "inline";
        }
    }

    console.log(success);

    if (success) {
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
            newNode.setAttribute("class", "edit-me info-span");
            editableFields[i].parentNode.replaceChild(newNode, editableFields[i]);
            document.getElementById(idValue).innerHTML = student[idValue];
        }

        for (let i = 0; i < asterix.length; i++) {
            asterix[i].style.display = "none";
        }

        localStorage.setItem('student', JSON.stringify(student))
        var retrievedObject = localStorage.getItem('student');
    }

}