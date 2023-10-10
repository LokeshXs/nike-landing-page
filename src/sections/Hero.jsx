import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'

const Hero = () => {


  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id='home' className='w-full  xl:flex-row flex flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col  items-start justify-center  w-full max-xl:padding-x pt-32 '>
        <RevealAnimation><p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p></RevealAnimation>
        <RevealAnimation>  <h1 className='mt-10 font-palanquin text-8xl max-sm:text-4xl font-bold  '>
          <span className='xl:bg-white xl:whitespace-nowrap relative  pr-10 z-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span>  Shoes

        </h1></RevealAnimation>

        <RevealAnimation>
          <p className='font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        </RevealAnimation>

        <RevealAnimation>
          <Button label="Shop now" iconUrl={arrowRight} />
        </RevealAnimation>

        <RevealAnimation>
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealAnimation>
      </div>


      <motion.div initial ={{opacity:0}} animate={{opacity:1}} className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="Shoe collection" width={610} height={500} className='object-contain relative' />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard imageUrl={shoe} changeBigShoeImage={(shoe) => { setBigShoeImg(shoe) }} bigShoeImage={bigShoeImg} />
            </div>
          ))}
        </div>
      </motion.div>


    </section>
  )
}

export default Hero