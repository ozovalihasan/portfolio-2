import SocialLinks from '../SocialLinks/SocialLinks';
import introImage from '../../assets/intro.jpg'
const Intro = () => (
  <header id="intro">
    <img src={introImage} alt="" />

    <div>
      <div />
      <svg
        viewBox="0 0 210 150"
        preserveAspectRatio="none"
      >
        <g>
          <path
            d="M 1.1708345,-2.4960381 -30.663143,-7.5680199 -19.969839,198.17399 225.85024,150.3891 C -0.09803712,139.83046 10.535889,167.70683 1.1708345,-2.4960381 Z"
          />
        </g>
      </svg>
      <div>
        <h1>
          Hasan Özovalı
        </h1>
        <h2>
          Efficient & Effective
        </h2>
        <p>
          Hello, I am a full stack web developer!
          I can help you build a product, feature, or website.
          I am looking for new opportunities.
        </p>
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  </header>
);


export default Intro;
