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
    <section ref={targetRef} className="relative h-[150vh] bg-purple-800">
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
    url: "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg",
    title: "Nice",
    id: 2,
  },
  {
    url: "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg",
    title: "Lyon",
    id: 3,
  },
  {
    url: "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg",
    title: "Marseille",
    id: 4,
  },
  {
    url: "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg",
    title: "Monaco",
    id: 5,
  },
  {
    url: "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg",
    title: "Bordeaux",
    id: 6,
  },
  {
    url: "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg",
    title: "Montpellier",
    id: 7,
  },
];