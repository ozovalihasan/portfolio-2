const Project = ()=> (
    
<article class="project position-relative mt-4 col-lg-6">
          <div class="position-relative">
            <img src="assets/project1.jpg" class="w-100 border-radius" alt="" />
            <div
              class="project-image w-100 position-absolute border-radius"
            ></div>
          </div>
          <h2 class="text-third position-absolute bold-big-font">Whistle</h2>
          <div class="programs d-flex text-center p-2 flex-wrap">
            <div
              class="text-sixth bg-third flex-wrap my-2 p-2 px-3 rounded-pill"
            >
              HTML/CSS
            </div>
            <div
              class="text-sixth bg-third flex-wrap my-2 p-2 px-3 rounded-pill"
            >
              Ruby
            </div>
            <div
              class="text-sixth bg-third flex-wrap my-2 p-2 px-3 rounded-pill"
            >
              Ruby on Rails
            </div>
          </div>
          <div class="project-links d-flex">
            <a
              href="https://whiistle.herokuapp.com/"
              class="bg-first text-fifth p-3 mx-2 rounded-pill d-block text-center bg-hover-seventh"
              target="_blank"
              title="Live Demo"
            >
              <i class="far fa-2x fa-paper-plane"></i>
            </a>

            <a
              href="https://github.com/ozovalihasan/whistle#readme"
              class="bg-first text-fifth p-3 mx-2 rounded-pill d-block text-center bg-hover-seventh"
              target="_blank"
              title="Source Code"
            >
              <i class="fab fa-2x fa-github"></i>
            </a>
          </div>
        </article>
)
