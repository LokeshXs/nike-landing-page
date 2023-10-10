import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import RevealAnimation from "../components/RevealAnimation"


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        
      <RevealAnimation>
      <h2 className='font-palanquin capitalize text-4xl font-bold lg:max-w-lg max-sm:text-3xl'>
         We provide You
          <br />
          <span className='text-coral-red'>super </span>
          <span className='text-coral-red'>Quality</span> Shoes

        </h2>
      </RevealAnimation>

        <RevealAnimation>
        <p className='mt-4 lg:max-w-lg info-text'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        </RevealAnimation>
        <RevealAnimation>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe accusantium ratione eveniet reprehenderit nulla suscipit tempore beatae non fugit?</p>
        </RevealAnimation>
      <RevealAnimation>
      <div className="mt-11">
        <Button label="View Details"  />
        </div>
      </RevealAnimation>
        
      </div>

      <div className="flex-1 flex justify-center items-center">
<img src={shoe8} alt="Shoe 8" width={570} height={520} className="object-contain"  />
      </div>
    </section>
  )
}

export default SuperQuality