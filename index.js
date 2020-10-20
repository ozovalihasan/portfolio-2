function makeVisible(event) {
  updateVisibility(event, 'visible');
}

function makeHidden(event) {
  updateVisibility(event, 'hidden');
}

function updateVisibility(element, visibility) {
  const seeProject = element.getElementsByClassName('see-project');
  seeProject[0].style.visibility = visibility;
  const programs = element.getElementsByClassName('programs');
  programs[0].style.visibility = visibility;
}

const projects = document.getElementsByClassName('project');

for (let project of projects) {
  project.addEventListener('mouseenter', function (event) {
    makeVisible(event.target);
  });
  project.addEventListener('mouseleave', function (event) {
    if (window.matchMedia('(min-width: 768px)').matches) {
      makeHidden(event.target);
    }
  });
}

window.addEventListener('resize', function (params) {
  for (let project of projects) {
    if (window.matchMedia('(min-width: 768px)').matches) {
      makeHidden(project);
    } else {
      makeVisible(project);
    }
  }
});
