// Storage Controller
const StorageController = (function() {

    return {
        setCourses: function(newSelectedCourse) {
            localStorage.clear();
            let selectedCourses;
            if (localStorage.getItem('selectedCourses') === null) {
                selectedCourses = [];
                selectedCourses.push(newSelectedCourse);
            } else {
                selectedCourses = JSON.parse(localStorage.getItem('selectedCourses'));
                selectedCourses.push(newSelectedCourse);
            }
            localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
        },

        getCourses: function() {
            let selectedCourses;
            if (localStorage.getItem('selectedCourses') == null) {
                selectedCourses = [];
            } else {
                selectedCourses = JSON.parse(localStorage.getItem('selectedCourses'));
            }
            return selectedCourses;
        }
    }
})();

// Course Controller
const CourseController = (function() {

    // private
    const Course = function(id, name, coursecode, year, point, school, schoolcode, date, period) {
        this.id = id;
        this.name = name;
        this.coursecode = coursecode;
        this.year = year;
        this.point = point;
        this.school = school;
        this.schoolcode = schoolcode;
        this.date = date;
        this.period = period;
    }

    // Fetch From "courses.json"
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'courses.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            kurser = JSON.parse(this.responseText)
            return kurser;
        }
    }
    xhr.send();

    const data = {
        courses: [
            { id: 'svaed', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Eductus', schoolcode: 'ED GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svaed', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Eductus', schoolcode: 'ED GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svaev', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Everystep', schoolcode: 'EV GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' },
            { id: 'svaev', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Everystep', schoolcode: 'EV GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svaev', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Everystep', schoolcode: 'EV GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svafo', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Folkuniversitet', schoolcode: 'FU GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' },
            { id: 'svafo', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Folkuniversitet', schoolcode: 'FU GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svafo', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Folkuniversitet', schoolcode: 'FU GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svahe', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Hermods', schoolcode: 'HE GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svahe', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Hermods', schoolcode: 'HE GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svahe', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Hermods', schoolcode: 'HE GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' },
            { id: 'svaje', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Jensen Education', schoolcode: 'JE GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svaje', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Jensen Education', schoolcode: 'JE GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svaje', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Jensen Education', schoolcode: 'JE GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' },
            { id: 'svajo', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Jobbpunkten', schoolcode: 'JO GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svajo', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Jobbpunkten', schoolcode: 'JO GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svajo', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Jobbpunkten', schoolcode: 'JO GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' },
            { id: 'svako', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Komvux Helsingborg', schoolcode: 'KH GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' },
            { id: 'svako', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Komvux Helsingborg', schoolcode: 'KH GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svale', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Lernia', schoolcode: 'LE GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svale', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Lernia', schoolcode: 'LE GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svale', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Lernia', schoolcode: 'LE GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' },
            { id: 'svame', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Merit', schoolcode: 'ME GRNSVA2 DI', date: '30 dec 2019 - 3 jan 2021', period: 'Distans' },
            { id: 'svame', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Merit', schoolcode: 'ME GRNSVA2 DG', date: '30 dec 2019 - 3 jan 2021', period: 'Dag' },
            { id: 'svame', name: 'Svenska som andraspråk', coursecode: 'GRNSVA2', year: 2020, point: 700, school: 'Merit', schoolcode: 'ME GRNSVA2 KV', date: '30 dec 2019 - 3 jan 2021', period: 'Kväll' }
        ],
        selectedCourses: StorageController.getCourses()
    }

    const SelectedCourse = function(name, school, point) {
        this.name = name;
        this.school = school;
        this.point = point;
    }



    // public
    return {
        getCourses: function() {
            return data.courses;
        },

        getData: function() {
            return data;
        },

        getSelectedCourses: function() {
            return data.selectedCourses;
        },

        addSelectedCourseToArray: function(course, school, point) {
            const newSelectedCourse = new SelectedCourse(course, school, point);
            data.selectedCourses.push(newSelectedCourse);
            return newSelectedCourse;
        }
    }

})();




// UI Controller

const UIController = (function() {
    const Selectors = {
        courseList: "#courses",
        courseLink: ".link",
        aboutCourse: "#aboutCourse",
        courseTitle: "#courseTitle",
        chooseBtn: "#chooseBtn",
        selectedCourseList: "#selectedCourseList",
        komplSelectedCourse: "#komplSelectedCourse",
        moveOn: "#moveOn"
    }

    return {

        getSelectors: function() {
            return Selectors;

        },
        createCourseList: function(courses) {

            document.querySelectorAll(Selectors.courseLink).forEach(element => {
                element.addEventListener('click', addCourseToList);
            });

            function addCourseToList(e) {
                let html = '';
                const linkId = e.target.id;

                founded = courses.filter(item => {
                    return item.id == linkId;
                });
                for (let i = 0; i < founded.length; i++) {
                    const element = founded[i];
                    courseId = element.id.toUpperCase();
                    if (e.target.id.toUpperCase().indexOf(courseId) > -1) {

                        var a = e.target.parentElement.parentElement.previousElementSibling.innerText;
                        var b = e.target.innerText;
                        title = a + "/" + b;
                        document.getElementById("courseTitle").innerText = title;
                    }
                    html +=
                        `
                                            <tr id="${element.id}">
                                                <th scope="col">${element.name}</th>
                                                <th scope="col">${element.coursecode}</th>
                                                <th scope="col">${element.year}</th>
                                                <th scope="col">${element.point} Poäng</th>
                                                <th class="pt-3 text-right" rowspan="2">
                                                    <button class="btn btn-primary chooseBtn">Välj kurs</button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>${element.school}</td>
                                                <td>${element.schoolcode}</td>
                                                <td>${element.date}</td>
                                                <td>${element.period}</td>
                                                <td></td>
                                            </tr> 
                        `;
                    document.querySelector(Selectors.courseList).innerHTML = html;

                }


            }


        },
        addCourse: function(e) {

            if (e.target.classList.contains("selected") != true) {
                if (e.target.classList.contains("chooseBtn")) {
                    e.target.classList.add("selected");
                    setTimeout(() => {
                        e.target.classList.remove("selected");
                    }, 5000);
                    //console.log(e.target.classList.contains("selected"));
                    let slctcourse = '';
                    slctcourse += `
                         <tr>
                            <td>${e.target.parentElement.parentElement.firstElementChild.textContent}</td>
                            <td>${e.target.parentElement.parentElement.nextElementSibling.firstElementChild.textContent}</td>
                            <td>${e.target.parentElement.previousElementSibling.textContent}</td>
                            <td><i class="fas fa-trash-alt delete"></i></td>
                        </tr>
            `;
                    document.querySelector(Selectors.selectedCourseList).innerHTML += slctcourse;

                }
            }
            e.preventDefault();
        },

        deleteCourse: function(e) {
            if (e.target.classList.contains("delete")) {
                e.target.parentElement.parentElement.remove();
            }
        }
    }


})();


// App Controller
const App = (function(CourseCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UICtrl.getSelectors();
    // loadEventListeners
    loadEventListener = function() {
        document.querySelector(UISelectors.courseList).addEventListener('click', selectedCourse);
        document.querySelector(UISelectors.selectedCourseList).addEventListener('click', deleteCourse);
        document.querySelector(UISelectors.moveOn).addEventListener('click', moveOn);
    }

    moveOn = function() {
        const tr = document.querySelector(UISelectors.selectedCourseList).children;
        for (let i = 0; i < tr.length; i++) {
            const element = tr[i];
            const course = element.firstElementChild.textContent;
            const school = element.firstElementChild.nextElementSibling.textContent;
            const point = element.lastElementChild.previousElementSibling.textContent;

            // console.log(course, school, point);

            if (course !== '' && school !== '' && point !== '') {
                // Add selected course
                const newSelectedCourse = CourseCtrl.addSelectedCourseToArray(course, school, point);

                // add course to LS
                StorageCtrl.setCourses(newSelectedCourse);
            }
        }

        //e.preventDefault();
    }


    selectedCourse = function(e) {
        UICtrl.addCourse(e);
        e.preventDefault();
    }

    deleteCourse = function(e) {
        UICtrl.deleteCourse(e);
        e.preventDefault();
    }


    return {
        init: function() {
            console.log('starting app...');
            const courses = CourseCtrl.getCourses();

            UICtrl.createCourseList(courses);



            loadEventListener();
        }
    }


})(CourseController, UIController, StorageController);

App.init();



// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}