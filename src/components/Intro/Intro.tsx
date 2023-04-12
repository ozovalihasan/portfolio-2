import SocialLinks from '../SocialLinks/SocialLinks';
import introImage from '../../assets/intro.jpg'
const Intro = () => (
  <header id="intro" className='relative w-full  '>
    
    <div className='relative w-full'>
      
      <div className="h-auto md:h-[550px] top-0 left-0 w-full ">
        <img src={introImage} alt="" className='object-cover w-full h-full absolute top-0 left-0 -z-10'/>
        <div className="absolute w-full top-0 left-0 bg-transparent bg-gradient-to-r from-first to-first bg-opacity-95 h-full opacity-95 -z-10"></div>
        <svg
          className='hidden md:block fill-fifth w-full h-full absolute top-0 left-0 -z-10'
          viewBox="0 0 210 150"
          preserveAspectRatio="none"
        >
          <g>
            <path
              d="M 1.1708345,-2.4960381 -30.663143,-7.5680199 -19.969839,198.17399 225.85024,150.3891 C -0.09803712,139.83046 10.535889,167.70683 1.1708345,-2.4960381 Z"
            />
          </g>
        </svg>
        <div className='p-16 z-50 top-0 left-0'>
          <h1 className='text-5xl pt-8 '>
            Hasan Özovalı
          </h1>
          <h2 className='text-3xl pt-4'>
            Full Stack Web Developer
          </h2>
          <p className='text-xl pb-8'>
            I can help you build a product, feature, or website.
            I am looking for new opportunities.
          </p>
          
          <SocialLinks />
        </div>
      </div>

    </div>
  </header>
);


export default Intro;
