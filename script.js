document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value.split(",");
  
    // Fill preview section
    document.getElementById("prevName").innerText = name;
    document.getElementById("prevEmail").innerText = email;
    document.getElementById("prevEducation").innerText = education;
    document.getElementById("prevExperience").innerText = experience;
  
    const skillsList = document.getElementById("prevSkills");
    skillsList.innerHTML = "";
    skills.forEach(skill => {
      const li = document.createElement("li");
      li.innerText = skill.trim();
      skillsList.appendChild(li);
    });
  });
  
  // Download as PDF
  document.getElementById("downloadBtn").addEventListener("click", function () {
    const resume = document.getElementById("resumePreview");
    const opt = {
      margin:       0.5,
      filename:     'My_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().from(resume).set(opt).save();
  });
  