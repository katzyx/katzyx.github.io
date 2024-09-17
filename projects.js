const projects = [
    {
      title: "Personal Shopping Site",
      description: "A personalized cosmetics e-commerce platform using GenAI to deliver tailored product recommendations.",
      image: "/assets/img/project-music-player.png",
      tools: "Python, PHP, HTML, CSS, Bootstrap",
      link: "http://18.234.86.205/personal/index.php",
      github: "https://github.com/katzyx/Personal-Shopping-Site"
    },
    {
      title: "Video Game Genre Detection",
      description: "A video game genre detector built using transfer learning from AlexNet.",
      image: "/assets/img/project-quizup-logo-1.png",
      tools: "Python, PyTorch, TensorFlow",
      link: "https://quiz-up-app.herokuapp.com/",
      github: "https://github.com/EthanHugh/APS360"
    },
    {
      title: "Software Defined Radio",
      description: "Microcontroller subsystem for a Software-Defined Radio (SDR) transceiver.",
      image: "/assets/img/project-blog-logo.jpg",
      tools: "Python, C/C++, Altium Designer",
      github: "https://github.com/katzyx/SDR-Firmware"
    },
  ];
  
  // number of projects displayed
  let displayed_projects = 0;

function project_html(project) {
  return `
    <div class="col s12 m6 l4">
      <div class="card medium project-card">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title}" src="${project.image}" class="activator" />
        </div>
        <div class="card-content project-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p class="project-description">${project.description}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            <li><b>Tools:</b> ${project.tools}</li>
          </ul>
          <div class="card-action">
            <a href="${project.link}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-tooltip="View Online"><i class="fa fa-external-link"></i></a>
            <a href="${project.github}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped" data-tooltip="View Source"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to display the latest project (or more)
function display_projects(count) {
  const proj_container = document.getElementById('recent-projects');
  for (let i = displayed_projects; i < displayed_projects + count && i < projects.length; i++) {
    proj_container.innerHTML += project_html(projects[i]);
  }
  displayed_projects += count;
  
  // Hide "Load More" button if all projects are displayed
  if (displayed_projects >= projects.length) {
    document.getElementById('load-more-btn').style.display = 'none';
  }
}

// Event listener for "Load More" button
document.getElementById('load-more-btn').addEventListener('click', function() {
    display_projects(1); // Load one more project on each click
});

// Display the most recent project initially
display_projects(1);
