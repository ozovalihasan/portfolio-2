function updateProjectVisibility(element, visibility) {
  const seeProject = element.getElementsByClassName('project-links');
  seeProject[0].style.visibility = visibility;
  const programs = element.getElementsByClassName('programs');
  programs[0].style.visibility = visibility;
}

function makeVisible(event) {
  updateProjectVisibility(event, 'visible');
}

function makeHidden(event) {
  updateProjectVisibility(event, 'hidden');
}

const projects = document.getElementsByClassName('project');

for (let i = 0; i < projects.length; i += 1) {
  projects[i].addEventListener('mouseenter', (event) => {
    makeVisible(event.target);
  });
  projects[i].addEventListener('mouseleave', (event) => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      makeHidden(event.target);
    }
  });
}

window.addEventListener('resize', () => {
  for (let i = 0; i < projects.length; i += 1) {
    if (window.matchMedia('(min-width: 768px)').matches) {
      makeHidden(projects[i]);
    } else {
      makeVisible(projects[i]);
    }
  }
});


const body = document.getElementById('body');
const loader = document.getElementById('loader');

body.style.visibility = 'hidden';
loader.style.visibility = 'visible';

window.onload = function () {
  body.style.visibility = 'visible';
  loader.style.display = 'none';
};
