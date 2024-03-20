import './Hero.scss'
import hand from '../assets/wave.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero--left">
        <h2>New arrivals only</h2>
        <div className="">
            <div className="hand--icon">
                <p>new</p>
                <img src={hand} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero--latest">
            <div className="">Latest collection</div>
            <span> arrow</span>
        </div>
      </div>
      <div className="hero--right">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Hero
