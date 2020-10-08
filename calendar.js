var calendar = document.getElementById("my-table");
console.log("Testing");
console.log(calendar);

var columns = 8;
var rows = 8;

function createTable() {
    for (let i = 0; i < rows; i++) {
        var text = "<tr>";
        var time;
        switch (i) {
            case 0:
                time = "09:00";
                break;
            case 1:
                time = "10:00";
                break;
            case 2:
                time = "11:00";
                break;
            case 3 : 
                time = "12:00";
                break;
            case 4 : 
                time = "01:00";
                break;
            case 5 : 
                time = "02:00";
                break;
            case 6 : 
                time = "03:00";
                break;
            case 7 : 
                time = "04:00";
                break;
            default: 
                time = "Time";
                break;
        }
        /*-------j identifies Day of the Week-------------------*/
        for (let j = 0; j < columns; j++) { 
            if(j == 0) {
                text += "<td>" + time + "</td>";
            }
            else {
                if(j == 1 && time == "09:00") {
                    text += "<td> Monday 09:00 Programming </td>";
                }
                else {
                    text += "<td> NA </td>"; 
                }
            }

        }
        text += "</tr>";
        calendar.innerHTML += text;
        console.log(text);

    }

}

createTable();

//var table = document.querySelectorAll("#calendar-table");