import subhamImage from '../assets/hero.jpeg';
import '../styles/index.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebookSquare } from "react-icons/fa";

const index = () => {
  return (

    <div className="container">
      <div className="navbar">
        <div className="logo">
          <span className="logo-name">Subham</span>
        </div>
        <ul>
          <li><a href="">Service</a></li>
          <li><a href="">Work</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Contact</a></li>
          <button className="hire-me">hire me</button>
        </ul>
      </div>
      <div className="info-container">
        <div className="info">
          <div className="left">
            <span className="subham">I am Subham</span>
            <span className="web">Web Developer +</span>
            <span className="ux">UX Designer</span>
            <p className="para">
              I break down complex user experinece problems to
              <br/> 
              create integritiy
              focussed solutions that connect <br/>billions of people
            </p>
            <div className="link">
              <button className="cv">Download CV</button>
                <CiLinkedin className='linkedin'/>
             
              <FaGithub className='github'/>
              <FaFacebookSquare className='facebook'/>
            </div>
          </div>
          <div className="right">
            <img src={subhamImage} alt="" />
          </div>
        </div>
      </div>
        <div className="skill-container">
            <div className="skill">
                <span>My Skills</span>
                <span>We put your ideas and thus your wishes in the form of a unique web project that <br /> inspires you and you customers.

</span>
            </div>
        </div>
    </div>

  )
}

export default index