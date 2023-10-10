import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
import RevealAnimation from "../components/RevealAnimation"

const Services = () => {
  return (
        <RevealAnimation width="">
      <section className="flex max-container justify-center flex-wrap gap-9 p-12 ">
      {services.map((service,index)=>(
        <ServiceCard key={index} {...service} />
      ))}
    </section>
    </RevealAnimation>
 
  )
}

export default Services