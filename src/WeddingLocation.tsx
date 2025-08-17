import { MapPin } from "lucide-react"; // іконка (можна замінити на свій svg)

export default function WeddingLocation() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-12">
          Локації весілля
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Блок: вінчання */}
          <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 flex flex-col items-center text-center">
            <MapPin className="w-12 h-12 text-green-800 mb-4" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Вінчання
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mt-2">
              Кафедральний собор <br />
              вул. Капітульна, 9а, Ужгород
            </p>
            <a
              href="https://www.google.com/maps?q=48.6237208,22.3016611"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-green-800 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:bg-green-600 transition"
            >
              Відкрити на карті
            </a>
          </div>

          {/* Блок: святкування */}
          <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 flex flex-col items-center text-center">
            <MapPin className="w-12 h-12 text-green-800 mb-4" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Святкування
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mt-2">
              Ресторан «Кілікія» <br />
              вул. Дитяча, 1г, Ужгород, Закарпатська область
            </p>
            <a
              href="https://www.google.com/maps?q=48.642501,22.3107032"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-green-800 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:bg-green-600 transition"
            >
              Відкрити на карті
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
