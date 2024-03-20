import './Hero.scss'
import hand from '../assets/wave.png'
import hero_img from '../assets/Tommy-Hilfiger_model.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <div className="hero--left" id='hero-left'>
        <h2>New arrivals only</h2>
            <div className="hand--icon" id='hand-icon'>
                <p>new</p>
                <img src={hand} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        <div className="hero--latest" id='hero-latest'>
            <div className="">Latest collection</div>
            <span> <IoIosArrowDroprightCircle/> </span>
        </div>
      </div>
      <div className="hero--right" id='hero-right'>
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
