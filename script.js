//get refference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //Colect input values
    var name = document.getElementById('name').value;
    var father_name = document.getElementById('father-name').value;
    var phone_num = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contentEditable=\"true\">".concat(name, "</span></p>\n    <p><b>Father Name:</b><span contentEditable=\"true\">").concat(father_name, "</span></p>\n    <p><b>Phone_num:<b/><span contentEditable=\"true\">").concat(phone_num, "</span></p>\n    <p><b>Email:</b><span contentEditable=\"true\">").concat(email, "</span></p>\n\n    <h3>Education</h3>\n    <p contentEditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contentEditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contentEditable=\"true\">").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
