import { motion } from "framer-motion";

export default function Confirmation() {
  return (
    <section className="px-4">
      <div className="max-w-3xl mx-auto text-center rounded-2xl">
        {/* Заголовок */}
        <motion.h2
          className="text-xl md:text-2xl lg:text-4xl font-semibold text-center text-gray-800 pb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          ПІДТВЕРДЖЕННЯ ПРИСУТНОСТІ
        </motion.h2>

        {/* Текст підтвердження */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Будемо вдячні, якщо ви підтвердите свою присутність
          на нашому весіллі <br />
          <span className="font-semibold text-green-800">
            до 11.09.2024
          </span>
        </motion.p>
      </div>
    </section>
  );
}
