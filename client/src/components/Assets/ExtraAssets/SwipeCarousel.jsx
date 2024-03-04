import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const SwipeCarousel = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-purple-700">
      <div className="sticky top-0 flex h-50 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-purple/20 to-purple/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default SwipeCarousel

const cards = [
  {
    url: "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg",
    title: "Paris",
    id: 1,
  },
  {
    url: "https://lp-cms-production.imgix.net/2023-02/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg",
    title: "Nice",
    id: 2,
  },
  {
    url: "https://media.cntraveler.com/photos/57ec402c196e3f9630631fa4/16:9/w_2560%2Cc_limit/Saint_Georges_in_Vieux-Lyon_creditTristan_Deschamps.jpg",
    title: "Lyon",
    id: 3,
  },
  {
    url: "https://theplanetd.com/images/Best-Things-to-do-in-Marseille-France.jpg",
    title: "Marseille",
    id: 4,
  },
  {
    url: "https://traveladvo.com/wp-content/uploads/2020/04/Monaco-France-Everything-You-Need-to-Know.jpg",
    title: "Monaco",
    id: 5,
  },
  {
    url: "https://www.meganstarr.com/wp-content/uploads/2023/02/Best-things-to-do-in-Bordeaux-France_124255273.jpg",
    title: "Bordeaux",
    id: 6,
  },
  {
    url: "https://imageio.forbes.com/specials-images/imageserve/871336494/Montpellier-city-in-France/960x0.jpg?format=jpg&width=960",
    title: "Montpellier",
    id: 7,
  },
];