//get refference to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();     //prevent page reload

    //Colect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const father_name = (document.getElementById('father-name') as HTMLInputElement).value
    const phone_num = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contentEditable="true">${name}</span></p>
    <p><b>Father Name:</b><span contentEditable="true">${father_name}</span></p>
    <p><b>Phone_num:<b/><span contentEditable="true">${phone_num}</span></p>
    <p><b>Email:</b><span contentEditable="true">${email}</span></p>

    <h3>Education</h3>
    <p contentEditable="true">${education}</p>

    <h3>Experience</h3>
    <p contentEditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contentEditable="true">${skills}</p>
    `;

    //Display the generated resume
    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error(`The resume display element is missing.`);
    }
});
