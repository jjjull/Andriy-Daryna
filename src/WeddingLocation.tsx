import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function WeddingLocation() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Заголовок */}
        <motion.h2
          className="text-xl md:text-2xl lg:text-4xl font-semibold text-center text-gray-800 pb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          ЛОКАЦІЇ ВЕСІЛЛЯ
        </motion.h2>

        {/* Grid з картками */}
        <motion.div
          className="grid gap-10 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Блок: вінчання */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-8 md:p-10 flex flex-col items-center text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <MapPin className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Вінчання
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mt-2">
              Церква Марії Єгипетської
              <br />
              вул. Б. Хмельницького 4, Минай
            </p>
            <a
              href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0+%D0%9C%D0%B0%D1%80%D1%96%D1%97+%D0%84%D0%B3%D0%B8%D0%BF%D0%B5%D1%82%D1%81%D1%8C%D0%BA%D0%BE%D1%97/@48.5923763,22.2817288,17z/data=!3m1!4b1!4m6!3m5!1s0x47391900029dc953:0xe9c1b5038fa01b16!8m2!3d48.5923763!4d22.2843037!16s%2Fg%2F11wpz7n21w?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:bg-gray-600 transition"
            >
              Відкрити на карті
            </a>
          </motion.div>

          {/* Блок: святкування */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-8 md:p-10 flex flex-col items-center text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <MapPin className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Святкування
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mt-2">
              Ресторан «Кілікія» <br />
              вул. Дитяча 1г, Ужгород
            </p>
            <a
              href="https://www.google.com/maps/place/%D0%9A%D1%96%D0%BB%D1%96%D0%BA%D1%96%D1%8F/@48.642501,22.3081283,17z/data=!3m1!4b1!4m6!3m5!1s0x473919d4777f9643:0x8b3296387ab85d62!8m2!3d48.642501!4d22.3107032!16s%2Fg%2F12hll3r2s?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:bg-gray-600 transition"
            >
              Відкрити на карті
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
