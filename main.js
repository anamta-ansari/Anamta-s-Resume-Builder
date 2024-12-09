var resumeForm = document.getElementById('resumeForm');
var resumeLeft = document.getElementById('resumeLeft');
var resumeRight = document.getElementById('resumeRight');
var downloadPdfButton = document.getElementById('downloadPdf');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    var about = document.getElementById('about').value;
    var education = document.getElementById('education').value;
    var projects = document.getElementById('projects').value;
    var experience = document.getElementById('experience').value;
    // Create resume object
    var resume = { name: name, email: email, phone: phone, skills: skills, about: about, education: education, projects: projects, experience: experience };
    // Display the resume in two different divs
    displayResume(resume);
});
// Function to display resume in two different divs
function displayResume(resume) {
    resumeLeft.innerHTML = "\n        <h2>".concat(resume.name, "'s Resume</h2>\n        <h3>Personal Information</h>\n        <p><strong>Name:</strong> ").concat(resume.name, "</p>\n        <p><strong>Email:</strong> ").concat(resume.email, "</p>\n        <p><strong>Phone:</strong> ").concat(resume.phone, "</p>\n        <p><strong>About:</strong> ").concat(resume.about, "</p>\n    ");
    resumeRight.innerHTML = "\n        <h3>Professional Information</h>\n        <p><strong>Education:</strong> ".concat(resume.education, "</p>\n        <p><strong>Skills:</strong> ").concat(resume.skills.join(', '), "</p>\n        <p><strong>Projects:</strong> ").concat(resume.projects, "</p>\n        <p><strong>Experience:</strong> ").concat(resume.experience, "</p>\n    ");
}
// first pdf
function downloadPDF() {
    // @ts-ignore
    var jsPDF = window.jspdf.jsPDF; // Ensure jsPDF is imported
    var doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Resume', 10, 10);
    doc.setFontSize(12);
    doc.text('Name: ' + document.getElementById('name').value, 10, 20);
    doc.text('Email: ' + document.getElementById('email').value, 10, 30);
    doc.text('Phone: ' + document.getElementById('phone').value, 10, 40);
    doc.text('About: ' + document.getElementById('about').value, 10, 60);
    doc.text('Skills: ' + document.getElementById('skills').value, 10, 50);
    doc.text('Education: ' + document.getElementById('education').value, 10, 70);
    doc.text('Projects: ' + document.getElementById('projects').value, 10, 80);
    doc.text('Experience: ' + document.getElementById('experience').value, 10, 90);
    doc.save('resume.pdf');
}
// NEW: Event listener for download button
downloadPdfButton.addEventListener('click', downloadPDF);
// Function to share the URL
function shareUrl(uniqueUrl) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this Resume',
            text: 'View this awesome resume!',
            url: uniqueUrl,
        })
            .then(function () { return console.log('Successful share'); })
            .catch(function (error) { return console.log('Error sharing:', error); });
    }
    else {
        // Fallback if Web Share API is not available
        alert("Copy and share this URL: ".concat(uniqueUrl));
    }
}
// function downloadPDF() {
//     // @ts-ignore
//     const { jsPDF } = window.jspdf; // Ensure jsPDF is imported
//     const doc = new jsPDF();
//     // Set a title font
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(22);
//     doc.text('Resume', 105, 20, { align: 'center' }); // Centered title
//     // Set Personal Information Section
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(16);
//     doc.setTextColor(40, 40, 40);
//     doc.text('Personal Information', 10, 40);
//     // Set Name
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "bold");
//     doc.text('Name: ', 10, 50);
//     doc.setFont("helvetica", "normal");
//     doc.text((document.getElementById('name') as HTMLInputElement).value, 40, 50);
//     // Set Email
//     doc.setFont("helvetica", "bold");
//     doc.text('Email: ', 10, 60);
//     doc.setFont("helvetica", "normal");
//     doc.text((document.getElementById('email') as HTMLInputElement).value, 40, 60);
//     // Set Phone
//     doc.setFont("helvetica", "bold");
//     doc.text('Phone: ', 10, 70);
//     doc.setFont("helvetica", "normal");
//     doc.text((document.getElementById('phone') as HTMLInputElement).value, 40, 70);
//     // Add a line separator
//     doc.setDrawColor(0);
//     doc.setLineWidth(0.5);
//     doc.line(10, 80, 200, 80);
//     // Set Professional Information Section
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text('Professional Information', 10, 90);
//     // Set Education
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "bold");
//     doc.text('Education: ', 10, 100);
//     doc.setFont("helvetica", "normal");
//     doc.text((document.getElementById('education') as HTMLTextAreaElement).value, 40, 100);
//     // Set Skills
//     doc.setFont("helvetica", "bold");
//     doc.text('Skills: ', 10, 110);
//     doc.setFont("helvetica", "normal");
//     doc.text((document.getElementById('skills') as HTMLInputElement).value, 40, 110);
//     // Set Projects
//     doc.setFont("helvetica", "bold");
//     doc.text('Projects: ', 10, 120);
//     doc.setFont("helvetica", "normal");
//     doc.text((document.getElementById('projects') as HTMLTextAreaElement).value, 40, 120);
//     // Set Experience
//     doc.setFont("helvetica", "bold");
//     doc.text('Experience: ', 10, 130);
//     doc.setFont("helvetica", "normal");
//     doc.text((document.getElementById('experience') as HTMLTextAreaElement).value, 40, 130);
//     // Add a footer
//     doc.setFontSize(10);
//     doc.setTextColor(150, 150, 150);
//     doc.text('Generated using jsPDF', 105, 290, { align: 'center' }); // Footer centered
//     doc.save('styled_resume.pdf');
// }
// // Function to generate and download PDF
// function downloadPDF() {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text('Resume', 10, 10);
//     doc.setFontSize(12);
//     doc.text('Name: ' + (document.getElementById('name') as HTMLInputElement).value, 10, 20);
//     doc.text('Email: ' + (document.getElementById('email') as HTMLInputElement).value, 10, 30);
//     doc.text('Phone: ' + (document.getElementById('phone') as HTMLInputElement).value, 10, 40);
//     doc.text('Skills: ' + (document.getElementById('skills') as HTMLInputElement).value, 10, 50);
//     doc.text('About: ' + (document.getElementById('about') as HTMLTextAreaElement).value, 10, 60);
//     doc.text('Education: ' + (document.getElementById('education') as HTMLTextAreaElement).value, 10, 70);
//     doc.text('Projects: ' + (document.getElementById('projects') as HTMLTextAreaElement).value, 10, 80);
//     doc.text('Experience: ' + (document.getElementById('experience') as HTMLTextAreaElement).value, 10, 90);
//     doc.save('resume.pdf');
// }
// downloadPdfButton.addEventListener('click', downloadPDF);
