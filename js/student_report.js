var message = ' ';
var student;
var search;
var found = false;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getStudentReport ( student ){
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    return report;
}

while (true) {
    var search = prompt('Search student records: type a name [Christy, Dave, Jen, Louis, Marie] followed by "quit" to view data (or type "quit" to end)');
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    } else {
        for ( var i = 0; i < students.length; i += 1){
            student = students[i];
            if (student.name === search) {
                message += getStudentReport (student);
                found = true;
            }
        }
        if (found == false) {
            print ('No student named ' + search + ' is found.')
        }else {
            print(message);
        }
    }
}
