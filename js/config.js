const config = {
    local: {
      resumeUrl: 'resume/siddhesh_resume.pdf'
    },
    production: {
      resumeUrl: 'https://github.com/sidd-1967/Portfolio/raw/main/resume/siddhesh_resume.pdf'  
    }
  };
  
  // Check if the current environment is local (file:// protocol) or production (http:// or https://)
  const isLocal = window.location.protocol === 'file:';
  
  // Get the appropriate URL based on the environment
  const resumeUrl = isLocal ? config.local.resumeUrl : config.production.resumeUrl;
  
  // Add event listener for the "Download Resume" button
  document.getElementById("downloadButton").addEventListener("click", function() {
    window.location.href = resumeUrl;  // Redirect to the download URL
  });
  