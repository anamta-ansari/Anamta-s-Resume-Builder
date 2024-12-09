interface Resume {
    name: string;
    email: string;
    phone: string;
    about: string;
    skills: string[];
    education: string;
    projects: string;
    experience: string;
}

const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeLeft = document.getElementById('resumeLeft') as HTMLDivElement;
const resumeRight = document.getElementById('resumeRight') as HTMLDivElement;
const downloadPdfButton = document.getElementById('downloadPdf') as HTMLButtonElement;

resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Create resume object
    const resume: Resume = { name, email, phone, skills, about, education, projects, experience };
    
    // Display the resume in two different divs
    displayResume(resume);
});

// Function to display resume in two different divs
function displayResume(resume: Resume) {
    resumeLeft.innerHTML = `
        <h2>${resume.name}'s Resume</h2>
        <h3>Personal Information</h>
        <p><strong>Name:</strong> ${resume.name}</p>
        <p><strong>Email:</strong> ${resume.email}</p>
        <p><strong>Phone:</strong> ${resume.phone}</p>
        <p><strong>About:</strong> ${resume.about}</p>
    `;

    resumeRight.innerHTML = `
        <h3>Professional Information</h>
        <p><strong>Education:</strong> ${resume.education}</p>
        <p><strong>Skills:</strong> ${resume.skills.join(', ')}</p>
        <p><strong>Projects:</strong> ${resume.projects}</p>
        <p><strong>Experience:</strong> ${resume.experience}</p>
    `;
}

// first pdf
function downloadPDF() {
    // @ts-ignore
    const { jsPDF } = window.jspdf; // Ensure jsPDF is imported

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Resume', 10, 10);

    doc.setFontSize(12);
    doc.text('Name: ' + (document.getElementById('name') as HTMLInputElement).value, 10, 20);
    doc.text('Email: ' + (document.getElementById('email') as HTMLInputElement).value, 10, 30);
    doc.text('Phone: ' + (document.getElementById('phone') as HTMLInputElement).value, 10, 40);
    doc.text('About: ' + (document.getElementById('about') as HTMLTextAreaElement).value, 10, 60);
    doc.text('Skills: ' + (document.getElementById('skills') as HTMLInputElement).value, 10, 50);
    doc.text('Education: ' + (document.getElementById('education') as HTMLTextAreaElement).value, 10, 70);
    doc.text('Projects: ' + (document.getElementById('projects') as HTMLTextAreaElement).value, 10, 80);
    doc.text('Experience: ' + (document.getElementById('experience') as HTMLTextAreaElement).value, 10, 90);

    doc.save('resume.pdf');
}

// NEW: Event listener for download button
downloadPdfButton.addEventListener('click', downloadPDF);
