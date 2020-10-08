var coursesCompleted =  {
        kursNamn: "HTML",
        slutDatum: "19/09/2020",
        betyg: "A",
        points: 100
};
var coursesCompletedX =  {
        kursNamn: "CSS",
        slutDatum: "30/09/2020",
        betyg: "B",
        points: 200
};
var coursesCompletedY =  {
    kursNamn: "JavaScript",
    slutDatum: "10/10/2020",
    betyg: "C",
    points: 300
};

var coursesArray = [coursesCompleted, coursesCompletedX, coursesCompletedY];
console.log(coursesArray);


var student = localStorage.getItem('student');
student = JSON.parse(student);
console.log(student);




function createCertificate () {

    for(let i= 0; i < coursesArray.length; i++) {
    var student_name = student["forrnamn"] + " " + student["efternamn"];
    var kursNamn = coursesArray[i]["kursNamn"];
    var slutDatum = coursesArray[i]["slutDatum"];
    
    
    var main_node = document.getElementById("page-container");
    console.log("The main node : " + main_node);
    var div_node_model_c = document.createElement('div');
    div_node_model_c.setAttribute("class", "modal-container");
    console.log("The div node : " + div_node_model_c);
    
    main_node.appendChild(div_node_model_c);

    console.log(main_node);

    var nodes = "<div class=\"certificate\" onclick=\"displayModal(this)\"> \
                    <h3 class=\"kurstitle\">" + kursNamn + "</h3> \
                 </div> \
                 <div class=\"modal\"> \
                    <div class=\"close\">&times;</div> \
                    <div class=\"modal-box\"> \
                        <img src=\"images/komvuxlogo.png\" alt=\"Logo\" class=\"img_style\"> \
                        <h4> KOMVUX HELSINGBORG </h4> \
                        <h1>Congratulations!</h1> \
                        <h3><em>This is to certify that:</em></h3> \
                        <h3 class=\"namn\">" + student_name + "</h3> \
                        <h3><em>has successfully completed the</em></h3> \
                        <h3 class=\"kursNamn\">" + kursNamn + "</h3> \
                        <h3><em>on <span class=\"slutDatum\">" + slutDatum + "</span></em></h3> \
                    </div> \
                </div>";
    document.getElementsByClassName("modal-container")[i].innerHTML = nodes;

    //Fix the html so it displays properly with escape chars and then add modal boxes
    
    
    
    
    /*console.log(student_name);
    document.getElementById("namn").innerHTML = student_name;
    document.getElementById("kursNamn").innerHTML = coursesArray[i]["kursNamn"];
    document.getElementById("slutDatum").innerHTML = coursesArray[i]["slutDatum"];*/
    }
}

function displayModal(element) {

    var modal = element.nextElementSibling;
    modal.style.display = "block";

    console.log("The modal " + modal);
    var cross = modal.getElementsByClassName("close")[0];
    cross.addEventListener("click", function() {
        
    /*console.log("The firstChild " + cross);*/
    if(modal.style.display == "block") {
        modal.style.display = "none";
    }
    })
    /*var cert = cross.nextElementSibling;
    cert.style.display = "block";*/
}


createCertificate();































// FOR MODAL DOCS

// Assign modal-doc to modalDoc and the close span to closeSpan.
var modalDoc = document.getElementsByClassName("modal-doc");
var closeSpan = document.getElementsByClassName("close");


// Loop through each of the modal-doc elements
for (let i = 0; i < modalDoc.length; i++) {

    // Add an on-click listener to each of the modal-doc elements
    modalDoc[i].addEventListener("click", function () {

        // Assign modal-box to modalBox and fetch modal-content and model-caption
        var modalBox = this.nextElementSibling;
        let modalContent = modalBox.querySelector('.modal-content');
        let captionText = modalBox.querySelector('.modal-caption');
        
        // Display modalBox, set modal-content src and alt to modal-doc src and alt
        modalBox.style.display = "block";
        modalContent.src = modalDoc[i].src;
        captionText.innerHTML = modalDoc[i].alt;

        // Add an onlcick listener to close modal image when X is clicked
        closeSpan[i].addEventListener("click", function () {

            // Display modalBox
            modalBox.style.display = "none";
    
        });
    }
    );
}