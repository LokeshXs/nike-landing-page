import { reviews } from "../constants";

import ReviewCard from "../components/ReviewCard";
import RevealAnimation from "../components/RevealAnimation";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <RevealAnimation width="100%">
        <h3 className="font-palanquin text-center text-4xl font-bold max-sm:text-3xl">
          What Our
          <span className="text-coral-red "> Customers </span>
          says?
        </h3>
      </RevealAnimation>
      <RevealAnimation width="100%">
        <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sequi! Beatae aperiam earum, illo necessitatibus accusantium maxime, laboriosam delectus voluptas itaque asperiores fugit consectetur assumenda libero in incidunt error commodi!</p>
      </RevealAnimation>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review) => (
            <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews