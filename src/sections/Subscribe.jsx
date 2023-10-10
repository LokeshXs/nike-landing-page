import Button from "../components/Button"
import RevealAnimation from "../components/RevealAnimation"


const Subscribe = () => {
  return (
    <section className="max-container justify-between items-center max-lg:flex-col gap-10 " id="contact-us">
      <RevealAnimation width="100%">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin text-center font-bold max-sm:text-3xl">
        Sign Up for <span className="text-coral-red">
          Updates
        </span> & Newsletter
      </h3>
      </RevealAnimation>
     <RevealAnimation width="100%">
     <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 mt-4 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth={true} />
        </div>
      </div>
     </RevealAnimation>
    </section>
  )
}

export default Subscribe