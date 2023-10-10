import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
import RevealAnimation from "../components/RevealAnimation"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-start  gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">

        <RevealAnimation>
          <h2 className='font-palanquin capitalize text-4xl font-bold lg:max-w-lg max-sm:text-3xl'>

            <br />
            <span className='text-coral-red'>Special </span>
            Offer

          </h2>
        </RevealAnimation>

        <RevealAnimation>
          <p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut optio, omnis molestiae nesciunt delectus expedita tempora, soluta eaque asperiores modi odit recusandae voluptatum earum! Sequi nostrum ipsum quod dicta, eum quas excepturi ab voluptate, facere error dignissimos, eveniet enim.</p>
        </RevealAnimation>
        <RevealAnimation>
          <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim debitis facilis cum totam expedita dolor, quia maiores iste doloribus, sapiente quibusdam non beatae, fugiat eum delectus veritatis necessitatibus repellendus?</p>
        </RevealAnimation>
        <RevealAnimation>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
        </RevealAnimation>

      </div>

    </section>
  )
}

export default SpecialOffer