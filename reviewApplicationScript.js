var retrievedStudent = {
    personnummer: null,
    forrnamn: null,
    efternamn: null,
    adress: null,
    coAdress: null,
    postnummer: null,
    ort: null,
    telefon: null,
    telefonMobil: null,
    email: null,
    confirmEmail: null,
    hemkommun: null,
    modersmal: null
};

var retrievedCourses = [];

var retrievedMotivering = {
    studiemedel: null,
    studietakt: null,
    motivering: null
}

function loadCourses() {
    retrievedCourses = JSON.parse(localStorage.getItem("courseArray"));
    console.log(retrievedCourses);
}

function loadStudentInfo() {
    retrievedStudent = JSON.parse(localStorage.getItem("student"));
}

function loadMotiveringAnswers() {
    retrievedMotivering = JSON.parse(localStorage.getItem("motiveringAnswers"));
}


loadCourses();
loadStudentInfo();
loadMotiveringAnswers();


console.log(retrievedMotivering);

function insertStudentInformation() {

    for (var key in retrievedStudent) {
        if (document.getElementById(key).nodeName == "SPAN") {
            document.getElementById(key).innerHTML = retrievedStudent[key];
        }
        else if (document.getElementById(key).nodeName == "INPUT") {
            document.getElementById(key).value = retrievedStudent[key];
        }
    }
}

insertStudentInformation();
console.log(typeof (retrievedCourses));
function insertCourtInformation() {
    for (let i = 0; i < retrievedCourses.length; i++) {
        let slctcourse = "<tr>";
        for (let key in retrievedCourses[i]) {
            console.log(retrievedCourses[i][key]);

            slctcourse += "<td>" + retrievedCourses[i][key] + "</td>";
        }
        slctcourse += "<tr>";
        document.getElementById("selectedCourseList").innerHTML += slctcourse;
    }
}

insertCourtInformation();

function insertMotivering() {
    
        let motivering = "<br>";
        for (let key in retrievedMotivering) {
            console.log(retrievedMotivering[key]);
            motivering  += "<tr><td class= \"bold-text\">" + key + "</td>";
            motivering  += "<td class=\"wide-field\">" + retrievedMotivering[key] + "</td></tr>";
        }
        document.getElementById("motiveringList").innerHTML += motivering;
    }



insertMotivering()