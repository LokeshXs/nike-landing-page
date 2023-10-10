import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
import RevealAnimation from "../components/RevealAnimation"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="felx flex-col gap-5">
        <RevealAnimation>
        <h2 className="text-4xl max-sm:text-3xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        </RevealAnimation>
       <RevealAnimation>
       <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, dolorum. Distinctio non, dolore assumenda eos aliquam aperiam. Quae exercitationem perspiciatis, molestias rerum obcaecati, consectetur beatae iure nulla, accusantium fugit adipisci?</p>
       </RevealAnimation>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product,index)=>(
          <PopularProductCard key={index} {...product}/>
        ))}

      </div>
    </section>
  )
}

export default PopularProducts