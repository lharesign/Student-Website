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

function loadCourses() {
    retrievedCourses = JSON.parse(localStorage.getItem("courseArray"));
    console.log(retrievedCourses);
}

function loadStudentInfo() {
    retrievedStudent = JSON.parse(localStorage.getItem("student"));
}

loadCourses();
loadStudentInfo();


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