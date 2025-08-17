import { motion } from "framer-motion";

import Glasses from "./assets/glasses.svg";

import Plate from "./assets/plate.svg";
import Rings from "./assets/rings.svg";
import Church from "./assets/church.svg"

// Стрілка (вигнута між елементами)
const Arrow = ({ reverse = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="w-24 h-24 md:w-32 md:h-32 text-green-800 mx-auto"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d={
        reverse
          ? "M 180 20 C 40 60, 160 140, 20 180" // плавна дуга вліво
          : "M 20 20 C 160 60, 40 140, 180 180" // плавна дуга вправо
      }
      stroke="currentColor"
      fill="transparent"
      strokeLinecap="round"
    />
    <polyline
      points={reverse ? "25,175 20,180 25,185" : "175,175 180,180 175,185"}
      stroke="currentColor"
      fill="none"
    />
  </svg>
);

export default function WeddingTimeline() {
  const timeline = [
    { time: "12:00", title: "Вінчання", icon: Church },
    { time: "12:00", title: "Збір гостей", icon: Glasses },
    { time: "13:00", title: "Весільна церемонія", icon: Rings },
    { time: "14:00", title: "Святковий банкет", icon: Plate },
  
  ];

  return (
    <section className="px-4  bg-white">
      <h3 className="text-1,5xl md:text-2xl lg:text-4xl font-semibold text-center text-gray-800 pb-10 ">
          ПЛАН НАШОГО ВЕСІЛЛЯ
        </h3>
      <div className="max-w-xs mx-auto">
        

        <div className="relative flex flex-col items-center ">
          {timeline.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="w-full flex flex-col items-center">
                <motion.div
                  className={`
                    flex items-center gap-6 md:gap-12 w-full
                    ${isEven ? "justify-start" : "justify-end"}
                  `}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Контейнер події */}
                  <div
                    className={`
                      flex flex-col items-center text-center 
                      md:items-${isEven ? "start" : "end"} md:text-${isEven ? "left" : "right"}
                    `}
                  >
                    <motion.img
                      src={Icon}
                      alt={event.title}
                      className="w-28 h-28 md:w-36 md:h-36 mb-3"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                    />
                    <p className="text-gray-800 text-xl md:text-3xl font-medium">
                      {event.title}
                    </p>
                    <p className="text-green-800 font-extrabold text-2xl md:text-4xl">
                      {event.time}
                    </p>
                  </div>
                </motion.div>

                {/* Плавна стрілка */}
                {index !== timeline.length - 1 && (
                  <Arrow reverse={!isEven} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
