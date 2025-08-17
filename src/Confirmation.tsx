

export default function Confirmation() {
  return (
    <section className="px-4 ">
      <div className="max-w-3xl mx-auto text-center  rounded-2xl ">
        {/* Заголовок */}
        
        <h2 className="text-1,5xl md:text-2xl lg:text-4xl font-light text-center text-gray-800 pb-10 ">
          ПІДТВЕРДЖЕННЯ ПРИСУТНОСТІ
        </h2>

        {/* Текст підтвердження */}
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Будемо вдячні, якщо ви підтвердите свою присутність
          на нашому весіллі <br />
          <span className="font-semibold text-green-800">
            до 11.09.2024
          </span>
        </p>

       
      </div>
    </section>
  );
}
