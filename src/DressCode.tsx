import { motion } from "framer-motion";
import Flower from "./assets/flower.svg";

export default function DressCode() {
  const colors = [
    { hex: "#996633" },
    { hex: "#C2B280" },
    { hex: "#f5deb3" },
    { hex: "#7BA05B" },
    { hex: "#d4efdf" },
  ];

  return (
    <section className="flex flex-col items-center">
      {/* Верхня квітка */}
      <motion.img
        src={Flower}
        alt="Flower"
        className="w-64 h-64"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // анімація тільки один раз
      />

      {/* Заголовок */}
      <motion.h3
        className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        ДРЕС-КОД
      </motion.h3>

      {/* Текст */}
      <motion.p
        className="text-gray-700 text-lg md:text-xl mt-4 max-w-2xl text-center px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Будемо раді, якщо Ви підтримаєте кольорову гаму нашого весілля,{" "}
        <span className="font-semibold text-gray-700">а також їхні відтінки.</span>
      </motion.p>

      {/* Палетка кольорів */}
      <motion.div
        className="flex gap-6 mt-8 flex-wrap justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {colors.map((c) => (
          <motion.div
            key={c.hex}
            className="flex flex-col items-center group"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-12 h-12 rounded-full shadow-md transition-transform transform group-hover:scale-110"
              style={{
                backgroundColor: c.hex,
              }}
            ></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Нижня квітка */}
      <motion.img
        src={Flower}
        alt="Flower"
        className="w-64 h-64"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
